import {
  Code2,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

import PremiumServices from "./PremiumServices";

import WorkProcess from "./WorkProcess";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      {/* BLUR EFFECTS */}
      <div className="absolute top-0 right-0 w-[240px] sm:w-[320px] lg:w-[380px] h-[240px] sm:h-[320px] lg:h-[380px] bg-cyan-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[260px] lg:w-[300px] h-[220px] sm:h-[260px] lg:h-[300px] bg-blue-200/20 blur-3xl rounded-full animate-pulse" />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-6 sm:mb-7 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />

          Accepting New Projects
        </div>

        {/* HEADING */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-2px] sm:tracking-[-3px] leading-[1.05] text-slate-900 animate-fade-up">
          Built for the Work
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            That Actually Matters
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-[13px] sm:text-[15px] leading-7 sm:leading-8 text-slate-500 animate-fade-up delay-100">
          We build scalable SaaS
          platforms, premium UI/UX
          experiences, secure systems
          and AI-powered products for
          startups and modern
          businesses.
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          {/* WEB APP */}
          <div className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600 text-[12px] sm:text-[13px] font-semibold shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-up">
            <Code2 className="w-4 h-4 group-hover:scale-110 transition-all duration-300" />

            Web App Development
          </div>

          {/* UI UX */}
          <div className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 text-[12px] sm:text-[13px] font-semibold shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-up delay-100">
            <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-all duration-300" />

            UI/UX Design
          </div>

          {/* AI */}
          <div className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-[12px] sm:text-[13px] font-semibold shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-up delay-200">
            <BrainCircuit className="w-4 h-4 group-hover:scale-110 transition-all duration-300" />

            AI Development
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <PremiumServices />

      <WorkProcess />
    </section>
  );
};

export default ServicesHero;