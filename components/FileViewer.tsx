'use client'

import { useState, useMemo, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'
import { rehypeGlossary } from '@/lib/rehype-glossary'
import GlossaryModal from '@/components/GlossaryModal'
import glossaryData from '@/content/glossary.json'

interface Props {
  filePath: string | null
  content: string
  loading: boolean
  isEditing: boolean
  editContent: string
  onEditContentChange: (val: string) => void
  onEdit: () => void
  onSave: () => void
  onCancel: () => void
  saving: boolean
  canEdit: boolean
  onSettingsOpen: () => void
  onFileNavigate?: (path: string) => void
  searchQuery?: string
  matchCase?: boolean
}

const FOLDER_LABELS: Record<string, string> = {
  jd: 'Job Descriptions',
  qa: 'Interview Q&A',
  resume: 'Resume Notes',
  research: 'Research',
  sources: 'Sources',
}

function breadcrumb(filePath: string) {
  if (filePath === '__changelog__') {
    return { folder: 'Repo', file: 'Changelog' }
  }
  const parts = filePath.split('/')
  const file = parts[parts.length - 1]
  const folder = parts[0]
  return {
    folder: FOLDER_LABELS[folder] ?? folder,
    file: (file ?? '').replace(/\.md$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
  }
}

// Detect topic-relative file paths in inline code spans (e.g. `qa/choks/01-strategy.md`)
const FILE_PATH_RE = /^([\w-]+\/)*[\w-]+\.(md|tsx?|json)$/

function resolveFilePath(raw: string): string | null {
  // Strip leading content/<topic>/ if present
  const stripped = raw.replace(/^content\/[\w-]+\//, '')
  return FILE_PATH_RE.test(stripped) ? stripped : null
}

export default function FileViewer({
  filePath, content, loading, isEditing, editContent,
  onEditContentChange, onEdit, onSave, onCancel, saving, canEdit, onSettingsOpen,
  onFileNavigate, searchQuery, matchCase,
}: Props) {
  const [modalTerm, setModalTerm] = useState<string | null>(null)

  // Highlight search matches after ReactMarkdown has painted to DOM
  useEffect(() => {
    const term = searchQuery?.trim()

    // Defer to after browser paint so ReactMarkdown's DOM is ready
    const raf = requestAnimationFrame(() => {
      const container = document.querySelector<HTMLElement>('[data-prose-content]')
      if (!container) return

      // Remove previous highlights
      container.querySelectorAll('mark[data-search]').forEach(mark => {
        const parent = mark.parentNode
        if (parent) {
          parent.replaceChild(document.createTextNode(mark.textContent || ''), mark)
          parent.normalize()
        }
      })

      if (!term || isEditing || loading) return

      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const flags = matchCase ? 'g' : 'gi'
      const regex = new RegExp(`(${escaped})`, flags)

      // Collect all text nodes, skipping script/style/mark/code
      const textNodes: Text[] = []
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const tag = node.parentElement?.tagName.toLowerCase() ?? ''
          return ['script', 'style', 'mark', 'code'].includes(tag)
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT
        },
      })
      let n: Node | null
      while ((n = walker.nextNode())) textNodes.push(n as Text)

      let firstMark: HTMLElement | null = null

      for (const textNode of textNodes) {
        const text = textNode.textContent || ''
        if (!regex.test(text)) { regex.lastIndex = 0; continue }
        regex.lastIndex = 0

        const frag = document.createDocumentFragment()
        let last = 0
        let match: RegExpExecArray | null
        while ((match = regex.exec(text)) !== null) {
          if (match.index > last) frag.appendChild(document.createTextNode(text.slice(last, match.index)))
          const mark = document.createElement('mark')
          mark.setAttribute('data-search', '1')
          mark.className = 'bg-yellow-200 text-yellow-900 rounded-sm px-0.5'
          mark.textContent = match[0]
          if (!firstMark) firstMark = mark
          frag.appendChild(mark)
          last = regex.lastIndex
        }
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)))
        textNode.parentNode?.replaceChild(frag, textNode)
      }

      firstMark?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })

    return () => cancelAnimationFrame(raf)
  }, [searchQuery, matchCase, content, isEditing, loading])

  // Custom components: intercept glossary-term spans, file path links, external links
  const mdComponents = useMemo(() => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    span: ({ children, ...props }: any) => {
      const term = props['data-glossary-term']
      if (term && glossaryData[term as keyof typeof glossaryData]) {
        return (
          <span
            className="glossary-term"
            onClick={() => setModalTerm(term)}
            title={`Click for definition: ${term}`}
          >
            {children}
            <sup className="glossary-icon">i</sup>
          </span>
        )
      }
      return <span {...props}>{children}</span>
    },
    // Inline code: detect file paths and render as clickable links
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ children, className }: any) => {
      // Only intercept inline code (no className = not a fenced block)
      if (!className && onFileNavigate && typeof children === 'string') {
        const resolved = resolveFilePath(children.trim())
        if (resolved) {
          return (
            <button
              onClick={() => onFileNavigate(resolved)}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs
                         font-mono bg-amber-50 text-amber-700 border border-amber-200
                         hover:bg-amber-100 hover:border-amber-300 transition-colors cursor-pointer"
              title={`Open ${resolved}`}
            >
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {children}
            </button>
          )
        }
      }
      return <code className={className}>{children}</code>
    },
    // Open all external links in new tab
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ href, children }: any) => (
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  }), [onFileNavigate])

  // Pass [rehypeGlossary, glossaryData] so unified calls rehypeGlossary(glossaryData)
  // itself and receives the transformer — not the pre-called result
  const rehypePlugins = useMemo(
    () => [rehypeHighlight, [rehypeGlossary, glossaryData]] as any,
    [],
  )

  const MdContent = ({ source }: { source: string }) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={rehypePlugins}
      components={mdComponents}
    >
      {source}
    </ReactMarkdown>
  )

  const GearButton = () => (
    <button
      onClick={onSettingsOpen}
      title="Settings"
      className="flex items-center justify-center w-7 h-7 rounded-md text-slate-400
                 hover:text-slate-600 hover:bg-slate-100 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  )

  if (!filePath) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        {/* Top bar with gear even on empty state */}
        <div className="flex items-center justify-end px-6 py-3 border-b border-slate-200 bg-white flex-shrink-0">
          <GearButton />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-slate-400 select-none">
          <svg className="w-16 h-16 mb-4 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-base font-medium text-slate-300">Select a file to read</p>
          <p className="text-sm text-slate-500 mt-1">Pick from the sidebar or use search</p>
        </div>
      </div>
    )
  }

  const { folder, file } = breadcrumb(filePath)

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-200 bg-white flex-shrink-0">
        <nav className="flex items-center gap-1.5 text-sm min-w-0">
          <span className="text-slate-400 truncate">{folder}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-medium truncate">{file}</span>
        </nav>
        <div className="flex items-center gap-2 ml-4 flex-shrink-0">
          {isEditing ? (
            <>
              <button
                onClick={onCancel}
                className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900
                           rounded-md hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onSave}
                disabled={saving}
                className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md
                           hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {saving ? 'Saving…' : 'Save'}
              </button>
            </>
          ) : canEdit ? (
            <button
              onClick={onEdit}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600
                         rounded-md hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          ) : (
            <span className="text-xs text-slate-400 italic">Read-only on Vercel</span>
          )}
          <GearButton />
        </div>
      </div>

      {/* Body */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-slate-400 text-sm animate-pulse">Loading…</div>
        </div>
      ) : isEditing ? (
        <div className="flex-1 flex overflow-hidden">
          {/* Left: raw markdown */}
          <div className="flex-1 flex flex-col border-r border-slate-200 min-w-0">
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs
                            text-slate-500 font-semibold uppercase tracking-wider flex-shrink-0">
              Markdown
            </div>
            <textarea
              value={editContent}
              onChange={e => onEditContentChange(e.target.value)}
              className="flex-1 p-6 font-mono text-sm text-slate-800 resize-none
                         focus:outline-none leading-relaxed bg-white"
              spellCheck={false}
            />
          </div>
          {/* Right: preview */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs
                            text-slate-500 font-semibold uppercase tracking-wider flex-shrink-0">
              Preview
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <div className="prose prose-slate max-w-none">
                <MdContent source={editContent} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            <div className="prose prose-slate max-w-none" data-prose-content>
              <MdContent source={content} />
            </div>
          </div>
        </div>
      )}

      {/* Glossary modal */}
      <GlossaryModal
        term={modalTerm}
        definition={modalTerm ? (glossaryData[modalTerm as keyof typeof glossaryData] ?? null) : null}
        onClose={() => setModalTerm(null)}
      />
    </div>
  )
}
