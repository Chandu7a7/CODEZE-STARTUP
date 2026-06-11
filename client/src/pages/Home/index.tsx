import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../../assets/hero_ui_mockup.png";

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#f8fbff]">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-xs font-semibold mb-7">
              <Sparkles className="w-4 h-4" />
              Modern Software & AI Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900">
              We Build
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Modern Digital
              </span>
              Experiences
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600 max-w-xl">
              CODEZA helps startups and businesses create premium
              websites, scalable software, modern UI/UX systems,
              and AI-powered digital products.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              
              <button className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                Get Started

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="px-7 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Explore Work
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              
              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  50+
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  20+
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  24/7
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Support System
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full" />

            {/* Image Card */}
            <div className="relative bg-white border border-slate-100 rounded-[32px] p-3 shadow-2xl">
              
              <img
                src={heroImage}
                alt="Hero UI"
                className="w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;