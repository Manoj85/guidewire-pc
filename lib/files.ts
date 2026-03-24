import fs from 'fs'
import path from 'path'

const CONTENT_ROOT = path.join(process.cwd(), 'content')
const CONTENT_DIRS = ['jd', 'qa', 'resume', 'research'] as const
export type FolderName = (typeof CONTENT_DIRS)[number]

export interface FileEntry {
  name: string      // filename without .md
  path: string      // relative path e.g. "jd/foo.md" or "qa/choks/01-strategy.md"
  folder: FolderName
  group?: string    // subdirectory name e.g. "choks"
}

export type FileTree = Record<FolderName, FileEntry[]>

export function getFileTree(): FileTree {
  const tree = {} as FileTree

  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join(CONTENT_ROOT, dir)
    if (!fs.existsSync(dirPath)) {
      tree[dir] = []
      continue
    }

    const entries: FileEntry[] = []
    const items = fs.readdirSync(dirPath, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))

    for (const item of items) {
      if (item.isFile() && item.name.endsWith('.md')) {
        entries.push({
          name: item.name.replace(/\.md$/, ''),
          path: `${dir}/${item.name}`,
          folder: dir,
        })
      } else if (item.isDirectory()) {
        const subDirPath = path.join(dirPath, item.name)
        const subFiles = fs.readdirSync(subDirPath)
          .filter(f => f.endsWith('.md'))
          .sort()
          .map(f => ({
            name: f.replace(/\.md$/, ''),
            path: `${dir}/${item.name}/${f}`,
            folder: dir as FolderName,
            group: item.name,
          }))
        entries.push(...subFiles)
      }
    }

    tree[dir] = entries
  }

  return tree
}

function safePath(filePath: string): string {
  const full = path.resolve(CONTENT_ROOT, filePath)
  const rel = path.relative(CONTENT_ROOT, full)
  if (rel.startsWith('..') || path.isAbsolute(rel)) throw new Error('Access denied')
  const topDir = rel.split(path.sep)[0]
  if (!CONTENT_DIRS.includes(topDir as FolderName)) throw new Error('Access denied')
  return full
}

export function readFile(filePath: string): string {
  return fs.readFileSync(safePath(filePath), 'utf-8')
}

export function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(safePath(filePath), content, 'utf-8')
}

export interface SearchResult {
  file: FileEntry
  snippet: string
  matches: number
}

export function searchFiles(query: string): SearchResult[] {
  if (!query.trim()) return []
  const tree = getFileTree()
  const q = query.toLowerCase()
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const results: SearchResult[] = []

  for (const files of Object.values(tree)) {
    for (const file of files) {
      try {
        const content = readFile(file.path)
        const lower = content.toLowerCase()
        const matchCount = (lower.match(new RegExp(escaped, 'g')) ?? []).length
        if (matchCount > 0) {
          const idx = lower.indexOf(q)
          const start = Math.max(0, idx - 80)
          const end = Math.min(content.length, idx + q.length + 80)
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
