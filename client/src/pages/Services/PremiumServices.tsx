// src/components/services/PremiumServices.tsx

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
    title: "Mobile App Development",
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
    title: "CRM & Dashboards",
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
    title: "Maintenance & Support",
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
    <section className="relative overflow-hidden bg-[#f8fbff] py-20 sm:py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.04),transparent_30%)]" />

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[340px] h-[340px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-white/90 backdrop-blur-xl shadow-sm text-[10px] font-bold tracking-[2px] uppercase text-blue-600 mb-6">

            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

            Services
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-[-2.5px] leading-[1] text-slate-900">

            Everything your digital
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              product needs
            </span>

            , handled end-to-end
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-[14px] sm:text-[15px] leading-8 text-slate-500">

            CODEZA combines strategy, premium
            UI/UX, engineering, AI automation
            and long-term support into one
            focused digital product team.
          </p>
        </div>

    {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">

  {services.map((service, index) => (
    <div
      key={index}
      className="group rounded-[26px] border border-white/70 bg-white/85 backdrop-blur-2xl p-6 shadow-[0_8px_30px_rgba(59,130,246,0.04)] hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(59,130,246,0.08)] transition-all duration-500"
    >

      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">

        <service.icon className="w-5 h-5 text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-bold tracking-[-0.8px] text-slate-800 leading-tight">
        {service.title}
      </h3>

      {/* Desc */}
      <p className="mt-3 text-[13px] leading-7 font-normal text-slate-500">
        {service.desc}
      </p>

      {/* Features */}
      <div className="space-y-3 mt-6">

        {service.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
          >

            {/* Check */}
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">

              <Check className="w-3 h-3 text-blue-600" />
            </div>

            {/* Feature */}
            <p className="text-[13px] font-medium text-slate-600">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    
      </div>
    </section>
  );
};

export default PremiumServices;