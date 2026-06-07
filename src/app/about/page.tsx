"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Globe,
  Briefcase,
  FlaskConical,
  Plane,
  Trophy,
  Search,
  BookOpen,
  Users,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection, StaggerChildren, CountUp } from "@/components/use-scroll-animation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/* ──────────── Hero ──────────── */
function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface-container-lowest dark:bg-surface-container-low">
      {/* Dot pattern */}
      <div className="absolute inset-0 map-bg opacity-25 dark:opacity-[0.06]" />

      {/* Glow effects */}
      <div className="hero-glow bg-primary top-1/3 -left-20" />
      <div className="hero-glow bg-tertiary-fixed bottom-1/4 right-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 relative z-10 py-12 lg:py-0">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-dm-sans)] text-text-secondary hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary-fixed/10 text-primary dark:text-primary-fixed text-xs font-bold font-[family-name:var(--font-dm-sans)] tracking-wider uppercase mb-6"
          >
            About Opportunities Platform
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-text-primary mb-6"
          >
            Making Global Opportunities Accessible To{" "}
            <span className="gradient-text italic">Every Student</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-4"
          >
            <p className="font-[family-name:var(--font-dm-sans)] text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Too many talented students miss life-changing opportunities simply because they never hear about them.
            </p>
            <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              We&apos;re building a platform that helps students discover scholarships, fellowships, internships, research programs, and global experiences that can shape their future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Mission Section ──────────── */
