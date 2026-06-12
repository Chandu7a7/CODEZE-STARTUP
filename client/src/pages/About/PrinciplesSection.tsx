// src/components/about/PrinciplesSection.tsx

import {
  ShieldCheck,
  Zap,
  Cpu,
  Database,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Security by Design",
    desc: "Secure architecture and scalable systems built from the first line of code.",
    bg: "bg-violet-50",
    color: "text-violet-500",
  },

  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Rapid development workflows with modern engineering and clean delivery.",
    bg: "bg-cyan-50",
    color: "text-cyan-500",
  },

  {
    icon: Cpu,
    title: "AI-First Thinking",
    desc: "Modern AI integrations and automation focused on real-world business impact.",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
  },

  {
    icon: Database,
    title: "Scalable Systems",
    desc: "Optimized backend architecture and infrastructure designed for long-term growth.",
    bg: "bg-amber-50",
    color: "text-amber-500",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.04),transparent_30%)]" />

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       {/* Heading */}
<div className="text-center max-w-4xl mx-auto">

  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-2xl shadow-sm text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-6">

    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

    What Drives Us
  </div>

  {/* Title */}
  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2.5px] leading-[0.98] text-slate-900">

    Four Principles
    <br />

    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
      We Never Compromise
    </span>
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-medium text-slate-500">

    We create scalable digital products with
    premium engineering, modern UI/UX and
    AI-powered innovation crafted for startups
    and next-generation businesses.
  </p>
</div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mt-12">

          {principles.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[24px] border border-white/70 bg-white/90 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_8px_25px_rgba(59,130,246,0.04)] hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(59,130,246,0.07)] transition-all duration-500"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl ${item.bg} border border-white/60 flex items-center justify-center shadow-sm mb-5`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>

              {/* Title */}
              <h3 className="relative text-[19px] sm:text-[20px] font-semibold tracking-[-0.5px] leading-[1.3] text-slate-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-[13px] sm:text-[14px] leading-7 font-normal text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;