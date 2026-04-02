'use client'

import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  currentPath: string       // e.g. "sources/my-file.md"
  selectedTopic: string
  onRenamed: (newPath: string) => void
}

export default function RenameModal({ open, onClose, currentPath, selectedTopic, onRenamed }: Props) {
  const currentName = currentPath.split('/').pop()?.replace(/\.md$/, '') ?? ''
  const [name, setName] = useState(currentName)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) { setName(currentName); setError('') }
  }, [open, currentName])

  if (!open) return null

  const handleSave = async () => {
    if (!name.trim() || name.trim() === currentName) { onClose(); return }
    setSaving(true)
    setError('')
    try {
      const res = await fetch('/api/file/rename', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: selectedTopic, path: currentPath, newName: name.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Rename failed')
      onRenamed(data.newPath)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm shadow-2xl">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800">
          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h2 className="text-white font-semibold text-sm">Rename file</h2>
          <button onClick={onClose} className="ml-auto text-slate-500 hover:text-slate-300 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-4 space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">New name <span className="text-slate-600">.md</span></label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') onClose() }}
              autoFocus
              className="w-full bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-200
                         px-3 py-2 focus:outline-none focus:border-amber-500 font-mono"
            />
          </div>
          {error && (
            <p className="text-xs text-rose-400">{error}</p>
          )}
        </div>
        <div className="px-5 py-3 border-t border-slate-800 flex justify-end gap-2">
          <button onClick={onClose}
            className="px-4 py-1.5 rounded text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors">
            Cancel
          </button>
          <button onClick={handleSave} disabled={!name.trim() || saving}
            className="px-4 py-1.5 rounded text-sm font-medium bg-amber-600 hover:bg-amber-500 text-white
                       disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            {saving ? 'Renaming…' : 'Rename'}
          </button>
        </div>
      </div>
    </div>
  )
}
