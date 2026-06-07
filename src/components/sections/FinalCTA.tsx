"use client";

import { AnimatedSection } from "@/components/use-scroll-animation";

export function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-surface-container-lowest dark:bg-surface-container-low text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center gap-5">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[40px] lg:text-[48px] font-bold leading-tight text-text-primary">
            Your Next Opportunity Is Waiting
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
            Stop searching through infinite tabs. Start receiving world-class
            opportunities curated specifically for your ambition.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-[family-name:var(--font-dm-sans)] text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-200">
              Explore Opportunities
            </button>
            <button className="bg-surface-container-lowest dark:bg-surface-container border border-border text-text-primary px-8 py-3.5 rounded-xl font-[family-name:var(--font-dm-sans)] text-sm font-medium hover:bg-surface-container dark:hover:bg-surface-container-high transition-all duration-200">
              Contact an Expert
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
