import {
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Namaste Cafe",
    category: "Restaurant Website",
    desc:
      "Premium restaurant website with modern UI, smooth animations and seamless food ordering experience.",
    image:
      "../src/assets/Namaste-Food-Express.png",
    link: "https://namatecafe.web.app/",
  },

  {
    title: "UniBill Pro",
    category: "Billing SaaS",
    desc:
      "Smart billing and invoice management platform built for modern businesses and startups.",
    image:
      "../src/assets/UniBill-Pro.png",
    link: "https://unibillpro.devforge.in/",
  },

  {
    title: "Purulia Travels",
    category: "Travel Platform",
    desc:
      "Modern travel booking website with premium UI/UX and smooth destination exploration features.",
    image:
      "../src/assets/Purulia-Travels.png",
    link: "https://puruliatravelsfinal.netlify.app/",
  },

  {
    title: "Hangry",
    category: "Food Delivery",
    desc:
      "Modern food delivery platform focused on fast ordering, responsive UI and smooth user experience.",
    image:
      "../src/assets/Hangry.png",
    link: "https://hangry-frontend-seven.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-16 sm:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.04),transparent_30%)]" />

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white/80 backdrop-blur-xl text-[10px] font-bold tracking-[2px] uppercase text-blue-600 shadow-sm mb-5">

            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

            Selected Projects
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-3px] leading-[1] text-slate-900">

            Premium digital
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              experiences built.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-[13px] sm:text-[14px] leading-7 text-slate-500">

            Websites and products crafted
            with scalable development,
            premium UI/UX and modern technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[26px] border border-white/70 bg-white/85 backdrop-blur-2xl p-3 shadow-[0_10px_35px_rgba(59,130,246,0.05)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(59,130,246,0.08)] transition-all duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-[20px]">

                {/* Live Badge */}
                <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-xl text-white text-[10px] font-medium">

                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                  Live Preview
                </div>

                {/* Hover Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                  <div className="px-5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl text-slate-900 text-[12px] font-semibold shadow-xl flex items-center gap-2">

                    Open Project

                    <span>
                      ↗
                    </span>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:bg-black/50 transition-all duration-500" />

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[250px] object-cover rounded-[20px] group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">

                {/* Top */}
                <div className="flex items-center justify-between gap-3">

                  {/* Category */}
                  <div className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[9px] font-bold tracking-[2px] uppercase text-blue-600">

                    {project.category}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">

                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[26px] sm:text-[28px] font-bold tracking-[-1px] leading-[1.05] text-slate-900">

                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[13px] leading-7 text-slate-500">

                  {project.desc}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 text-[13px] font-semibold">

                  Visit live website

                  <span className="group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;