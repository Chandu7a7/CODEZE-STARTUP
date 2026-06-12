// src/components/services/ProjectTags.tsx

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
    <div className="flex flex-wrap items-center gap-3 mt-8">

      {projectTags.map((tag, index) => (
        <div
          key={index}
          className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border ${tag.color} text-[13px] font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}
        >

          {/* Icon */}
          <div className="w-7 h-7 rounded-xl bg-white/70 flex items-center justify-center">

            <tag.icon className="w-4 h-4" />
          </div>

          {/* Text */}
          <span>
            {tag.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProjectTags;