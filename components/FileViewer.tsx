'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

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
}

const FOLDER_LABELS: Record<string, string> = {
  jd: 'Job Descriptions',
  qa: 'Interview Q&A',
  resume: 'Resume Notes',
  research: 'Research',
}

function breadcrumb(filePath: string) {
  const [folder, file] = filePath.split('/')
  return {
    folder: FOLDER_LABELS[folder] ?? folder,
    file: (file ?? '').replace(/\.md$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
  }
}

const mdComponents = {
  // Open links in new tab
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  ),
}

export default function FileViewer({
  filePath, content, loading, isEditing, editContent,
  onEditContentChange, onEdit, onSave, onCancel, saving, canEdit,
}: Props) {

  if (!filePath) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 text-slate-400 select-none">
        <svg className="w-16 h-16 mb-4 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-base font-medium text-slate-300">Select a file to read</p>
        <p className="text-sm text-slate-500 mt-1">Pick from the sidebar or use search</p>
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
                className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 rounded-md
                           hover:bg-slate-100 transition-colors"
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
        </div>
      </div>

      {/* Body */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-slate-400 text-sm animate-pulse">Loading…</div>
        </div>
      ) : isEditing ? (
        /* Split-pane editor */
        <div className="flex-1 flex overflow-hidden">
          {/* Left: raw markdown */}
          <div className="flex-1 flex flex-col border-r border-slate-200 min-w-0">
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500
                            font-semibold uppercase tracking-wider flex-shrink-0">
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
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500
                            font-semibold uppercase tracking-wider flex-shrink-0">
              Preview
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <div className="prose prose-slate max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={mdComponents}
                >
                  {editContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* View mode */
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={mdComponents}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
