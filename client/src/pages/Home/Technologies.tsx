import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const technologies = [
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    image:
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Flutter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "AWS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Technologies = () => {
  return (
    <section className="relative py-10 overflow-hidden border-y border-slate-100 bg-white/70 backdrop-blur-xl">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-white to-cyan-50/40" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-6">

          <p className="text-[10px] sm:text-[11px] font-bold tracking-[3px] text-slate-400 uppercase">
            Technologies We Master
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={3}
          slidesPerView={3.2}
          loop={true}
          speed={2200}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,

            // LEFT TO RIGHT
            reverseDirection: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 4.5,
            },

            640: {
              slidesPerView: 5.5,
            },

            768: {
              slidesPerView: 6.5,
            },

            1024: {
              slidesPerView: 8.5,
            },

            1280: {
              slidesPerView: 10.5,
            },
          }}
          className="!overflow-visible"
        >

          {[...technologies, ...technologies].map((tech, index) => (
            <SwiperSlide key={index}>

              <div className="group flex flex-col items-center justify-center py-1">

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                {/* Name */}
                <p className="mt-1 text-[11px] font-medium text-slate-600 group-hover:text-blue-600 transition-all duration-300">
                  {tech.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Technologies;