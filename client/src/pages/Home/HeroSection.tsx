import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";

import heroImage from "../../assets/hero-img.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff]">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.10),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-full h-[550px] bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-200/20 blur-3xl rounded-full" />

      {/* Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-blue-600 text-[11px] sm:text-xs font-semibold mb-6">

              <Sparkles className="w-4 h-4" />

              Modern Software & AI Solutions
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-[-2px] text-slate-900">

              We Build

              <span className="block mt-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Modern Digital
              </span>

              <span className="block mt-3">
                Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-[15px] sm:text-base leading-7 text-slate-600 max-w-xl mx-auto lg:mx-0">
              CODEZA helps startups and businesses create premium
              websites, scalable software systems, AI-powered
              products, and modern UI/UX experiences with
              high-performance technology.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center lg:justify-start">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-sm font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.30)] hover:scale-105 transition-all duration-300"
              >
                Get In Touch

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

              {/* UI UX */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">

                <ShieldCheck className="w-5 h-5 text-cyan-600" />

                <span className="text-sm font-semibold text-slate-700">
                  Premium UI/UX
                </span>
              </div>

              {/* AI */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">

                <Star className="w-5 h-5 text-blue-600" />

                <span className="text-sm font-semibold text-slate-700">
                  AI Powered Systems
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center mt-10 lg:mt-0">

            {/* Main Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-400/20 blur-3xl rounded-full animate-pulse" />

            {/* Floating Card Top */}
            <div className="absolute top-0 sm:top-5 right-0 z-20 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl sm:rounded-3xl px-5 sm:px-6 py-4 sm:py-5 shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                11+
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Projects Shipped
              </p>
            </div>

            {/* Floating Card Bottom */}
            <div className="absolute bottom-4 sm:bottom-10 left-0 z-20 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl sm:rounded-3xl px-5 sm:px-6 py-4 sm:py-5 shadow-2xl hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                98%
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Satisfaction
              </p>
            </div>

            {/* Image Card */}
            <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-[30px] sm:rounded-[40px] p-3 sm:p-4 shadow-[0_20px_80px_rgba(59,130,246,0.18)] hover:scale-[1.01] transition-all duration-500">

              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />

              {/* Hero Image */}
              <img
                src={heroImage}
                alt="CODEZA Hero UI"
                className="relative z-10 w-full rounded-[22px] sm:rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;