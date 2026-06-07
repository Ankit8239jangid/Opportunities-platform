"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  Briefcase,
  FlaskConical,
  Users,
  Trophy,
  Globe,
  Shield,
} from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/use-scroll-animation";

const categories = [
  {
    icon: BookOpen,
    title: "Scholarships",
    description: "Fully funded undergraduate and postgraduate funding.",
  },
  {
    icon: Star,
    title: "Fellowships",
    description: "Elite professional and research residencies worldwide.",
  },
  {
    icon: Briefcase,
    title: "Internships",
    description: "Career-launching roles at Fortune 500 and tech giants.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description: "Lab positions and grants for groundbreaking projects.",
  },
  {
    icon: Users,
    title: "Conferences",
    description: "Fully funded travel grants for global networking.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Hackathons and case competitions with major prizes.",
  },
  {
    icon: Globe,
    title: "Exchange",
    description: "Cross-cultural semester programs and youth summits.",
  },
  {
    icon: Shield,
    title: "Leadership",
    description: "Accelerators for young changemakers and activists.",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex flex-col gap-4 mb-12 lg:mb-16 max-w-2xl">
            <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[32px] font-semibold leading-tight tracking-tight text-text-primary">
              Curation by Domain
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-lg leading-relaxed text-text-secondary">
              We filter through thousands of global announcements to bring you
              only the most prestigious and high-impact programs.
            </p>
          </div>
        </AnimatedSection>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.08}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, borderColor: "rgba(0, 107, 44, 0.5)" }}
                transition={{ duration: 0.3 }}
                className="group bg-surface-container-lowest p-6 lg:p-8 rounded-2xl border border-outline-variant/30 cursor-pointer"
              >
                <Icon
                  className="text-primary mb-4 lg:mb-6"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold mb-2 text-text-primary">
                  {cat.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-text-secondary">
                  {cat.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
