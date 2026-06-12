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
    <section className="relative overflow-hidden bg-[#f8fbff] pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe25_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe25_1px,transparent_1px)] bg-[size:75px_75px]" />

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Content */}
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-xl text-[10px] font-bold tracking-[2px] uppercase text-blue-600 shadow-sm mb-7">

            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

            Portfolio • Selected Work • Case Studies
          </div>
9
         {/* Heading */}
<h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-[79px] font-black tracking-[-5px] leading-[1.05] text-slate-900">

  <span className="block">
    Built with precision,
  </span>

  <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
    designed for growth.
  </span>
</h1>
          {/* Description */}
          <p className="mt-7 max-w-3xl mx-auto text-[15px] sm:text-[17px] leading-8 sm:leading-9 text-slate-500">

            Explore premium web applications,
            scalable SaaS platforms, AI-powered
            systems and modern digital experiences
            crafted for startups and businesses.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">

            {/* Primary */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_16px_45px_rgba(59,130,246,0.22)] hover:scale-105 transition-all duration-300"
            >

              Start a Project

              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                ↗
              </span>
            </Link>

            {/* Secondary */}
            <Link
              to="/services"
              className="px-8 py-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
            >

              Explore Services
            </Link>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">

            {techs.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-[12px] font-semibold text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-16">

          <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-2xl shadow-[0_18px_60px_rgba(59,130,246,0.08)]">

            {stats.map((item, index) => (
              <div
                key={index}
                className={`px-6 py-8 text-center border-slate-100 ${
                  index !== stats.length - 1
                    ? "border-r"
                    : ""
                } ${
                  index < 2
                    ? "border-b lg:border-b-0"
                    : ""
                }`}
              >

                {/* Number */}
                <h3 className="text-3xl sm:text-3xl font-black tracking-[-2px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-3 text-[11px] uppercase tracking-[2px] font-bold text-slate-400">

                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectsSection />
       {/* Premium CTA */}
<div className="relative mt-16 overflow-hidden rounded-[36px] border border-white/70 bg-white/85 backdrop-blur-2xl px-6 sm:px-10 lg:px-14 py-12 sm:py-14 shadow-[0_18px_60px_rgba(59,130,246,0.08)]">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

  {/* Blur */}
  <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-cyan-200/20 blur-3xl rounded-full" />

  <div className="relative flex flex-col items-center text-center">

    {/* Heading */}
    <h3 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-[-2.5px] leading-[0.98] text-slate-900">

      Got a Project in Mind? <br />
Let's Build It Together.
    </h3>

    {/* Description */}
    <p className="mt-6 max-w-3xl text-[11px] sm:text-[15px] leading-8 text-slate-500 font-medium">
Tell us your idea and we'll put together a free technical proposal within 48 hours. No fluff, no lock-in — just a clear plan and honest pricing.
    </p>

    {/* Tech Tags */}
    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">

      {[
        "React",
        "Next.js",
        "Node.js",
        "AI Systems",
        "UI/UX",
        "MongoDB",
      ].map((item, index) => (
        <div
          key={index}
          className="px-4 py-2.5 rounded-2xl border border-slate-200 bg-white/90 text-[12px] font-semibold text-slate-600 shadow-sm hover:border-blue-200 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300"
        >
          {item}
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">

      {/* Primary */}
      <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_16px_45px_rgba(59,130,246,0.22)] hover:scale-105 transition-all duration-300">

    <a href="/contact">Start a Project</a>   

        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          ↗
        </span>
      </button>

      {/* Secondary */}
      <button className="px-8 py-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300">

        <a href="/services">View Our Services</a>   
      </button>
    </div>
  </div>
</div>
    </section>
  );
};

export default PortfolioHero;