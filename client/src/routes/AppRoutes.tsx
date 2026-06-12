import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

// Public Pages
import Home from '../pages/Home/home'
import About from '../pages/About/aboutUs'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact/contact'
import ServicesHero from '../pages/Services/ServicesHero'
import PortfolioHero from '../pages/Portfolio/Portfolio'


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages wrapped in MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesHero/>} />
        <Route path="/portfolio" element={<PortfolioHero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
      </Route>


      {/* Fallback Catch-All Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
