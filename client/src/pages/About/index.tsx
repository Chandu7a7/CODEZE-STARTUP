import React from 'react'
import { SectionTitle } from '../../components/common/SectionTitle'
import { Users, Eye, Target } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0 opacity-40" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <SectionTitle subtitle="About Us" title="We Build the Future of the Web" align="center" />
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mt-4">
          CODEZA is a digital agency focused on building high-performance web applications and beautiful design systems. Our team is dedicated to combining technical excellence with outstanding aesthetics.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 rounded-2xl glass-card text-left">
          <div className="p-3 bg-purple-100 rounded-xl mb-4 text-purple-600 w-fit">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">Our Team</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            A diverse group of designers and developers pushing the boundaries of web development.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card text-left">
          <div className="p-3 bg-purple-100 rounded-xl mb-4 text-purple-600 w-fit">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">Our Vision</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            To create digital experiences that are not only fast and functional, but also visually stunning.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card text-left">
          <div className="p-3 bg-purple-100 rounded-xl mb-4 text-purple-600 w-fit">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            To empower brands by building reliable software systems and beautiful digital user interfaces.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
