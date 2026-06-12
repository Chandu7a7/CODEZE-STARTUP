import { Sparkles } from "lucide-react";

import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  Cloud,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const servicesData = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "React, Next.js, Vue — high-performance web applications built for scale and speed.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },

  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "iOS, Android & cross-platform mobile apps with premium user experiences.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },

  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "LLM integration, AI systems, automation and intelligent software products.",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },

  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-led design systems with pixel-perfect modern interfaces.",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
  },

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, scalable infrastructure, CI/CD pipelines and cloud deployments.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },

  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    desc: "Shopify, headless commerce and custom D2C platforms optimized for conversion.",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-14 sm:py-16">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-full h-[320px] bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       {/* Heading */}
<div className="text-center max-w-3xl mx-auto mb-10">

  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-2xl border border-blue-100 text-blue-600 text-[10px] font-semibold tracking-[2px] uppercase shadow-sm mb-5">

    <Sparkles className="w-3.5 h-3.5" />

    What We Build
  </div>

  {/* Title */}
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-1.8px] leading-[1.02] text-slate-800">

    End-to-end

    <span className="ml-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent italic">
      digital solutions
    </span>
  </h2>

  {/* Description */}
  <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-slate-500 max-w-xl mx-auto font-medium">
    From MVP to enterprise platforms — we partner
    with you at every stage of your digital journey.
  </p>
</div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group rounded-[22px] bg-white border border-slate-100 px-5 py-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-5`}
              >

                <service.icon
                  className={`w-5 h-5 ${service.iconColor}`}
                />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold tracking-[-0.5px] text-slate-800 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-7 text-slate-500">
                {service.desc}
              </p>

              {/* Button */}
              <button className="mt-5 inline-flex items-center gap-1 text-[14px] font-semibold text-blue-600 hover:text-cyan-500 transition-all duration-300">

                Explore

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;