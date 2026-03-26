'use client'

import { useState } from 'react'
import type { FileTree, FileEntry, SearchResult, Topic } from '@/lib/files'
import type { TopicSettings } from '@/components/SettingsModal'

// Tailwind color classes kept in source so the compiler doesn't purge them
const COLOR_DOT: Record<string, string>  = {
  blue:    'bg-blue-400',
  emerald: 'bg-emerald-400',
  violet:  'bg-violet-400',
  amber:   'bg-amber-400',
  rose:    'bg-rose-400',
  sky:     'bg-sky-400',
  orange:  'bg-orange-400',
  teal:    'bg-teal-400',
}
const COLOR_TEXT: Record<string, string> = {
  blue:    'text-blue-400',
  emerald: 'text-emerald-400',
  violet:  'text-violet-400',
  amber:   'text-amber-400',
  rose:    'text-rose-400',
  sky:     'text-sky-400',
  orange:  'text-orange-400',
  teal:    'text-teal-400',
}
const COLOR_RING: Record<string, string> = {
  blue:    'ring-blue-500',
  emerald: 'ring-emerald-500',
  violet:  'ring-violet-500',
  amber:   'ring-amber-500',
  rose:    'ring-rose-500',
  sky:     'ring-sky-500',
  orange:  'ring-orange-500',
  teal:    'ring-teal-500',
}

