import { Sparkles } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Deep-dive into goals, constraints and success metrics.",
  },

  {
    number: "02",
    title: "Architecture",
    desc: "System design, technology selection and sprint planning.",
  },

  {
    number: "03",
    title: "Development",
    desc: "Agile sprints, demos and continuous delivery workflow.",
  },

  {
    number: "04",
    title: "Launch & Scale",
    desc: "Go-live, monitoring and optimization for long-term growth.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-full h-[380px] " />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container */}
        <div className="relative rounded-[40px] border backdrop-blur-2xl px-6 sm:px-10 lg:px-16 py-14 shadow-[0_15px_60px_rgba(59,130,246,0.08)] overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          {/* Heading */}
          <div className="relative text-center max-w-4xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[2px] uppercase shadow-sm mb-6">

              <Sparkles className="w-3.5 h-3.5" />

              How We Work
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2px] leading-[1] text-slate-900">

              Our proven

              <span className="ml-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent italic">
                process
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] sm:text-base leading-8 text-slate-500 max-w-2xl mx-auto">
              A structured product development workflow designed
              for speed, quality and scalable digital experiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">

            {/* Top Line */}
            <div className="hidden lg:block absolute top-9 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full opacity-30" />

            {/* Steps */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative rounded-[30px] bg-white/75 backdrop-blur-2xl border border-white/60 px-6 py-8 text-center shadow-[0_10px_35px_rgba(59,130,246,0.05)] hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(59,130,246,0.12)] hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-500 cursor-pointer overflow-hidden"
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Step Number Circle */}
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-white border border-slate-100 shadow-[0_10px_30px_rgba(59,130,246,0.08)] flex items-center justify-center text-lg font-black text-slate-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:scale-105 transition-all duration-500">

                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">

                    {/* Title */}
                    <h3 className="text-[24px] font-bold tracking-[-0.8px] text-slate-800 leading-tight group-hover:text-slate-900 transition-all duration-300">

                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[14px] leading-7 text-slate-500 max-w-[250px] mx-auto group-hover:text-slate-600 transition-all duration-300">

                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;