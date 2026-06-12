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

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Container */}
    <div className="relative rounded-[36px] px-4 sm:px-8 lg:px-10 py-10">

      {/* Heading */}
      <div className="relative text-center max-w-3xl mx-auto mb-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-2xl border border-blue-100 text-blue-600 text-[10px] font-semibold tracking-[2px] uppercase shadow-sm mb-5">

          <Sparkles className="w-3.5 h-3.5" />

          How We Work
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-1.8px] leading-[1.02] text-slate-800">

          Our proven

          <span className="ml-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent italic">
            process
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-slate-500 max-w-xl mx-auto font-medium">
          A structured workflow designed for speed,
          scalability and premium digital experiences.
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {processSteps.map((step, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[24px] bg-white border border-slate-100 px-5 py-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(59,130,246,0.08)] transition-all duration-500"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Number */}
            <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[16px] font-bold text-slate-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500">

              {step.number}
            </div>

            {/* Content */}
            <div className="relative mt-5">

              {/* Title */}
              <h3 className="text-[19px] font-semibold tracking-[-0.5px] text-slate-700 leading-tight">

                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-6 text-slate-500 font-medium max-w-[220px] mx-auto">

                {step.desc}
              </p>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default ProcessSection;