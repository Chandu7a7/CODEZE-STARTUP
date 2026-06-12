import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",

    desc:
      "We understand your goals, product vision and business requirements with a focused strategy session.",
  },

  {
    number: "02",
    title:
      "Planning & Strategy",

    desc:
      "We create project structure, timelines, UI direction and technical planning for smooth execution.",
  },

  {
    number: "03",
    title: "UI/UX Design",

    desc:
      "Premium user experiences, modern interfaces and scalable design systems crafted for conversion.",
  },

  {
    number: "04",
    title:
      "Development Phase",

    desc:
      "Fast and scalable development using modern technologies with clean architecture and performance.",
  },

  {
    number: "05",
    title: "Testing & QA",

    desc:
      "Every product goes through testing, optimization and security review before final deployment.",
  },

  {
    number: "06",
    title:
      "Launch & Support",

    desc:
      "Deployment, monitoring and long-term support to help your product scale with confidence.",
  },
];

const WorkProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.04),transparent_30%)]" />

      {/* BLUR */}
      <div className="absolute top-0 right-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-cyan-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-blue-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />

            How We Work
          </div>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2px] sm:tracking-[-3px] leading-[1.05] text-slate-900 animate-fade-up">
            A Repeatable Process,
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Built for Results
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-[13px] sm:text-[15px] leading-7 sm:leading-8 text-slate-500 animate-fade-up delay-100">
            Every project follows a
            structured workflow
            designed for speed,
            quality, transparency and
            scalable digital product
            delivery.
          </p>
        </div>

        {/* PROCESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14">
          {processSteps.map(
            (step, index) => (
              <div
                key={index}
                className="group rounded-[24px] sm:rounded-[28px] border border-white/70 bg-white/85 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_10px_35px_rgba(59,130,246,0.04)] hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(59,130,246,0.08)] transition-all duration-500 animate-fade-up"
              >
                {/* NUMBER */}
                <h3 className="text-4xl sm:text-5xl font-black tracking-[-2px] text-blue-100">
                  {step.number}
                </h3>

                {/* TITLE */}
                <h4 className="mt-4 sm:mt-5 text-[22px] sm:text-[24px] font-bold tracking-[-0.8px] text-slate-900">
                  {step.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] leading-7 sm:leading-8 text-slate-500">
                  {step.desc}
                </p>
              </div>
            )
          )}
        </div>

        {/* PREMIUM CTA */}
        <div className="relative mt-14 sm:mt-16 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/70 bg-white/85 backdrop-blur-2xl px-5 sm:px-10 lg:px-14 py-10 sm:py-14 shadow-[0_18px_60px_rgba(59,130,246,0.08)]">
          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          {/* BLUR */}
          <div className="absolute top-0 right-0 w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] bg-cyan-200/20 blur-3xl rounded-full" />

          <div className="relative flex flex-col items-center text-center">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-blue-100 bg-blue-50/80 backdrop-blur-xl text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-5 sm:mb-6 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />

              Ready To Build?
            </div>

            {/* TITLE */}
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2px] sm:tracking-[-3px] leading-[1.05] text-slate-900 animate-fade-up">
              Ready to build
              something

              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {" "}
                exceptional?
              </span>
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 sm:mt-6 max-w-3xl text-[13px] sm:text-[15px] leading-7 sm:leading-8 text-slate-500 font-medium animate-fade-up delay-100">
              We craft scalable web
              applications, premium
              UI/UX experiences and
              AI-powered digital
              products tailored for
              startups, founders and
              modern businesses.
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

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 mt-10">
              {/* PRIMARY CTA */}
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_16px_45px_rgba(59,130,246,0.22)] hover:scale-[1.03] transition-all duration-300"
              >
                Get a Free Proposal

                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </Link>

              {/* SECONDARY CTA */}
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-4 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;