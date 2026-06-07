"use client";

import { AnimatedSection, StaggerChildren } from "@/components/use-scroll-animation";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Discover",
    description:
      "Personalized opportunity feeds based on your background and goals.",
  },
  {
    number: 2,
    title: "Learn",
    description:
      "Step-by-step masterclasses on crafting winning CVs and SOPs.",
  },
  {
    number: 3,
    title: "Join",
    description:
      "Get exclusive insights from our global community of past winners.",
  },
  {
    number: 4,
    title: "Achieve",
    description:
      "Fly out to your dream destination with full financial security.",
  },
];

export function JourneySection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[32px] font-semibold leading-tight text-text-primary mb-4">
              Your Journey to Success
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-lg text-text-secondary max-w-2xl mx-auto">
              We guide you through every milestone of the application lifecycle.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2" />

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 relative z-10"
            staggerDelay={0.15}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center text-center gap-5"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary font-bold text-lg font-[family-name:var(--font-sora)] shadow-xl"
                >
                  {step.number}
                </motion.div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
