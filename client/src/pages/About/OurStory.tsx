import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    number: "20+",
    label: "Projects Delivered",
  },

  {
    number: "15+",
    label: "Startup Clients",
  },

  {
    number: "3",
    label: "Core Founders",
  },

  {
    number: "2026",
    label: "Founded",
  },
];

const progress = [
  {
    title: "Client Satisfaction",
    value: "98%",
    width: "98%",
  },

  {
    title: "On-Time Delivery",
    value: "96%",
    width: "96%",
  },

  {
    title: "Product Quality",
    value: "95%",
    width: "95%",
  },
];

const OurStory = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20 lg:py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-6">

              Our Story
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-[-2px] leading-[1.05] text-slate-900">
              Built Small by Design
            </h2>

            {/* Content */}
            <div className="mt-6 space-y-5 text-[14px] sm:text-[15px] leading-7 sm:leading-8 text-slate-500">

              <p>
                CODEZA was founded by
                <span className="font-semibold text-slate-700">
                  {" "}Chandrabhan Gadeshwer
                </span>
                {" "}and
                <span className="font-semibold text-slate-700">
                  {" "}Shubham Uprade
                </span>
                {" "}with a mission to help startups launch
                faster using premium UI/UX, scalable
                engineering and AI-powered systems.
              </p>

              <p>
                We create high-performance SaaS platforms,
                startup MVPs, business websites and modern
                digital experiences focused on speed,
                scalability and clean design.
              </p>

              <p>
                From strategy and interface design to
                development and deployment, every product
                is crafted with precision and attention
                to detail.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center lg:justify-start">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white text-[13px] font-semibold shadow-[0_12px_35px_rgba(59,130,246,0.20)] hover:scale-105 transition-all duration-300"
              >
                Work With Us

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative w-full flex justify-center lg:justify-end">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-400/10 blur-3xl rounded-full" />

            <div className="relative w-full max-w-[420px] rounded-[28px] border border-white/60 bg-white/85 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_18px_55px_rgba(59,130,246,0.07)]">

              {/* Top */}
              <div className="flex items-center justify-between gap-3">

                {/* Brand */}
                <div className="flex items-center gap-3">

                  {/* Logo */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 flex items-center justify-center text-white text-base sm:text-lg font-black shadow-[0_10px_25px_rgba(59,130,246,0.20)]">
                    C
                  </div>

                  {/* Text */}
                  <div>

                    <h3 className="text-[20px] sm:text-[22px] font-black tracking-[-1px] text-slate-800">
                      CODEZA
                    </h3>

                    <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-slate-500">
                      Engineering · Est. 2026
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="px-2.5 sm:px-3 py-1 rounded-full border border-green-100 bg-green-50 text-[9px] sm:text-[10px] font-semibold text-green-600">
                  ● Active
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-blue-100 via-cyan-100 to-transparent mt-5" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-5">

                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[18px] border border-slate-100 bg-white px-3 sm:px-4 py-4 shadow-sm"
                  >

                    <h4 className="text-[24px] sm:text-[28px] font-black tracking-[-1px] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {item.number}
                    </h4>

                    <p className="mt-1 text-[10px] sm:text-[11px] leading-4 font-medium text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="space-y-5 mt-7">

                {progress.map((item, index) => (
                  <div key={index}>

                    {/* Label */}
                    <div className="flex items-center justify-between mb-2">

                      <p className="text-[10px] sm:text-[11px] font-semibold text-slate-600">
                        {item.title}
                      </p>

                      <span className="text-[10px] sm:text-[11px] font-bold text-blue-500">
                        {item.value}
                      </span>
                    </div>

                    {/* Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">

                      <div
                        style={{
                          width: item.width,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-7 flex justify-center">

                <div className="px-4 py-2 rounded-full border border-slate-100 bg-slate-50 text-[10px] font-medium text-slate-500 shadow-sm">
                  📍 India • Building globally
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;