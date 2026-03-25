'use client'

import { useEffect, useRef } from 'react'
import type { Topic } from '@/lib/files'

export interface TopicSettings {
  visibleFolders: Record<string, boolean>
}

export type AllSettings = Record<string, TopicSettings>

interface Props {
  open: boolean
  onClose: () => void
  topic: Topic | null
  settings: AllSettings
  onSettingsChange: (s: AllSettings) => void
}

// All possible Tailwind color classes referenced here so the compiler keeps them
const COLOR_DOT: Record<string, string> = {
  blue:    'bg-blue-400',
  emerald: 'bg-emerald-400',
  violet:  'bg-violet-400',
  amber:   'bg-amber-400',
  rose:    'bg-rose-400',
  sky:     'bg-sky-400',
  orange:  'bg-orange-400',
  teal:    'bg-teal-400',
}

export function defaultSettings(topic: Topic): TopicSettings {
  return {
    visibleFolders: Object.fromEntries(topic.folders.map(f => [f.id, true])),
  }
}

export default function SettingsModal({ open, onClose, topic, settings, onSettingsChange }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open || !topic) return null

  const topicSettings: TopicSettings = settings[topic.id] ?? defaultSettings(topic)

  function toggleFolder(folderId: string) {
    const current = topicSettings.visibleFolders[folderId] ?? true
    onSettingsChange({
      ...settings,
      [topic!.id]: {
        ...topicSettings,
        visibleFolders: { ...topicSettings.visibleFolders, [folderId]: !current },
      },
    })
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-slate-800 text-sm">Settings</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-5">

          {/* Visible sections */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Visible sections — {topic.label}
            </p>
            <div className="space-y-2">
              {topic.folders.map(folder => {
                const visible = topicSettings.visibleFolders[folder.id] ?? true
                return (
                  <label key={folder.id} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${COLOR_DOT[folder.color] ?? 'bg-slate-400'}`} />
                      <span className="text-sm text-slate-700">{folder.label}</span>
                    </div>
                    {/* Toggle switch */}
                    <button
                      role="switch"
                      aria-checked={visible}
                      onClick={() => toggleFolder(folder.id)}
                      className={`relative w-9 h-5 rounded-full transition-colors flex-shrink-0
                        ${visible ? 'bg-blue-500' : 'bg-slate-200'}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow
                        transition-transform ${visible ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </label>
                )
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  )
}
