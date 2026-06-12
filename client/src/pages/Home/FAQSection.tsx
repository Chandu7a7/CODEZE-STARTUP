import { useState } from "react";
import {
  Sparkles,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

const faqData = [
  {
    question: "What kind of digital products do you build?",
    answer:
      "We build premium web applications, SaaS platforms, AI-powered systems, dashboards, UI/UX solutions and scalable business software tailored for startups and modern enterprises.",
  },

  {
    question: "Can you design modern UI/UX for our product?",
    answer:
      "Yes. We create premium user experiences with clean interfaces, responsive layouts, scalable design systems and conversion-focused UI/UX tailored for modern brands.",
  },

  {
    question: "Do you develop custom web applications?",
    answer:
      "Absolutely. We develop high-performance custom web applications using React, Next.js, Node.js and modern technologies optimized for scalability and speed.",
  },

  {
    question: "Can you integrate AI into our business platform?",
    answer:
      "Yes. We integrate AI-powered features including chatbots, automation systems, smart dashboards, AI workflows and modern intelligent business solutions.",
  },

  {
    question: "Do you provide complete frontend and backend development?",
    answer:
      "We offer full-stack development including frontend UI, backend APIs, databases, authentication systems and cloud deployment solutions.",
  },

  {
    question: "Which technologies do you specialize in?",
    answer:
      "Our core stack includes React.js, Next.js, TypeScript, Node.js, MongoDB, Tailwind CSS, Firebase, AI tools and modern cloud technologies.",
  },

  {
    question: "Can you redesign our existing website or platform?",
    answer:
      "Yes. We modernize outdated websites and applications with premium UI/UX, improved performance, responsive design and modern development architecture.",
  },

  {
    question: "Do you work with startups and growing businesses?",
    answer:
      "Yes. We help startups and businesses transform ideas into scalable digital products with fast development and modern technology solutions.",
  },
];
const categories = [
  "All Questions",
  "Working Process",
  "Pricing",
  "Technology",
  "Hiring",
  "Timelines",
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-[10px] font-semibold tracking-[2px] uppercase shadow-sm mb-5">

            <Sparkles className="w-3.5 h-3.5" />

            FAQ
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-1.8px] leading-[1.02] text-slate-800">

            Questions we

            <span className="ml-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent italic">
              hear often
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-[14px] sm:text-[15px] leading-7 text-slate-500 max-w-xl mx-auto font-medium">
            Everything you need to know before starting
            your project with CODEZA.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* Left Side */}
          <div className="space-y-5">

            {/* Categories */}
            <div className="rounded-[24px] bg-white border border-slate-100 p-5 shadow-sm">

              <p className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400 mb-5">
                Browse Topics
              </p>

              <div className="space-y-2">

                {categories.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-[14px] font-medium transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 p-6 shadow-[0_15px_45px_rgba(59,130,246,0.22)]">

              <div className="relative">

                <h3 className="text-2xl font-black tracking-[-1px] text-white">
                  Still have questions?
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-white/80">
                  Our team replies within 24 hours.
                </p>

                <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-[13px] font-semibold text-blue-600 hover:scale-105 transition-all duration-300">
<a href="/contact">Ask a Question</a>
                  

                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Right */}
          <div className="space-y-3">

            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-[22px] border border-slate-100 bg-white overflow-hidden shadow-sm transition-all duration-500 ${
                    isActive
                      ? "shadow-[0_12px_35px_rgba(59,130,246,0.08)]"
                      : ""
                  }`}
                >

                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  >

                    {/* Question Text */}
                    <h3 className="text-[15px] sm:text-[17px] font-semibold tracking-[-0.3px] leading-7 text-slate-700">
                      {faq.question}
                    </h3>

                    {/* Icon */}
                    <div
                      className={`min-w-[40px] h-[40px] rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isActive ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "max-h-[220px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >

                    <div className="px-5 sm:px-6 pb-5">

                      <div className="h-[1px] w-full bg-gradient-to-r from-blue-100 via-cyan-100 to-transparent mb-4" />

                      <p className="text-[13px] leading-7 font-medium text-slate-500 max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;