import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { TopBar } from './components/TopBar'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
import { Footer } from './components/Footer'

export default function App() {
  const [view, setView] = useState('landing') // 'landing' | 'dashboard'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('softorigin-theme')
    if (saved) return saved
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })
  const [cmdOpen, setCmdOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('softorigin-theme', theme)
  }, [theme])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCmdOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const commands = useMemo(
    () => [
      { label: 'Go to Landing', action: () => setView('landing') },
      { label: 'Go to Dashboard', action: () => setView('dashboard') },
      { label: 'Switch to Light Theme', action: () => setTheme('light') },
      { label: 'Switch to Dark Theme', action: () => setTheme('dark') },
      { label: 'Toggle Theme', action: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) },
      { label: 'Smart Business Suite', action: () => setView('dashboard') },
      { label: 'EduConnect', action: () => setView('dashboard') },
      { label: 'SmartBill', action: () => setView('dashboard') },
      { label: 'FieldTrack', action: () => setView('dashboard') },
    ], []
  )

  const [query, setQuery] = useState('')
  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.toLowerCase().includes(q))
  }, [query, commands])

  const executeCommand = useCallback((cmd) => {
    cmd.action()
    setCmdOpen(false)
    setQuery('')
  }, [])

  return (
    <div className="min-h-screen bg-[#FCFCF9] text-[#13343B] transition-colors duration-300 dark:bg-[#1F2121] dark:text-[#F5F5F5]">
      <TopBar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onOpenCommand={() => setCmdOpen(true)}
        currentView={view}
        onNavigate={(v) => setView(v)}
      />

      <main className="pt-16">
        {view === 'landing' ? (
          <Landing onGetStarted={() => setView('dashboard')} />
        ) : (
          <Dashboard />
        )}
      </main>

      <Footer />

      {cmdOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 backdrop-blur-sm" onClick={() => setCmdOpen(false)}>
          <div className="mt-24 w-full max-w-xl overflow-hidden rounded-lg border border-[rgba(94,82,64,0.2)] bg-white shadow-lg transition-all dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 border-b border-[rgba(94,82,64,0.2)] px-3 py-2 dark:border-[rgba(119,124,124,0.3)]">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-[#626C71]"
              />
              <kbd className="rounded bg-black/10 px-2 py-1 text-[10px] font-medium dark:bg-white/10">ESC</kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto p-2">
              {filteredCommands.map((cmd, i) => (
                <li key={i}>
                  <button
                    onClick={() => executeCommand(cmd)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-[#21808D]/10 focus:bg-[#21808D]/10 focus:outline-none dark:hover:bg-[#32B8C6]/10 dark:focus:bg-[#32B8C6]/10"
                  >
                    <span>{cmd.label}</span>
                  </button>
                </li>
              ))}
              {filteredCommands.length === 0 && (
                <div className="p-4 text-center text-sm text-[#626C71]">No results</div>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
