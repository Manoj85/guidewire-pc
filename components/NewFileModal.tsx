'use client'

import { useEffect, useState } from 'react'
import type { Topic } from '@/lib/files'

interface EditFile {
  path: string      // e.g. "sources/my-file.md"
  content: string
}

interface Props {
  open: boolean
  onClose: () => void
  topic: Topic | null
  selectedTopic: string
  defaultFolder?: string
  editFile?: EditFile          // when set → edit mode
  onFileSaved: (path: string) => void
}

function parsePath(filePath: string) {
  const parts = filePath.split('/')
  const filename = (parts[parts.length - 1] ?? '').replace(/\.md$/, '')
  const folder = parts[0] ?? 'sources'
  return { folder, filename }
}

export default function NewFileModal({
  open, onClose, topic, selectedTopic, defaultFolder = 'sources', editFile, onFileSaved,
}: Props) {
  const isEdit = !!editFile

  const [folder, setFolder]     = useState(defaultFolder)
  const [filename, setFilename] = useState('')
  const [content, setContent]   = useState('')
  const [cleaning, setCleaning] = useState(false)
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState('')

  // Sync state when modal opens or editFile changes
  useEffect(() => {
    if (!open) return
    if (editFile) {
      const parsed = parsePath(editFile.path)
      setFolder(parsed.folder)
      setFilename(parsed.filename)
      setContent(editFile.content)
    } else {
      setFolder(defaultFolder)
      setFilename('')
      setContent('')
    }
    setError('')
  }, [open, editFile, defaultFolder])

  if (!open) return null

  const folders = topic?.folders ?? []

  const handleClean = async () => {
    if (!content.trim()) return
    setCleaning(true)
    setError('')
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Cleanup failed')
      setContent(data.cleaned)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setCleaning(false)
    }
  }

  const handleSave = async () => {
    if (!filename.trim() || !content.trim()) return
    setSaving(true)
    setError('')

    const safeName = filename.trim().replace(/[^a-z0-9-_]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
    const newPath = `${folder}/${safeName}.md`

    try {
      // In edit mode: if the filename changed, rename the old file first
      if (isEdit && editFile && newPath !== editFile.path) {
        const renameRes = await fetch('/api/file/rename', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: selectedTopic, path: editFile.path, newName: safeName }),
        })
        const renameData = await renameRes.json()
        if (!renameRes.ok) throw new Error(renameData.error ?? 'Rename failed')
      }

      // Write content to the (possibly renamed) path
      const writeRes = await fetch('/api/file', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: selectedTopic, path: newPath, content }),
      })
      const writeData = await writeRes.json()
      if (!writeRes.ok) throw new Error(writeData.error ?? 'Save failed')

      onClose()
      onFileSaved(newPath)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setSaving(false)
    }
  }

  const folderColor: Record<string, string> = {
    sources: 'text-sky-400', qa: 'text-emerald-400', research: 'text-amber-400',
    resume: 'text-violet-400', jd: 'text-blue-400',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 flex-shrink-0">
          <svg className={`w-5 h-5 ${isEdit ? 'text-amber-400' : 'text-emerald-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isEdit ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            )}
          </svg>
          <div>
            <h2 className="text-white font-semibold text-sm">{isEdit ? 'Edit File' : 'New File'}</h2>
            <p className="text-slate-500 text-xs">
              {isEdit ? 'Edit content or rename · clean up with Claude' : 'Create a markdown file · paste chat to clean up with Claude'}
            </p>
          </div>
          <button onClick={onClose} className="ml-auto text-slate-500 hover:text-slate-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-4 overflow-y-auto flex-1">

          {/* Folder + Filename row */}
          <div className="flex gap-3">
            <div className="w-36 flex-shrink-0">
              <label className="block text-xs text-slate-400 mb-1.5">Folder</label>
              <select
                value={folder}
                onChange={e => setFolder(e.target.value)}
                disabled={isEdit}
                className="w-full bg-slate-800 border border-slate-700 rounded-md text-sm px-3 py-2
                           text-slate-200 focus:outline-none focus:border-emerald-500
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {folders.map(f => (
                  <option key={f.id} value={f.id}>{f.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs text-slate-400 mb-1.5">
                Filename <span className="text-slate-600">.md</span>
                {isEdit && <span className="text-slate-600 ml-1">· editable to rename</span>}
              </label>
              <div className={`flex items-center bg-slate-800 border rounded-md transition-colors
                ${isEdit ? 'border-amber-700 focus-within:border-amber-500' : 'border-slate-700 focus-within:border-emerald-500'}`}>
                <span className={`pl-3 text-xs font-mono flex-shrink-0 ${folderColor[folder] ?? 'text-slate-500'}`}>
                  {folder}/
                </span>
                <input
                  type="text"
                  value={filename}
                  onChange={e => setFilename(e.target.value)}
                  placeholder="my-file-name"
                  className="flex-1 bg-transparent text-sm text-slate-200 px-2 py-2
                             focus:outline-none font-mono placeholder-slate-600"
                />
                <span className="pr-3 text-xs text-slate-600 font-mono">.md</span>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-slate-400">Content</label>
              <button
                onClick={handleClean}
                disabled={!content.trim() || cleaning}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors
                           bg-violet-700 hover:bg-violet-600 text-white
                           disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {cleaning ? (
                  <>
                    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Cleaning…
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Clean up with Claude
                  </>
                )}
              </button>
            </div>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={14}
              placeholder={isEdit ? 'Edit content…' : 'Paste chat messages here, or write markdown directly…'}
              className={`w-full bg-slate-800 border rounded-md text-sm text-slate-200
                         px-3 py-2.5 resize-y focus:outline-none leading-relaxed placeholder-slate-600 font-mono
                         ${isEdit ? 'border-slate-600 focus:border-amber-500' : 'border-slate-700 focus:border-emerald-500'}`}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-950/30 px-3 py-2 rounded-md border border-rose-900">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-800 flex items-center justify-end gap-2 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!filename.trim() || !content.trim() || saving}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors text-white
                       disabled:opacity-40 disabled:cursor-not-allowed
                       ${isEdit ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'}`}
          >
            {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Save file'}
          </button>
        </div>
      </div>
    </div>
  )
}