function MissionSection() {
  const opportunityTypes = [
    "Scholarships",
    "Fellowships",
    "Internships",
    "Research Programs",
    "Conferences",
    "Competitions",
  ];

  return (
    <section className="py-14 lg:py-20 bg-surface dark:bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Mission statement */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] font-bold leading-tight text-text-primary">
                Our mission is simple:
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-xl sm:text-2xl text-primary dark:text-primary-fixed font-medium leading-relaxed">
                No student should miss an opportunity because of lack of awareness.
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-base text-text-secondary leading-relaxed">
                We bridge the gap between students and life-changing global opportunities, empowering every young person—regardless of their background—with equal access to shape their futures.
              </p>
            </div>
          </AnimatedSection>

          {/* Right - Info card */}
          <AnimatedSection direction="right">
            <div className="bg-surface-container-lowest dark:bg-surface-container rounded-2xl p-8 lg:p-10 border border-outline-variant/15 shadow-lg">
              <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-text-primary mb-6">
                What we curate for students
              </h3>
              <div className="space-y-4">
                {opportunityTypes.map((type, i) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-primary-fixed flex-shrink-0" />
                    <div className="flex-1 h-px bg-outline-variant/20 dark:bg-outline-variant/15" />
                    <span className="font-[family-name:var(--font-dm-sans)] text-base font-medium text-text-primary">
                      {type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────── The Problem ──────────── */
function ProblemSection() {
  const problems = [
    {
      icon: Globe,
      title: "Information is fragmented",
      description:
        "Students spend hours searching across dozens of websites and social platforms.",
    },
    {
      icon: GraduationCap,
      title: "Guidance is limited",
      description:
        "Many students don't know which opportunities match their background or goals.",
    },
    {
      icon: Rocket,
      title: "Potential goes unnoticed",
      description:
        "Talented students often miss opportunities simply because they never discover them.",
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-surface-navy dark:bg-surface-dim text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] font-bold leading-tight text-white mb-4">
              The Opportunity Gap Is Real
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Millions of talented youth lack access to internships, scholarships, and global opportunities—resulting in lost potential and inequality.
            </p>
          </div>
        </AnimatedSection>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6"
          staggerDelay={0.12}
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  <Icon className="text-primary-fixed" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ──────────── Our Impact ──────────── */
function ImpactSection() {
  const stats = [
    { value: 80, suffix: "k+", label: "Students Reached" },
    { value: 80, suffix: "+", label: "Countries Represented" },
    { value: 500, suffix: "+", label: "Opportunities Shared" },
    { value: 100, suffix: "+", label: "Scholarships Featured" },
  ];

  return (
    <section className="py-14 lg:py-20 bg-surface dark:bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] font-bold leading-tight text-text-primary">
              Our Impact
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center flex flex-col items-center gap-2 py-6"
              >
                <span className="font-[family-name:var(--font-sora)] text-5xl sm:text-6xl lg:text-7xl font-bold text-primary dark:text-primary-fixed leading-none">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                </span>
                <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm font-medium text-text-secondary uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────── What We Do ──────────── */
function WhatWeDoSection() {
  const items = [
    {
      icon: GraduationCap,
      title: "Scholarships",
      description: "Find fully funded and partially funded scholarships worldwide.",
    },
    {
      icon: Globe,
      title: "Fellowships",
      description:
        "Leadership, social impact, policy, climate, and innovation fellowships.",
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Global internships from leading organizations and institutions.",
    },
    {
      icon: FlaskConical,
      title: "Research Programs",
      description:
        "Research opportunities for undergraduate, master's, and PhD students.",
    },
    {
      icon: Plane,
      title: "Conferences",
      description: "International conferences, summits, and youth forums.",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Challenges, hackathons, innovation contests, and awards.",
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-surface-container-low dark:bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] font-bold leading-tight text-text-primary mb-4">
              Everything Students Need To Discover Global Opportunities
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-text-secondary">
              Our platform provides curated, timely, and actionable information—all in one place.
            </p>
          </div>
        </AnimatedSection>

        <StaggerChildren
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5"
          staggerDelay={0.07}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-container-lowest dark:bg-surface-container p-5 lg:p-6 rounded-2xl border border-outline-variant/15 cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary-fixed/10 flex items-center justify-center mb-4">
                  <Icon
                    className="text-primary dark:text-primary-fixed"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-text-primary mb-1.5">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ──────────── How We Help ──────────── */
function HowWeHelpSection() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Discover",
      description: "Find opportunities from around the world.",
    },
    {
      number: 2,
      icon: BookOpen,
      title: "Learn",
      description: "Access application resources and guidance.",
    },
    {
      number: 3,
      icon: Users,
      title: "Connect",
      description: "Join a community of ambitious students.",
    },
    {
      number: 4,
      icon: Rocket,
      title: "Achieve",
      description: "Secure opportunities that accelerate your future.",
    },
  ];

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] font-bold leading-tight text-text-primary mb-4">
              How We Help
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              A simple four-step path from discovery to achievement.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-outline-variant/20 dark:bg-outline-variant/10 -translate-y-1/2" />

          <StaggerChildren
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 relative z-10"
            staggerDelay={0.12}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl bg-surface-container-lowest dark:bg-surface-container border-2 border-primary dark:border-primary-fixed flex items-center justify-center shadow-xl relative"
                  >
                    <Icon className="text-primary dark:text-primary-fixed" size={24} strokeWidth={1.5} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary dark:bg-primary-fixed text-on-primary dark:text-on-primary-fixed text-xs font-bold flex items-center justify-center font-[family-name:var(--font-sora)]">
                      {step.number}
                    </span>
                  </motion.div>
                  <h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-[family-name:var(--font-dm-sans)] leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Community Section ──────────── */
function CommunitySection() {
  const features = [
    "Community-driven opportunity sharing",
    "WhatsApp Channel with real-time alerts",
    "Student activity feed & success notifications",
    "Connect with mentors and past winners",
  ];

  return (
    <section className="py-14 lg:py-20 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] font-bold leading-tight text-white dark:text-on-primary-container">
                Built Around Students
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-white/80 dark:text-on-primary-container/70 leading-relaxed">
                Opportunities Platform is more than a directory. It&apos;s a growing community of students sharing opportunities, resources, experiences, and success stories.
              </p>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-white/70 dark:text-on-primary-container/50 flex-shrink-0" />
                    <p className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            {/* Mock community preview card */}
            <div className="bg-white/10 dark:bg-on-primary-container/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {[
                    "bg-emerald-300",
                    "bg-sky-300",
                    "bg-amber-300",
                    "bg-rose-300",
                    "bg-violet-300",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-white/20 flex items-center justify-center text-[10px] font-bold text-white`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-[family-name:var(--font-dm-sans)] text-white/70 dark:text-on-primary-container/50">
                  80,000+ members
                </span>
              </div>

              {/* Mock notification cards */}
              <div className="space-y-3">
                {[
                  { text: "New scholarship posted", sub: "Rhodes Scholarship 2025 • Oxford", color: "bg-primary-fixed/20" },
                  { text: "Application deadline reminder", sub: "Fulbright Program • 3 days left", color: "bg-amber-400/20" },
                  { text: "Student success story", sub: "Aisha M. secured Harvard Fellowship", color: "bg-emerald-400/20" },
                ].map((notif, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className={`${notif.color} rounded-xl p-3 flex items-center gap-3`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium font-[family-name:var(--font-dm-sans)]">
                        {notif.text}
                      </p>
                      <p className="text-xs text-white/60 dark:text-on-primary-container/40 font-[family-name:var(--font-dm-sans)]">
                        {notif.sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────── Vision Section ──────────── */
function VisionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10 text-center">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] lg:text-[48px] font-bold leading-tight text-text-primary mb-6">
            A World Where Opportunity Is Not Determined By{" "}
            <span className="gradient-text italic">Geography</span>
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Whether a student lives in a major city or a small village, they should have equal access to opportunities that can transform their future.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────── Final CTA ──────────── */
function AboutFinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-surface-container-lowest dark:bg-surface-container-low text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center gap-5">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] lg:text-[48px] font-bold leading-tight text-text-primary">
            Your Next Opportunity Could Be One Click Away
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
            Join thousands of students discovering scholarships, fellowships, internships, and global opportunities every day.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/"
              className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-[family-name:var(--font-dm-sans)] text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              Explore Opportunities
              <ArrowRight size={16} />
            </Link>
            <button className="bg-surface-container-lowest dark:bg-surface-container border border-border text-text-primary px-8 py-3.5 rounded-xl font-[family-name:var(--font-dm-sans)] text-sm font-medium hover:bg-surface-container dark:hover:bg-surface-container-high transition-all duration-200">
              Join WhatsApp Channel
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────── Main Page ──────────── */
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <AboutHero />
        <MissionSection />
        <ProblemSection />
        <ImpactSection />
        <WhatWeDoSection />
        <HowWeHelpSection />
        <CommunitySection />
        <VisionSection />
        <AboutFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
