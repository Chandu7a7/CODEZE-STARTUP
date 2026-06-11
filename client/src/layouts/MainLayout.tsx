import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-[88px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout