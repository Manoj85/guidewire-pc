'use client'

import { useEffect } from 'react'

interface Props {
  term: string | null
  definition: string | null
  onClose: () => void
}

export default function GlossaryModal({ term, definition, onClose }: Props) {
  useEffect(() => {
    if (!term) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [term, onClose])

  if (!term || !definition) return null

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full
                             bg-blue-100 text-blue-600 text-xs font-bold flex-shrink-0">
              i
            </span>
            <h3 className="font-bold text-slate-900 text-lg leading-tight">{term}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors ml-3 flex-shrink-0"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Definition */}
        <p className="text-slate-600 leading-relaxed text-sm">{definition}</p>

        {/* Footer hint */}
        <p className="mt-4 text-xs text-slate-400">
          Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 font-mono">Esc</kbd> or click outside to close
        </p>
      </div>
    </div>
  )
}
