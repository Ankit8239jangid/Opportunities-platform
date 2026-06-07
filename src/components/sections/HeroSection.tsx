"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-container-lowest dark:bg-surface-container-low pt-16">
      {/* Dot pattern background */}
      <div className="absolute inset-0 map-bg opacity-30 dark:opacity-10" />

      {/* Gradient glow */}
      <div className="hero-glow bg-primary top-1/4 -left-20" />
      <div className="hero-glow bg-tertiary-fixed bottom-1/4 right-0" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center relative z-10 py-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col items-start gap-5"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full bg-primary-fixed/20 dark:bg-primary-fixed/10 text-primary dark:text-primary-fixed text-xs font-bold font-[family-name:var(--font-dm-sans)] tracking-wider uppercase border border-primary/10"
          >
            80,000+ Students Impacted Across 80+ Countries
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.12] tracking-tight text-text-primary"
          >
            Discover Opportunities That Can{" "}
            <span className="gradient-text italic">Change Your Future</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg leading-relaxed text-text-secondary max-w-lg"
          >
            Access a curated ecosystem of world-class scholarships, elite
            internships, and global fellowships designed for the ambitious
            student.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-3 sm:gap-4 mt-1"
          >
            <button className="bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium font-[family-name:var(--font-dm-sans)] text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-200">
              Explore Opportunities
            </button>
            <button className="bg-surface-container-lowest dark:bg-surface-container border border-border text-text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium font-[family-name:var(--font-dm-sans)] text-sm flex items-center gap-2 hover:bg-surface-container transition-all duration-200">
              <Users size={18} />
              Join WhatsApp Channel
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Floating Elements */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] hidden lg:flex items-center justify-center">
          {/* Spinning orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-primary/10 dark:border-primary/20 rounded-full flex items-center justify-center">
            <div className="w-[260px] h-[260px] border border-primary/15 dark:border-primary/25 rounded-full animate-spin-slow relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary dark:bg-primary-fixed rounded-full shadow-lg shadow-primary/30" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary-fixed dark:bg-tertiary-fixed rounded-full" />
            </div>
          </div>

          {/* Floating Card 1 - Rhodes Scholarship */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-1/4 left-2 bg-surface-container-lowest dark:bg-surface-container-high p-4 rounded-xl shadow-xl border border-outline-variant/30 dark:border-outline-variant/20 animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center text-white">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs font-bold font-[family-name:var(--font-dm-sans)] text-text-primary">
                  Rhodes Scholarship
                </p>
                <p className="text-[10px] text-text-secondary font-[family-name:var(--font-dm-sans)]">
                  Oxford, UK • Fully Funded
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 - Google STEP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-1/3 right-2 bg-surface-container-lowest dark:bg-surface-container-high p-4 rounded-xl shadow-xl border border-outline-variant/30 dark:border-outline-variant/20 animate-float-delayed"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-xs font-bold font-[family-name:var(--font-dm-sans)] text-text-primary">
                  Google STEP
                </p>
                <p className="text-[10px] text-text-secondary font-[family-name:var(--font-dm-sans)]">
                  Engineering Intern • Global
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3 - Exchange */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute bottom-1/4 left-1/4 bg-surface-container-lowest dark:bg-surface-container-high p-3 rounded-xl shadow-lg border border-outline-variant/30 dark:border-outline-variant/20 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-surface-navy dark:bg-surface-container-highest flex items-center justify-center text-white">
                <Globe size={16} />
              </div>
              <div>
                <p className="text-[11px] font-bold font-[family-name:var(--font-dm-sans)] text-text-primary">
                  Fulbright Exchange
                </p>
                <p className="text-[9px] text-text-secondary font-[family-name:var(--font-dm-sans)]">
                  Full Coverage • USA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
