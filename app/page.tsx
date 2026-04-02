'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import FileViewer from '@/components/FileViewer'
import SettingsModal, { defaultSettings, type AllSettings } from '@/components/SettingsModal'
import AudioTranscriber from '@/components/AudioTranscriber'
import NewFileModal from '@/components/NewFileModal'
import type { FileEntry, FileTree, SearchResult, Topic } from '@/lib/files'

export type { FileEntry, FileTree, SearchResult }

const SETTINGS_KEY = 'prep-hub-settings'
const TOPIC_KEY    = 'prep-hub-topic'

function AppContent() {
  const router       = useRouter()
  const searchParams = useSearchParams()

  const [topics, setTopics]               = useState<Topic[]>([])
  const [selectedTopic, setSelectedTopic] = useState<string>('guidewire-pc')
  const [fileTree, setFileTree]           = useState<FileTree>({})
  const [canEdit, setCanEdit]             = useState(false)
  const [selectedFile, setSelectedFile]   = useState<string | null>(null)
  const [content, setContent]             = useState('')
  const [loading, setLoading]             = useState(false)
  const [searchQuery, setSearchQuery]       = useState('')
  const [searchResults, setSearchResults]   = useState<SearchResult[]>([])
  const [highlightQuery, setHighlightQuery] = useState('')
  const [matchCase, setMatchCase]           = useState(false)
  const [isEditing, setIsEditing]         = useState(false)
  const [editContent, setEditContent]     = useState('')
  const [saving, setSaving]               = useState(false)
  const [settingsOpen, setSettingsOpen]     = useState(false)
  const [transcribeOpen, setTranscribeOpen] = useState(false)
  const [newFileOpen, setNewFileOpen]       = useState(false)
  const [newFileFolder, setNewFileFolder]   = useState('sources')
  const [editFile, setEditFile]             = useState<{ path: string; content: string } | undefined>()
  const [allSettings, setAllSettings]     = useState<AllSettings>({})
  const [sidebarOpen, setSidebarOpen]     = useState(false)

  // Load topics
  useEffect(() => {
    fetch('/api/topics')
      .then(r => r.json())
      .then((data: Topic[]) => {
        setTopics(data)
        const saved = localStorage.getItem(TOPIC_KEY)
        if (saved && data.find(t => t.id === saved)) {
          setSelectedTopic(saved)
        } else if (data.length > 0) {
          setSelectedTopic(data[0].id)
        }
      })
  }, [])

  // Load settings from localStorage
  useEffect(() => {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) {
      try { setAllSettings(JSON.parse(raw)) } catch { /* ignore */ }
    }
  }, [])

  // Persist settings
  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(allSettings))
  }, [allSettings])

  // Load file tree when topic changes
  useEffect(() => {
    if (!selectedTopic) return
    localStorage.setItem(TOPIC_KEY, selectedTopic)
    setSelectedFile(null)
    setContent('')
    setSearchQuery('')
    fetch(`/api/files?topic=${selectedTopic}`)
      .then(r => r.json())
      .then(data => {
        setFileTree(data.tree ?? {})
        setCanEdit(data.canEdit ?? false)
      })
  }, [selectedTopic])

  const refreshTree = useCallback(() =>
    fetch(`/api/files?topic=${selectedTopic}`)
      .then(r => r.json())
      .then(data => { setFileTree(data.tree ?? {}); setCanEdit(data.canEdit ?? false) }),
  [selectedTopic])

  const loadFile = useCallback(async (filePath: string) => {
    setLoading(true)
    setIsEditing(false)
    setSelectedFile(filePath)
    router.push(`?file=${encodeURIComponent(filePath)}`, { scroll: false })
    try {
      const r = await fetch(`/api/file?topic=${selectedTopic}&path=${encodeURIComponent(filePath)}`)
      const data = await r.json()
      setContent(data.content ?? '')
    } catch {
      setContent('# Error\n\nCould not load file.')
    }
    setLoading(false)
  }, [router, selectedTopic])

  const loadChangelog = useCallback(async () => {
    setLoading(true)
    setIsEditing(false)
    setSelectedFile('__changelog__')
    router.push('?file=__changelog__', { scroll: false })
    try {
      const r = await fetch('/api/changelog')
      const data = await r.json()
      setContent(data.content ?? '')
    } catch {
      setContent('# Error\n\nCould not load changelog.')
    }
    setLoading(false)
  }, [router])

  // Restore selected file from URL on first load
  useEffect(() => {
    const fileParam = searchParams.get('file')
    if (!fileParam || fileParam === selectedFile) return
    if (fileParam === '__changelog__') {
      loadChangelog()
    } else {
      loadFile(fileParam)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); setHighlightQuery(''); return }
    const timer = setTimeout(async () => {
      const r = await fetch(`/api/search?topic=${selectedTopic}&q=${encodeURIComponent(searchQuery)}&matchCase=${matchCase}`)
      const data = await r.json()
      setSearchResults(Array.isArray(data) ? data : [])
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery, matchCase, selectedTopic])

  const handleEdit = () => { setEditContent(content); setIsEditing(true) }

  const handleSave = async () => {
    if (!selectedFile) return
    setSaving(true)
    const r = await fetch('/api/file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: selectedTopic, path: selectedFile, content: editContent }),
    })
    if (r.ok) { setContent(editContent); setIsEditing(false) }
    setSaving(false)
  }

  const openEditModal = (filePath: string, fileContent: string) => {
    setEditFile({ path: filePath, content: fileContent })
    setNewFileOpen(true)
  }

  const currentTopic   = topics.find(t => t.id === selectedTopic) ?? null
  const topicSettings  = currentTopic
    ? (allSettings[selectedTopic] ?? defaultSettings(currentTopic))
    : null

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        topics={topics}
        selectedTopic={selectedTopic}
        onTopicChange={setSelectedTopic}
        topicSettings={topicSettings}
        fileTree={fileTree}
        selectedFile={selectedFile}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        matchCase={matchCase}
        onMatchCaseChange={setMatchCase}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onFileSelect={path => {
          setHighlightQuery(searchQuery.trim())
          setSidebarOpen(false)
          loadFile(path)
        }}
        searchResults={searchResults}
        onChangelogOpen={loadChangelog}
        onTranscribeOpen={() => setTranscribeOpen(true)}
        onNewFile={folder => { setNewFileFolder(folder); setEditFile(undefined); setNewFileOpen(true) }}
        onEditFile={async path => {
          // Load latest content then open edit modal
          const r = await fetch(`/api/file?topic=${selectedTopic}&path=${encodeURIComponent(path)}`)
          const data = await r.json()
          openEditModal(path, data.content ?? '')
        }}
        onDeleteFile={async path => {
          await fetch('/api/file/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: selectedTopic, path }),
          })
          await refreshTree()
          if (selectedFile === path) { setSelectedFile(null); setContent('') }
        }}
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
        onSettingsOpen={() => setSettingsOpen(true)}
        onFileNavigate={path => { setHighlightQuery(''); loadFile(path) }}
        onMenuOpen={() => setSidebarOpen(true)}
        searchQuery={highlightQuery}
        matchCase={matchCase}
      />
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        topic={currentTopic}
        settings={allSettings}
        onSettingsChange={s => setAllSettings(s)}
      />
      <AudioTranscriber
        open={transcribeOpen}
        onClose={() => setTranscribeOpen(false)}
        selectedTopic={selectedTopic}
        onFileSaved={path => { setTranscribeOpen(false); refreshTree(); loadFile(path) }}
      />
      <NewFileModal
        open={newFileOpen}
        onClose={() => { setNewFileOpen(false); setEditFile(undefined) }}
        topic={currentTopic}
        selectedTopic={selectedTopic}
        defaultFolder={newFileFolder}
        editFile={editFile}
        onFileSaved={async path => {
          await refreshTree()
          loadFile(path)
        }}
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
