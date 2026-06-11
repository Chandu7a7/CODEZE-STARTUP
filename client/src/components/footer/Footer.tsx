import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-muted)] bg-[var(--bg-secondary)]">
      <p>&copy; {new Date().getFullYear()} CODEZA. All rights reserved.</p>
    </footer>
  )
}

export default Footer