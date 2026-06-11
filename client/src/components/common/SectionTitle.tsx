import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center'
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-10 ${alignClass}`}>
      {subtitle && (
        <span className="text-xs text-purple-600 font-bold tracking-wider uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-[var(--text-primary)] mt-2 tracking-tight">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
