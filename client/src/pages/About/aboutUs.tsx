import { Link } from "react-router-dom";
import OurStory from "./OurStory";
import PrinciplesSection from "./PrinciplesSection";
import CTASection from "./CTASection";

const stats = [
  {
    number: "20+",
    label: "Projects Delivered",
  },

  {
    number: "10+",
    label: "Startup Clients",
  },

  {
    number: "98%",
    label: "Client Satisfaction",
  },

  {
    number: "24/7",
    label: "Support System",
  },
];

const AboutHero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8fbff] pt-14 sm:pt-18 lg:pt-24 pb-14 sm:pb-16">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.07),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f012_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f012_1px,transparent_1px)] bg-[size:85px_85px]" />

        {/* Blur */}
        <div className="absolute top-0 right-0 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-cyan-200/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 left-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-blue-200/20 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[9px] sm:text-[11px] font-semibold tracking-[2px] uppercase text-blue-600 mb-6 sm:mb-7">

              Remote-first • Startup Focused • AI Powered
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[76px] font-black tracking-[-2px] sm:tracking-[-3px] leading-[1] text-slate-900">

              We build modern
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                digital products
              </span>

              <br />
              for startups.
            </h1>

            {/* Description */}
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-[14px] sm:text-[16px] leading-7 sm:leading-8 text-slate-500 px-1">

              CODEZA creates premium web applications,
              scalable SaaS platforms, AI-powered systems
              and modern UI/UX experiences for startups
              and growing businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-9">

              {/* Contact */}
              <Link
                to="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[14px] font-semibold shadow-[0_12px_40px_rgba(59,130,246,0.20)] hover:scale-[1.02] transition-all duration-300"
              >
                Start a Project

                <span className="group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </Link>

              {/* Services */}
              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl text-slate-700 text-[14px] font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">

            {stats.map((item, index) => (
              <div
                key={index}
                className="group rounded-[22px] sm:rounded-[24px] border border-white/60 bg-white/85 backdrop-blur-2xl px-4 sm:px-5 py-5 sm:py-6 text-center shadow-[0_8px_30px_rgba(59,130,246,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(59,130,246,0.08)] transition-all duration-500"
              >

                {/* Number */}
                <h3 className="text-[28px] sm:text-[34px] font-black tracking-[-1px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-2 text-[11px] sm:text-[13px] font-medium text-slate-500 leading-5 sm:leading-6">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <OurStory />
      <PrinciplesSection />
      <CTASection/>
    </>
  );
};

export default AboutHero;