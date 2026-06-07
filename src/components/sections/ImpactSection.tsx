"use client";

import { AnimatedSection, CountUp } from "@/components/use-scroll-animation";

const stats = [
  { value: 80, suffix: "k+", label: "Students Empowered", prefix: "" },
  { value: 80, suffix: "+", label: "Countries Reached", prefix: "" },
  { value: 12, suffix: "k+", label: "Opportunities Shared", prefix: "" },
  { value: 4, suffix: "M+", label: "Funding Secured", prefix: "$" },
];

export function ImpactSection() {
  return (
    <section className="py-4 bg-surface dark:bg-surface" id="opportunities">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 border-y border-outline-variant/20 dark:border-outline-variant/10 py-10 lg:py-14">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <span className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl lg:text-[48px] font-bold text-primary leading-tight">
                  {stat.prefix}
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-medium text-text-secondary uppercase tracking-widest">
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
