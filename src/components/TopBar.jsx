import React from 'react'
import { Home, Rocket, Search, Bell, Moon, Sun, LogIn } from 'lucide-react'

export function TopBar({ theme, onToggleTheme, onOpenCommand, currentView, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgba(94,82,64,0.2)] bg-white/80 backdrop-blur-md transition-colors dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#21808D] to-[#1D7480] shadow-sm" />
            <span className="text-sm font-semibold tracking-tight">SoftOrigin</span>
          </div>
          <nav className="hidden items-center gap-1 sm:flex">
            <button
              onClick={() => onNavigate('landing')}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs hover:bg-black/5 dark:hover:bg-white/10 ${
                currentView === 'landing' ? 'bg-black/5 dark:bg-white/10' : ''
              }`}
            >
              <Home className="h-4 w-4" />
              Landing
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs hover:bg-black/5 dark:hover:bg-white/10 ${
                currentView === 'dashboard' ? 'bg-black/5 dark:bg-white/10' : ''
              }`}
            >
              <Rocket className="h-4 w-4" />
              Dashboard
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-md border border-[rgba(94,82,64,0.2)] px-3 py-1.5 text-xs text-[#626C71] transition hover:border-[#21808D]/30 hover:text-[#13343B] dark:border-[rgba(119,124,124,0.3)] dark:hover:border-[#32B8C6]/30 dark:hover:text-white sm:flex"
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search</span>
            <span className="rounded bg-black/10 px-2 py-0.5 text-[10px] font-medium dark:bg-white/10">⌘K</span>
          </button>

          <button className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>

          <button onClick={onToggleTheme} className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button className="inline-flex items-center gap-1 rounded-md bg-[#21808D] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#1D7480] dark:bg-[#32B8C6] dark:hover:bg-[#2DA6B2]">
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
