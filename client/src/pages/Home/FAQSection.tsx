import { useState } from "react";
import {
  Sparkles,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

const faqData = [
  {
    question: "How does your development process work?",
    answer:
      "We follow a modern agile workflow including discovery, planning, UI/UX design, development, testing and deployment.",
  },

  {
    question: "What does it cost to build a project?",
    answer:
      "Project pricing depends on features, complexity and timeline. We provide transparent custom quotes for every project.",
  },

  {
    question: "How long does it take to launch a product?",
    answer:
      "Most MVPs launch within 2–6 weeks while larger enterprise platforms may take longer depending on scope.",
  },

  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer long-term maintenance, scaling support, optimization and feature upgrades after launch.",
  },

  {
    question: "Which technologies do you use?",
    answer:
      "We work with React, Next.js, Node.js, TypeScript, MongoDB, AI integrations, cloud infrastructure and modern web technologies.",
  },
];

const categories = [
  "All Questions",
  "Working Process",
  "Pricing & Contracts",
  "Technology",
  "Hiring Developers",
  "Timelines",
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-20 sm:py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      <div className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

      <div className="absolute top-10 right-0 w-[320px] h-[320px] bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="relative overflow-hidden rounded-[42px] border border-white/60 bg-white/80 backdrop-blur-2xl px-6 sm:px-10 lg:px-16 py-14 sm:py-16 text-center shadow-[0_18px_70px_rgba(59,130,246,0.08)]">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[2px] uppercase shadow-sm mb-7">

            <Sparkles className="w-3.5 h-3.5" />

            FAQ
          </div>

          {/* Title */}
          <h2 className="relative text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-3px] leading-[0.95] text-slate-900">

            Questions we

            <span className="ml-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent italic">
              hear often
            </span>
          </h2>

          {/* Description */}
          <p className="relative mt-7 text-[15px] sm:text-lg leading-9 text-slate-500 max-w-3xl mx-auto">
            Everything you need to know before starting your
            project with CODEZA. Can't find your answer?
            Just ask our team anytime.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-10">

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Topics */}
            <div className="rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white/60 p-6 shadow-[0_10px_40px_rgba(59,130,246,0.06)]">

              <p className="text-[11px] font-bold tracking-[2px] uppercase text-slate-400 mb-6">
                Browse by Topic
              </p>

              <div className="space-y-3">

                {categories.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-5 py-4 rounded-2xl text-[15px] font-semibold transition-all duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 p-7 shadow-[0_20px_60px_rgba(59,130,246,0.28)]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),transparent_35%)]" />

              <div className="relative">

                <h3 className="text-3xl font-black tracking-[-1px] text-white">
                  Still have questions?
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-white/80">
                  Our team replies within 24 hours —
                  no sales pitch, just helpful answers.
                </p>

                <button className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-[14px] font-bold text-blue-600 hover:scale-105 transition-all duration-300">

                  Ask a Question

                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Right */}
          <div className="space-y-5">

            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-[30px] border border-white/60 bg-white/85 backdrop-blur-2xl overflow-hidden shadow-[0_10px_35px_rgba(59,130,246,0.05)] transition-all duration-500 ${
                    isActive
                      ? "shadow-[0_20px_60px_rgba(59,130,246,0.10)]"
                      : ""
                  }`}
                >

                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-5 px-7 sm:px-9 py-7 text-left"
                  >

                    <h3 className="text-[18px] sm:text-[22px] font-bold tracking-[-0.8px] leading-8 text-slate-800">
                      {faq.question}
                    </h3>

                    {/* Icon */}
                    <div
                      className={`min-w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isActive ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >

                    <div className="px-7 sm:px-9 pb-8">

                      <div className="h-[1px] w-full bg-gradient-to-r from-blue-100 via-cyan-100 to-transparent mb-6" />

                      <p className="text-[15px] sm:text-base leading-8 text-slate-500 max-w-4xl">
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