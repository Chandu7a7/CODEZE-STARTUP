import React from 'react'
import { SectionTitle } from '../../components/common/SectionTitle'
export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0 opacity-40" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <SectionTitle subtitle="Our Portfolio" title="Some of Our Best Work" align="center" />
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mt-4">
          A showcase of custom web apps, creative designs, and dashboard systems we have engineered.
        </p>
      </div>

    </div>
  )
}

export default Portfolio
