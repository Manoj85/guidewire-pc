'use client'

import type { FileTree, FileEntry, SearchResult } from '@/app/page'

const FOLDER_META: Record<string, { label: string; dotClass: string; textClass: string }> = {
  jd:       { label: 'Job Descriptions', dotClass: 'bg-blue-400',    textClass: 'text-blue-400'    },
  qa:       { label: 'Interview Q&A',    dotClass: 'bg-emerald-400', textClass: 'text-emerald-400' },
  resume:   { label: 'Resume Notes',     dotClass: 'bg-violet-400',  textClass: 'text-violet-400'  },
  research: { label: 'Research',         dotClass: 'bg-amber-400',   textClass: 'text-amber-400'   },
}

function humanize(name: string) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

interface Props {
  fileTree: FileTree
  selectedFile: string | null
  searchQuery: string
  onSearchChange: (q: string) => void
  onFileSelect: (path: string) => void
  searchResults: SearchResult[]
}

export default function Sidebar({
  fileTree, selectedFile, searchQuery, onSearchChange, onFileSelect, searchResults,
}: Props) {
  const isSearching = searchQuery.trim().length > 0

  return (
    <aside className="w-72 flex-shrink-0 bg-slate-900 flex flex-col h-screen border-r border-slate-800">

      {/* Header */}
      <div className="px-4 pt-5 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">⚡</span>
          <span className="text-white font-bold text-sm tracking-widest">GW PREP</span>
        </div>

        {/* Search input */}
        <div className="relative">
          <svg
            className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-500 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search files…"
            className="w-full bg-slate-800 text-slate-200 text-sm pl-8 pr-8 py-2 rounded-md
                       border border-slate-700 focus:outline-none focus:border-blue-500
                       placeholder-slate-600 transition-colors"
          />
          {isSearching && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* File list / search results */}
      <div className="flex-1 overflow-y-auto py-3">
        {isSearching ? (
          <div>
            <p className="px-4 py-1.5 text-xs text-slate-500 uppercase tracking-wider">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
            </p>
            {searchResults.length === 0 ? (
              <p className="px-4 py-3 text-sm text-slate-600 italic">No matches found</p>
            ) : (
              searchResults.map(result => (
                <button
                  key={result.file.path}
                  onClick={() => onFileSelect(result.file.path)}
                  className={`w-full text-left px-4 py-2.5 transition-colors hover:bg-slate-800
                    ${selectedFile === result.file.path ? 'bg-slate-800' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0
                      ${FOLDER_META[result.file.folder]?.dotClass ?? 'bg-slate-400'}`} />
                    <span className="text-sm text-slate-200 truncate">{humanize(result.file.name)}</span>
                    <span className="text-xs text-slate-600 ml-auto flex-shrink-0">{result.matches}×</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-3.5 leading-relaxed">
                    {result.snippet}
                  </p>
                </button>
              ))
            )}
          </div>
        ) : (
          Object.entries(fileTree).map(([folder, files]) => {
            const meta = FOLDER_META[folder] ?? { label: folder, dotClass: 'bg-slate-400', textClass: 'text-slate-400' }
            return (
              <div key={folder} className="mb-3">
                {/* Folder header */}
                <div className="flex items-center gap-2 px-4 py-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${meta.dotClass}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${meta.textClass}`}>
                    {meta.label}
                  </span>
                  <span className="text-xs text-slate-700 ml-auto">{files.length}</span>
                </div>

                {/* Files */}
                {files.length === 0 ? (
                  <p className="px-7 py-1 text-xs text-slate-700 italic">Empty</p>
                ) : (
                  files.map(file => (
                    <button
                      key={file.path}
                      onClick={() => onFileSelect(file.path)}
                      className={`w-full text-left px-4 py-1.5 flex items-center gap-2 text-sm
                        transition-colors group
                        ${selectedFile === file.path
                          ? 'bg-slate-700 text-white'
                          : 'text-slate-500 hover:bg-slate-800 hover:text-slate-200'
                        }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 ml-2 opacity-40 group-hover:opacity-60"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="truncate">{humanize(file.name)}</span>
                    </button>
                  ))
                )}
              </div>
            )
          })
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-800">
        <p className="text-xs text-slate-700">Guidewire P&amp;C Prep · {new Date().getFullYear()}</p>
      </div>
    </aside>
  )
}
