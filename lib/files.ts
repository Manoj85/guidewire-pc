import fs from 'fs'
import path from 'path'

const CONTENT_ROOT = path.join(process.cwd(), 'content')

// ─── Topic types ─────────────────────────────────────────────────────────────

export interface FolderMeta {
  id: string
  label: string
  color: string
}

export interface Topic {
  id: string
  label: string
  description: string
  color: string
  folders: FolderMeta[]
}

// ─── File types ───────────────────────────────────────────────────────────────

export interface FileEntry {
  name: string    // filename without .md
  path: string    // relative to topic root e.g. "jd/foo.md"
  folder: string
  group?: string  // subdirectory name e.g. "choks"
}

export type FileTree = Record<string, FileEntry[]>

export interface SearchResult {
  file: FileEntry
  snippet: string
  matches: number
}

// ─── Topic helpers ────────────────────────────────────────────────────────────

export function getTopics(): Topic[] {
  const topicsPath = path.join(CONTENT_ROOT, 'topics.json')
  const raw = fs.readFileSync(topicsPath, 'utf-8')
  return JSON.parse(raw) as Topic[]
}

export function getTopic(topicId: string): Topic | undefined {
  return getTopics().find(t => t.id === topicId)
}

function topicRoot(topicId: string): string {
  return path.join(CONTENT_ROOT, topicId)
}

// ─── File tree ────────────────────────────────────────────────────────────────

export function getFileTree(topicId: string): FileTree {
  const topic = getTopic(topicId)
  if (!topic) return {}

  const root = topicRoot(topicId)
  const tree: FileTree = {}

  for (const folder of topic.folders) {
    const dirPath = path.join(root, folder.id)
    if (!fs.existsSync(dirPath)) {
      tree[folder.id] = []
      continue
    }

    const entries: FileEntry[] = []
    const items = fs.readdirSync(dirPath, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))

    for (const item of items) {
      if (item.isFile() && item.name.endsWith('.md')) {
        entries.push({
          name: item.name.replace(/\.md$/, ''),
          path: `${folder.id}/${item.name}`,
          folder: folder.id,
        })
      } else if (item.isDirectory()) {
        const subDirPath = path.join(dirPath, item.name)
        const subFiles = fs.readdirSync(subDirPath)
          .filter(f => f.endsWith('.md'))
          .sort()
          .map(f => ({
            name: f.replace(/\.md$/, ''),
            path: `${folder.id}/${item.name}/${f}`,
            folder: folder.id,
            group: item.name,
          }))
        entries.push(...subFiles)
      }
    }

    tree[folder.id] = entries
  }

  return tree
}

// ─── Safe path resolution ─────────────────────────────────────────────────────

function safePath(topicId: string, filePath: string): string {
  const topic = getTopic(topicId)
  if (!topic) throw new Error('Unknown topic')

  const root = topicRoot(topicId)
  const full = path.resolve(root, filePath)
  const rel = path.relative(root, full)
  if (rel.startsWith('..') || path.isAbsolute(rel)) throw new Error('Access denied')

  const topDir = rel.split(path.sep)[0]
  const validFolders = topic.folders.map(f => f.id)
  if (!validFolders.includes(topDir)) throw new Error('Access denied')

  return full
}

// ─── Read / Write ─────────────────────────────────────────────────────────────

export function readFile(topicId: string, filePath: string): string {
  return fs.readFileSync(safePath(topicId, filePath), 'utf-8')
}

export function writeFile(topicId: string, filePath: string, content: string): void {
  const full = safePath(topicId, filePath)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content, 'utf-8')
}

export function deleteFile(topicId: string, filePath: string): void {
  fs.unlinkSync(safePath(topicId, filePath))
}

export function renameFile(topicId: string, oldPath: string, newName: string): string {
  const oldFull = safePath(topicId, oldPath)
  const dir = path.dirname(oldPath)
  const safeName = newName.replace(/[^a-z0-9-_]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  const newPath = `${dir}/${safeName}.md`
  const newFull = safePath(topicId, newPath)
  fs.renameSync(oldFull, newFull)
  return newPath
}

// ─── Search ───────────────────────────────────────────────────────────────────

export function searchFiles(topicId: string, query: string, matchCase = false): SearchResult[] {
  if (!query.trim()) return []

  const tree = getFileTree(topicId)
  const flags = matchCase ? 'g' : 'gi'
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(escaped, flags)
  const results: SearchResult[] = []

  for (const files of Object.values(tree)) {
    for (const file of files) {
      try {
        const content = readFile(topicId, file.path)
        const matchCount = (content.match(regex) ?? []).length
        if (matchCount > 0) {
          const idx = content.search(regex)
          const start = Math.max(0, idx - 80)
          const end = Math.min(content.length, idx + query.length + 80)
          const snippet =
            (start > 0 ? '…' : '') +
            content.slice(start, end).replace(/\n+/g, ' ') +
            (end < content.length ? '…' : '')
          results.push({ file, snippet, matches: matchCount })
        }
      } catch {
        // skip unreadable files
      }
    }
  }

  return results.sort((a, b) => b.matches - a.matches)
}
