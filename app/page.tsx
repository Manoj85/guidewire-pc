'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import FileViewer from '@/components/FileViewer'

export type FileEntry = { name: string; path: string; folder: string }
export type FileTree = Record<string, FileEntry[]>
export type SearchResult = { file: FileEntry; snippet: string; matches: number }

function AppContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [fileTree, setFileTree]         = useState<FileTree>({})
  const [canEdit, setCanEdit]           = useState(false)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [content, setContent]           = useState('')
  const [loading, setLoading]           = useState(false)
  const [searchQuery, setSearchQuery]   = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isEditing, setIsEditing]       = useState(false)
  const [editContent, setEditContent]   = useState('')
  const [saving, setSaving]             = useState(false)

  // Load file tree + canEdit flag from the server
  useEffect(() => {
    fetch('/api/files')
      .then(r => r.json())
      .then(data => {
        setFileTree(data.tree ?? {})
        setCanEdit(data.canEdit ?? false)
      })
  }, [])

  const loadFile = useCallback(async (filePath: string) => {
    setLoading(true)
    setIsEditing(false)
    setSelectedFile(filePath)
    router.push(`?file=${encodeURIComponent(filePath)}`, { scroll: false })
    try {
      const r = await fetch(`/api/file?path=${encodeURIComponent(filePath)}`)
      const data = await r.json()
      setContent(data.content ?? '')
    } catch {
      setContent('# Error\n\nCould not load file.')
    }
    setLoading(false)
  }, [router])

  // Restore selected file from URL on first load
  useEffect(() => {
    const fileParam = searchParams.get('file')
    if (fileParam && fileParam !== selectedFile) {
      loadFile(fileParam)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }
    const timer = setTimeout(async () => {
      const r = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await r.json()
      setSearchResults(Array.isArray(data) ? data : [])
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  const handleEdit = () => {
    setEditContent(content)
    setIsEditing(true)
  }

  const handleSave = async () => {
    if (!selectedFile) return
    setSaving(true)
    const r = await fetch('/api/file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: selectedFile, content: editContent }),
    })
    if (r.ok) {
      setContent(editContent)
      setIsEditing(false)
    }
    setSaving(false)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        fileTree={fileTree}
        selectedFile={selectedFile}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFileSelect={path => { setSearchQuery(''); loadFile(path) }}
        searchResults={searchResults}
      />
      <FileViewer
        filePath={selectedFile}
        content={content}
        loading={loading}
        isEditing={isEditing}
        editContent={editContent}
        onEditContentChange={setEditContent}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
        saving={saving}
        canEdit={canEdit}
      />
    </div>
  )
}

export default function Home() {
  return (
    <Suspense>
      <AppContent />
    </Suspense>
  )
}
