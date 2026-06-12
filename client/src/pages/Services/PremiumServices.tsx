import {
  Code2,
  Smartphone,
  Palette,
  Bot,
  LayoutDashboard,
  Settings2,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",

    desc:
      "Fast, scalable websites and SaaS platforms engineered for performance and growth.",

    features: [
      "Landing pages",
      "SaaS platforms",
      "E-commerce builds",
    ],
  },

  {
    icon: Smartphone,
    title:
      "Mobile App Development",

    desc:
      "Cross-platform mobile applications with polished UI and scalable architecture.",

    features: [
      "iOS & Android",
      "Flutter apps",
      "Store readiness",
    ],
  },

  {
    icon: Palette,
    title: "UI/UX Design",

    desc:
      "Modern user experiences focused on conversion, usability and premium branding.",

    features: [
      "Product strategy",
      "Design systems",
      "Prototype testing",
    ],
  },

  {
    icon: Bot,
    title: "AI Automation",

    desc:
      "AI-powered workflows and automation systems that improve productivity.",

    features: [
      "AI chat systems",
      "Workflow agents",
      "Lead automation",
    ],
  },

  {
    icon: LayoutDashboard,
    title:
      "CRM & Dashboards",

    desc:
      "Custom business dashboards and admin systems for modern companies.",

    features: [
      "Admin panels",
      "Analytics dashboards",
      "CRM pipelines",
    ],
  },

  {
    icon: Settings2,
    title:
      "Maintenance & Support",

    desc:
      "Long-term support, monitoring and optimization for digital products.",

    features: [
      "Speed optimization",
      "Security updates",
      "Feature support",
    ],
  },
];

const PremiumServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.04),transparent_30%)]" />

      {/* BLUR EFFECTS */}
      <div className="absolute top-0 right-0 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] bg-cyan-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-blue-200/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[9px] sm:text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-5 sm:mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse" />

            Services
          </div>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-2px] sm:tracking-[-3px] leading-[1.05] text-slate-900 animate-fade-up">
            Everything your digital
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              product needs
            </span>

            , handled end-to-end
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-[13px] sm:text-[15px] leading-7 sm:leading-8 text-slate-500 animate-fade-up delay-100">
            CODEZA combines strategy,
            premium UI/UX, engineering,
            AI automation and long-term
            support into one focused
            digital product team.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mt-12">
          {services.map(
            (service, index) => (
              <div
                key={index}
                className="group rounded-[22px] sm:rounded-[26px] border border-white/70 bg-white/85 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(59,130,246,0.04)] hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(59,130,246,0.08)] transition-all duration-500 animate-fade-up"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 h-5 text-blue-600" />
                </div>

                {/* TITLE */}
                <h3 className="text-[22px] sm:text-[24px] font-bold tracking-[-0.8px] text-slate-800 leading-tight">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[13px] sm:text-[14px] leading-7 text-slate-500">
                  {service.desc}
                </p>

                {/* FEATURES */}
                <div className="space-y-3 mt-6">
                  {service.features.map(
                    (
                      feature,
                      i
                    ) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        {/* CHECK */}
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>

                        {/* FEATURE */}
                        <p className="text-[13px] sm:text-[14px] font-medium text-slate-600">
                          {feature}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;