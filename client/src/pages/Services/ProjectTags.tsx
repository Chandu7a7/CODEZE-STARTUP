import {
  Globe,
  Palette,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";

const projectTags = [
  {
    icon: Globe,
    title: "Web Apps",

    color:
      "bg-cyan-50 border-cyan-100 text-cyan-600",
  },

  {
    icon: Palette,
    title: "UI/UX Design",

    color:
      "bg-violet-50 border-violet-100 text-violet-600",
  },

  {
    icon: BrainCircuit,
    title: "AI Products",

    color:
      "bg-emerald-50 border-emerald-100 text-emerald-600",
  },

  {
    icon: ShieldCheck,
    title: "Secure Systems",

    color:
      "bg-orange-50 border-orange-100 text-orange-500",
  },

  {
    icon: Smartphone,
    title: "Mobile Apps",

    color:
      "bg-pink-50 border-pink-100 text-pink-500",
  },

  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",

    color:
      "bg-blue-50 border-blue-100 text-blue-600",
  },
];

const ProjectTags = () => {
  return (
    <div className="relative">
      {/* WRAPPER */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-8">
        {projectTags.map(
          (tag, index) => (
            <div
              key={index}
              className={`group inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl border ${tag.color} text-[12px] sm:text-[13px] font-semibold shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 backdrop-blur-xl animate-fade-up`}
            >
              {/* ICON */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/70 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300">
                <tag.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* TEXT */}
              <span className="whitespace-nowrap">
                {tag.title}
              </span>
            </div>
          )
        )}
      </div>

      {/* MOBILE GLOW */}
      <div className="absolute -top-10 left-0 w-[180px] h-[180px] bg-cyan-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute -bottom-10 right-0 w-[180px] h-[180px] bg-blue-200/20 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
};

export default ProjectTags;