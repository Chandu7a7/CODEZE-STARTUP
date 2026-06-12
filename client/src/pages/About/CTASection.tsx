// src/components/common/CTASection.tsx

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      {/* Blur Effects */}
      <div className="absolute top-0 right-0 w-[340px] h-[340px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card */}
        <div className="relative overflow-hidden  backdrop-blur-2xl px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-center">

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50/80 backdrop-blur-xl shadow-sm text-[10px] font-black tracking-[2px] uppercase text-blue-600 mb-7">

            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

            Ready To Build
          </div>

          {/* Heading */}
<h2 className="relative text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.98] text-slate-900">

  Stop waiting.
  <br />

  Let&apos;s build something

  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
    {" "}great.
  </span>
</h2>

{/* Description */}
<p className="relative mt-6 max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-medium text-slate-500">

  We create premium startup products,
  scalable SaaS platforms, AI-powered
  systems and modern UI/UX experiences
  built for growth and performance.
</p>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mt-11">

            {/* Start Project */}
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_16px_45px_rgba(59,130,246,0.25)] hover:scale-105 transition-all duration-300"
            >
              Start a Project

              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </Link>

            {/* Explore */}
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;