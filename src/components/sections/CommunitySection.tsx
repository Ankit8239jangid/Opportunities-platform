"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { AnimatedSection } from "@/components/use-scroll-animation";
import Link from "next/link";

const benefits = [
  "Instant Opportunity Alerts",
  "Direct access to mentors and alumni",
  "Exclusive application resources",
];

export function CommunitySection() {
  return (
    <section className="py-14 lg:py-20 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container" id="community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <AnimatedSection direction="left">
          <div className="flex flex-col gap-6">
            <h2 className="font-(family-name:--font-sora) text-3xl sm:text-[40px] lg:text-[48px] font-bold leading-tight text-white dark:text-on-primary-container">
              Join the Elite Student Network
            </h2>
            <p className="font-(family-name:--font-dm-sans) text-base sm:text-lg text-white/80 dark:text-on-primary-container/70 leading-relaxed">
              Don&apos;t navigate your future alone. Join 80k+ students getting
              real-time updates and peer support directly on WhatsApp.
            </p>
            <div className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="bg-white/20 dark:bg-on-primary-container/10 p-2 rounded-lg">
                    <CheckCheck size={16} />
                  </span>
                  <p className="font-(family-name:--font-dm-sans) text-sm font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="https://whatsapp.com/channel/0029VbCypEvEVccMnoRyfL0P"
              className="w-fit bg-white dark:bg-on-primary-container text-primary dark:text-primary-container px-8 py-3.5 rounded-xl font-(family-name:--font-dm-sans) text-sm font-medium hover:bg-white/90 dark:hover:bg-on-primary-container/90 transition-all duration-200 mt-1">
              Join WhatsApp Channel Now
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
            <img
              className="w-full h-full object-cover aspect-4/3"
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80"
              alt="Student community networking"
            />
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary-container/30 backdrop-blur-[2px]" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
