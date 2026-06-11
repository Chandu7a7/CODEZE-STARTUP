import React from 'react'
import { SectionTitle } from '../../components/common/SectionTitle'
import { Check } from 'lucide-react'

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0 opacity-40" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <SectionTitle subtitle="Pricing Plans" title="Simple, Transparent Pricing" align="center" />
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mt-4">
          Choose the best tier for your team or organization. No hidden fees.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {/* Tier 1 */}
        <div className="p-8 rounded-3xl glass-card text-left flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Starter</h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">Perfect for solo founders and small tools.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-[var(--text-primary)]">$49</span>
              <span className="text-sm text-[var(--text-muted)]">/month</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>1 Active Project</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Standard Support</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Light Theme Pack</span>
              </li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 border border-[var(--border-color)] text-[var(--text-secondary)] rounded-xl font-bold hover:bg-[var(--bg-tertiary)] transition-all">
            Get Started
          </button>
        </div>

        {/* Tier 2 (Highlighted) */}
        <div className="p-8 rounded-3xl glass-card text-left flex flex-col justify-between relative glow-border border-purple-500/20 shadow-xl scale-105">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-purple-600 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
            Most Popular
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Professional</h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">For growing teams requiring custom work.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-[var(--text-primary)]">$199</span>
              <span className="text-sm text-[var(--text-muted)]">/month</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>5 Active Projects</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Priority Email Support</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Custom Animation Settings</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>SEO Performance Audit</span>
              </li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 premium-button rounded-xl font-bold">
            Get Started
          </button>
        </div>

        {/* Tier 3 */}
        <div className="p-8 rounded-3xl glass-card text-left flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Enterprise</h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">For large enterprises needing full coverage.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-[var(--text-primary)]">Custom</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Unlimited Projects</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>24/7 Dedicated Slack channel</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                <Check className="h-4 w-4 text-purple-600" />
                <span>Custom Integration Systems</span>
              </li>
            </ul>
          </div>
          <button className="mt-8 w-full py-3 border border-[var(--border-color)] text-[var(--text-secondary)] rounded-xl font-bold hover:bg-[var(--bg-tertiary)] transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
