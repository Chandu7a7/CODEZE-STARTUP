import {
  Code2,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import PremiumServices from "./PremiumServices";
import WorkProcess from "./WorkProcess";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-20 sm:py-24 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-7">

          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

          Accepting New Projects
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-2px] leading-[1] text-slate-900">

          Built for the Work
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            That Actually Matters
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-[14px] sm:text-[15px] leading-8 text-slate-500">

          We build scalable SaaS platforms,
          premium UI/UX experiences, secure
          systems and AI-powered products
          for startups and modern businesses.
        </p>

      {/* Tags */}
<div className="flex flex-wrap items-center justify-center gap-3 mt-8">

  {/* Web Apps */}
  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600 text-[13px] font-semibold shadow-sm">

    <Code2 className="w-4 h-4" />

    Web App Development
  </div>

  {/* UI UX */}
  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 text-[13px] font-semibold shadow-sm">

    <ShieldCheck className="w-4 h-4" />

    UI/UX Design
  </div>

  {/* AI */}
  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-[13px] font-semibold shadow-sm">

    <BrainCircuit className="w-4 h-4" />

    AI Development
  </div>
</div>
      </div>

      <PremiumServices/>
         <WorkProcess />
    </section>
  );
};

export default ServicesHero;