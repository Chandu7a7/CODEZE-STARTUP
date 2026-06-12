import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

import logo from "../../assets/codeza-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services ", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  // { name: "Blog", path: "/blog" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar */}
        <div className="flex items-center justify-between h-[88px]">
          
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="relative flex items-center justify-center">
              
              {/* Premium Glow */}
              <div className="absolute w-20 h-20 bg-blue-500/20 blur-3xl rounded-full group-hover:scale-110 transition-all duration-500" />

              {/* Logo */}
              <img
                src={logo}
                alt="Codeza Logo"
                className="relative w-28 h-28 object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative">Get In Touch</span>

              <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700"
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-2xl shadow-2xl">
          
          <div className="px-6 py-8 flex flex-col items-center justify-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="relative text-slate-700 hover:text-blue-600 font-semibold text-[18px] tracking-wide transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-center px-8 py-3 rounded-2xl font-semibold shadow-xl shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;