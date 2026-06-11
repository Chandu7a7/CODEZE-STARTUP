import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'premium' | 'glass' | 'outline' | 'ghost'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button className={`px-4 py-2 bg-purple-600 rounded text-xs font-bold text-white ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
