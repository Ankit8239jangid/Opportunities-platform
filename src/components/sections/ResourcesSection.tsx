"use client";

import { motion } from "framer-motion";
import { FileText, GraduationCap, MessageSquare, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/use-scroll-animation";

const resources = [
  {
    icon: FileText,
    title: "Winning CV Builder",
    description:
      "Learn the exact format that gets past ATS and impresses recruiters at top organizations.",
    link: "Download Template",
  },
  {
    icon: GraduationCap,
    title: "SOP Masterclass",
    description:
      "A deep dive into narrative-building for Statement of Purpose and Personal Statements.",
    link: "Watch Course",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    description:
      "Mock interview questions and strategy for Rhodes, Fulbright, and Tech interviews.",
    link: "Read Guide",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-20 lg:py-24" id="resources">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex justify-between items-end mb-12 lg:mb-16">
            <div className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[32px] font-semibold leading-tight text-text-primary">
                Expert Guides
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-lg text-text-secondary">
                Comprehensive toolkits to perfect your application.
              </p>
            </div>
            <button className="hidden sm:flex text-primary text-sm font-medium font-[family-name:var(--font-dm-sans)] items-center gap-2 group">
              Browse all resources{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>
        </AnimatedSection>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.12}
        >
          {resources.map((res) => {
            const Icon = res.icon;
            return (
              <motion.div
                key={res.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-container p-6 lg:p-8 rounded-2xl flex flex-col gap-5 group hover:bg-surface-container-high transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Icon className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-sora)] text-xl font-semibold mb-2 text-text-primary">
                    {res.title}
                  </h4>
                  <p className="text-sm text-text-secondary mb-5 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                    {res.description}
                  </p>
                  <a className="text-sm font-bold text-primary font-[family-name:var(--font-dm-sans)] group-hover:underline cursor-pointer">
                    {res.link}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
