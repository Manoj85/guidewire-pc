'use client'

import { useRef, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  selectedTopic: string
  onFileSaved: (path: string) => void
}

export default function AudioTranscriber({ open, onClose, selectedTopic, onFileSaved }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [transcribing, setTranscribing] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [error, setError] = useState('')
  const [filename, setFilename] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  if (!open) return null

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null
    setAudioFile(f)
    setTranscript('')
    setError('')
    setSaved(false)
    if (f) {
      // Pre-fill filename from audio file name, strip extension
      const base = f.name.replace(/\.[^.]+$/, '').replace(/\s+/g, '-').toLowerCase()
      setFilename(base)
    }
  }

  const handleTranscribe = async () => {
    if (!audioFile) return
    setTranscribing(true)
    setError('')
    setTranscript('')
    setSaved(false)
    try {
      const form = new FormData()
      form.append('audio', audioFile)
      const res = await fetch('/api/transcribe', { method: 'POST', body: form })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Transcription failed')
      setTranscript(data.transcript ?? '')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setTranscribing(false)
    }
  }

  const handleSave = async () => {
    if (!transcript || !filename.trim()) return
    setSaving(true)
    const safeName = filename.trim().replace(/[^a-z0-9-_]/gi, '-').replace(/-+/g, '-')
    const path = `sources/${safeName}.md`
    const content = `# ${safeName.replace(/-/g, ' ')}\n\n*Transcribed from Telugu audio — translated to English via Whisper*\n\n---\n\n${transcript}`
    const res = await fetch('/api/file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: selectedTopic, path, content }),
    })
    if (res.ok) {
      setSaved(true)
      onFileSaved(path)
    } else {
      setError('Failed to save file')
    }
    setSaving(false)
  }

  const handleClose = () => {
    setAudioFile(null)
    setTranscript('')
    setError('')
    setFilename('')
    setSaved(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={handleClose} />

      {/* Panel */}
      <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-xl w-full max-w-lg shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800">
          <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          <div>
            <h2 className="text-white font-semibold text-sm">Audio Transcriber</h2>
            <p className="text-slate-500 text-xs">Telugu audio → English transcript</p>
          </div>
          <button onClick={handleClose} className="ml-auto text-slate-500 hover:text-slate-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-4">

          {/* File picker */}
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">Audio file</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800 border border-slate-700
                           text-sm text-slate-300 hover:border-slate-500 transition-colors flex-1 text-left truncate"
              >
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span className="truncate">{audioFile ? audioFile.name : 'Choose audio file…'}</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*,.mp3,.mp4,.m4a,.wav,.webm,.ogg,.flac"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={handleTranscribe}
                disabled={!audioFile || transcribing}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors flex-shrink-0
                           bg-violet-600 hover:bg-violet-500 text-white
                           disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {transcribing ? 'Transcribing…' : 'Transcribe'}
              </button>
            </div>
            {audioFile && (
              <p className="text-xs text-slate-600 mt-1">
                {(audioFile.size / 1024 / 1024).toFixed(1)} MB · {audioFile.type || 'audio'}
              </p>
            )}
          </div>

          {/* Progress */}
          {transcribing && (
            <div className="flex items-center gap-2 text-violet-400 text-sm">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending to Whisper…
            </div>
          )}

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

          {/* Transcript */}
          {transcript && (
            <>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Transcript (editable)</label>
                <textarea
                  value={transcript}
                  onChange={e => setTranscript(e.target.value)}
                  rows={8}
                  className="w-full bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-200
                             px-3 py-2 resize-y focus:outline-none focus:border-violet-500 leading-relaxed"
                />
              </div>

              {/* Save section */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">
                  Save as <span className="text-slate-600">sources/</span><span className="text-slate-400">filename</span><span className="text-slate-600">.md</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={filename}
                    onChange={e => setFilename(e.target.value)}
                    placeholder="filename"
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-200
                               px-3 py-2 focus:outline-none focus:border-violet-500 font-mono"
                  />
                  <button
                    onClick={handleSave}
                    disabled={!filename.trim() || saving || saved}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex-shrink-0
                      ${saved
                        ? 'bg-emerald-700 text-emerald-200 cursor-default'
                        : 'bg-slate-700 hover:bg-slate-600 text-white disabled:opacity-40 disabled:cursor-not-allowed'}`}
                  >
                    {saving ? 'Saving…' : saved ? 'Saved' : 'Save'}
                  </button>
                </div>
                {saved && (
                  <p className="text-xs text-emerald-500 mt-1">Saved to sources/{filename}.md</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