function humanize(name: string) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FileButton({ file, selected, onSelect }: { file: FileEntry; selected: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left px-4 py-1.5 flex items-center gap-2 text-sm
        transition-colors group
        ${selected ? 'bg-slate-700 text-white' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-200'}`}
    >
      <svg className="w-3.5 h-3.5 flex-shrink-0 ml-2 opacity-40 group-hover:opacity-60"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="truncate">{humanize(file.name)}</span>
    </button>
  )
}

function GroupSection({ groupName, files, selectedFile, onFileSelect, dotClass }: {
  groupName: string
  files: FileEntry[]
  selectedFile: string | null
  onFileSelect: (p: string) => void
  dotClass: string
}) {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-1 flex items-center gap-2 text-xs text-slate-500
                   hover:text-slate-300 transition-colors"
      >
        <span className={`w-1.5 h-1.5 rounded-sm flex-shrink-0 ${dotClass} opacity-60`} />
        <span className="truncate font-medium tracking-wide">{humanize(groupName)}</span>
        <svg className={`w-3 h-3 ml-auto flex-shrink-0 opacity-40 transition-transform ${open ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && files.map(file => (
        <button
          key={file.path}
          onClick={() => onFileSelect(file.path)}
          className={`w-full text-left pl-8 pr-4 py-1.5 flex items-center gap-2 text-sm
            transition-colors group
            ${selectedFile === file.path ? 'bg-slate-700 text-white' : 'text-slate-500 hover:bg-slate-800 hover:text-slate-200'}`}
        >
          <svg className="w-3 h-3 flex-shrink-0 opacity-30 group-hover:opacity-50"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="truncate">{humanize(file.name)}</span>
        </button>
      ))}
    </div>
  )
}

// ─── Main Sidebar ─────────────────────────────────────────────────────────────

interface Props {
  topics: Topic[]
  selectedTopic: string
  onTopicChange: (id: string) => void
  topicSettings: TopicSettings | null
  fileTree: FileTree
  selectedFile: string | null
  searchQuery: string
  onSearchChange: (q: string) => void
  matchCase: boolean
  onMatchCaseChange: (v: boolean) => void
  onFileSelect: (path: string) => void
  searchResults: SearchResult[]
  onChangelogOpen: () => void
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({
  topics, selectedTopic, onTopicChange, topicSettings,
  fileTree, selectedFile, searchQuery, onSearchChange, matchCase, onMatchCaseChange,
  onFileSelect, searchResults, onChangelogOpen, isOpen, onClose,
}: Props) {
  const isSearching = searchQuery.trim().length > 0
  const currentTopic = topics.find(t => t.id === selectedTopic)

  // Folders for the current topic, filtered by visibility settings
  const visibleFolders = currentTopic?.folders.filter(f =>
    topicSettings ? (topicSettings.visibleFolders[f.id] ?? true) : true
  ) ?? []

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-40 w-72 flex-shrink-0 bg-slate-900 flex flex-col h-screen border-r border-slate-800
      transition-transform duration-200
      md:relative md:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>

      {/* Header */}
      <div className="px-4 pt-5 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">⚡</span>
          <span className="text-white font-bold text-sm tracking-widest">PREP HUB</span>
          <button
            onClick={onClose}
            className="ml-auto md:hidden text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Topic switcher */}
        {topics.length > 0 && (
          <div className="mb-3">
            {topics.length === 1 ? (
              <div className="flex items-center gap-2 px-2 py-1.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${COLOR_DOT[topics[0].color] ?? 'bg-slate-400'}`} />
                <span className={`text-xs font-semibold ${COLOR_TEXT[topics[0].color] ?? 'text-slate-400'}`}>
                  {topics[0].label}
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-1">
                {topics.map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => onTopicChange(topic.id)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all
                      ${selectedTopic === topic.id
                        ? `bg-slate-700 text-white ring-1 ${COLOR_RING[topic.color] ?? 'ring-slate-500'}`
                        : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                      }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-slate-500 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search files…"
            className="w-full bg-slate-800 text-slate-200 text-sm pl-8 pr-14 py-2 rounded-md
                       border border-slate-700 focus:outline-none focus:border-blue-500
                       placeholder-slate-600 transition-colors"
          />
          {/* Match-case toggle */}
          <button
            onClick={() => onMatchCaseChange(!matchCase)}
            title={matchCase ? 'Match case: on' : 'Match case: off'}
            className={`absolute top-1.5 px-1 py-0.5 rounded text-xs font-mono font-bold transition-colors
              ${isSearching ? 'right-8' : 'right-2'}
              ${matchCase
                ? 'text-blue-400 bg-slate-700 ring-1 ring-blue-500'
                : 'text-slate-500 hover:text-slate-300'}`}
          >
            Aa
          </button>
          {isSearching && (
            <button onClick={() => onSearchChange('')}
              className="absolute right-2 top-2 text-slate-500 hover:text-slate-300 transition-colors">
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
                      ${COLOR_DOT[currentTopic?.folders.find(f => f.id === result.file.folder)?.color ?? ''] ?? 'bg-slate-400'}`} />
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
          visibleFolders.map(folderMeta => {
            const files = fileTree[folderMeta.id] ?? []
            const dotClass  = COLOR_DOT[folderMeta.color]  ?? 'bg-slate-400'
            const textClass = COLOR_TEXT[folderMeta.color] ?? 'text-slate-400'

            const rootFiles = files.filter(f => !f.group)
            const groups = files.reduce((acc, f) => {
              if (f.group) {
                if (!acc[f.group]) acc[f.group] = []
                acc[f.group].push(f)
              }
              return acc
            }, {} as Record<string, FileEntry[]>)

            return (
              <div key={folderMeta.id} className="mb-3">
                <div className="flex items-center gap-2 px-4 py-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${textClass}`}>
                    {folderMeta.label}
                  </span>
                  <span className="text-xs text-slate-700 ml-auto">{files.length}</span>
                </div>
                {files.length === 0 ? (
                  <p className="px-7 py-1 text-xs text-slate-700 italic">Empty</p>
                ) : (
                  <>
                    {rootFiles.map(file => (
                      <FileButton key={file.path} file={file}
                        selected={selectedFile === file.path}
                        onSelect={() => onFileSelect(file.path)} />
                    ))}
                    {Object.entries(groups).map(([groupName, groupFiles]) => (
                      <GroupSection key={groupName} groupName={groupName}
                        files={groupFiles} selectedFile={selectedFile}
                        onFileSelect={onFileSelect} dotClass={dotClass} />
                    ))}
                  </>
                )}
              </div>
            )
          })
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-700">Prep Hub · {new Date().getFullYear()}</p>
        <button
          onClick={onChangelogOpen}
          title="View changelog"
          className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors
            ${selectedFile === '__changelog__'
              ? 'text-amber-400 bg-slate-800'
              : 'text-slate-600 hover:text-amber-400 hover:bg-slate-800'}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Changelog
        </button>
      </div>
    </aside>
  )
}
