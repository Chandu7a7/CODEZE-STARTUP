import { Link } from "react-router-dom";

import ProjectsSection from "./ProjectsSection";

const stats = [
  {
    number: "12+",
    label: "Projects Delivered",
  },

  {
    number: "08",
    label: "Startup Clients",
  },

  {
    number: "98%",
    label: "Client Satisfaction",
  },

  {
    number: "04",
    label: "Tech Domains",
  },
];

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "React Native",
  "Android Studio",
  "UI/UX",
  "AI Systems",
  "SaaS",
];

const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe25_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe25_1px,transparent_1px)] bg-[size:75px_75px]" />

      {/* BLUR */}
      <div className="absolute top-0 right-0 w-[240px] sm:w-[320px] lg:w-[420px] h-[240px] sm:h-[320px] lg:h-[420px] bg-cyan-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[260px] lg:w-[320px] h-[220px] sm:h-[260px] lg:h-[320px] bg-blue-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="max-w-5xl mx-auto text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-xl text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase text-blue-600 shadow-sm mb-6 sm:mb-7 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />

            Portfolio • Selected Work •
            Case Studies
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[79px] font-black tracking-[-2px] sm:tracking-[-5px] leading-[1.05] text-slate-900 animate-fade-up">
            <span className="block">
              Built with precision,
            </span>

            <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              designed for growth.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 sm:mt-7 max-w-3xl mx-auto text-[14px] sm:text-[17px] leading-7 sm:leading-9 text-slate-500 animate-fade-up delay-100">
            Explore premium web
            applications, scalable SaaS
            platforms, AI-powered
            systems and modern digital
            experiences crafted for
            startups and businesses.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            {/* PRIMARY */}
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_16px_45px_rgba(59,130,246,0.22)] hover:scale-[1.03] transition-all duration-300"
            >
              Start a Project

              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                ↗
              </span>
            </Link>

            {/* SECONDARY */}
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* TECH TAGS */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {techs.map(
              (item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-[11px] sm:text-[12px] font-semibold text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* STATS */}
        <div className="max-w-5xl mx-auto mt-14 sm:mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-2xl shadow-[0_18px_60px_rgba(59,130,246,0.08)]">
            {stats.map(
              (item, index) => (
                <div
                  key={index}
                  className={`px-4 sm:px-6 py-7 sm:py-8 text-center border-slate-100 ${
                    index !==
                    stats.length - 1
                      ? "border-r"
                      : ""
                  } ${
                    index < 2
                      ? "border-b lg:border-b-0"
                      : ""
                  }`}
                >
                  {/* NUMBER */}
                  <h3 className="text-2xl sm:text-3xl font-black tracking-[-2px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  {/* LABEL */}
                  <p className="mt-3 text-[10px] sm:text-[11px] uppercase tracking-[2px] font-bold text-slate-400">
                    {item.label}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <ProjectsSection />

      {/* PREMIUM CTA */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/70 bg-white/85 backdrop-blur-2xl px-5 sm:px-10 lg:px-14 py-10 sm:py-14 shadow-[0_18px_60px_rgba(59,130,246,0.08)]">
          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          {/* BLUR */}
          <div className="absolute top-0 right-0 w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-200/20 blur-3xl rounded-full" />

          <div className="relative flex flex-col items-center text-center">
            {/* TITLE */}
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2px] sm:tracking-[-3px] leading-[1.05] text-slate-900 animate-fade-up">
              Got a Project in Mind?
              <br />
              Let's Build It Together.
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 sm:mt-6 max-w-3xl text-[13px] sm:text-[15px] leading-7 sm:leading-8 text-slate-500 font-medium animate-fade-up delay-100">
              Tell us your idea and
              we'll put together a free
              technical proposal within
              48 hours. No fluff, no
              lock-in — just a clear
              plan and honest pricing.
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {[
                "React",
                "Next.js",
                "Node.js",
                "AI Systems",
                "UI/UX",
                "MongoDB",
              ].map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={index}
                    className="px-4 py-2.5 rounded-2xl border border-slate-200 bg-white/90 text-[12px] font-semibold text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 mt-10">
              {/* PRIMARY */}
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_16px_45px_rgba(59,130,246,0.22)] hover:scale-[1.03] transition-all duration-300"
              >
                Start a Project

                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </Link>

              {/* SECONDARY */}
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;