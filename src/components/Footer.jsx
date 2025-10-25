import React from 'react'

export function Footer() {
  return (
    <footer className="mt-10 border-t border-[rgba(94,82,64,0.2)] bg-white/60 py-6 text-sm text-[#626C71] backdrop-blur dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]/60 dark:text-[rgba(167,169,169,0.7)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <div>© {new Date().getFullYear()} SoftOrigin Technologies</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#13343B] dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-[#13343B] dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-[#13343B] dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
