"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { AnimatedSection } from "@/components/use-scroll-animation";

const benefits = [
  "Instant Opportunity Alerts",
  "Direct access to mentors and alumni",
  "Exclusive application resources",
];

export function CommunitySection() {
  return (
    <section className="py-20 lg:py-24 bg-primary text-on-primary" id="community">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection direction="left">
          <div className="flex flex-col gap-7">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-[48px] font-bold leading-tight text-white">
              Join the Elite Student Network
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 leading-relaxed">
              Don&apos;t navigate your future alone. Join 80k+ students getting
              real-time updates and peer support directly on WhatsApp.
            </p>
            <div className="flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4">
                  <span className="bg-white/20 p-2 rounded-lg">
                    <CheckCheck size={18} />
                  </span>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-fit bg-white text-primary px-10 py-4 rounded-xl font-[family-name:var(--font-dm-sans)] text-sm font-medium hover:bg-surface-container transition-all duration-200 mt-2">
              Join WhatsApp Channel Now
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              className="w-full h-full object-cover aspect-[4/3]"
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80"
              alt="Student community networking"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
