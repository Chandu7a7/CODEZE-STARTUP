import {
  Sparkles,
  Landmark,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Truck,
  Home,
  Plane,
  Clapperboard,
  Factory,
  Zap,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "FinTech",
    desc: "Payments & Banking",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },

  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "MedTech & EHR",
    bg: "bg-pink-50",
    color: "text-pink-600",
  },

  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "E-Commerce & D2C",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },

  {
    icon: GraduationCap,
    title: "EdTech",
    desc: "LMS & eLearning",
    bg: "bg-cyan-50",
    color: "text-cyan-600",
  },

  {
    icon: Truck,
    title: "Logistics",
    desc: "Supply Chain",
    bg: "bg-green-50",
    color: "text-green-600",
  },

  {
    icon: Home,
    title: "PropTech",
    desc: "Real Estate Tech",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },

  {
    icon: Plane,
    title: "Travel",
    desc: "Booking & OTA",
    bg: "bg-sky-50",
    color: "text-sky-600",
  },

  {
    icon: Clapperboard,
    title: "Media",
    desc: "Streaming & OTT",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },

  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Industry 4.0 & IoT",
    bg: "bg-indigo-50",
    color: "text-indigo-600",
  },

  {
    icon: Zap,
    title: "Energy",
    desc: "Smart Grid & Utilities",
    bg: "bg-yellow-50",
    color: "text-yellow-500",
  },
];

const IndustriesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-full h-[380px] bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       {/* Heading */}
<div className="text-center max-w-3xl mx-auto mb-10">

  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-2xl border border-blue-100 text-blue-600 text-[10px] font-semibold tracking-[2px] uppercase shadow-sm mb-5">

    <Sparkles className="w-3.5 h-3.5" />

    Industries We Serve
  </div>

  {/* Title */}
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-1.8px] leading-[1.02] text-slate-800">

    Deep expertise across

    <span className="block mt-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent italic">
      every industry
    </span>
  </h2>

  {/* Description */}
  <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-slate-500 max-w-xl mx-auto font-medium">
    We craft scalable digital solutions for startups,
    enterprises and modern businesses with premium
    user experiences.
  </p>
</div>

      {/* Cards */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

  {industries.map((industry, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-2xl border border-white/60 px-4 py-6 text-center shadow-[0_8px_28px_rgba(59,130,246,0.05)] hover:-translate-y-1 hover:shadow-[0_14px_45px_rgba(59,130,246,0.10)] transition-all duration-500"
    >

      {/* Premium Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Icon */}
      <div
        className={`relative w-14 h-14 mx-auto rounded-2xl ${industry.bg} flex items-center justify-center mb-4 shadow-sm`}
      >

        <industry.icon
          className={`w-6 h-6 ${industry.color}`}
        />
      </div>

      {/* Title */}
      <h3 className="relative text-[18px] font-semibold tracking-[-0.4px] text-slate-700 leading-tight">

        {industry.title}
      </h3>

      {/* Description */}
      <p className="relative mt-2 text-[13px] leading-6 font-medium text-slate-500">

        {industry.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default IndustriesSection;