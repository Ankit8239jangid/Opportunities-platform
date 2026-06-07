"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, DollarSign } from "lucide-react";
import { AnimatedSection } from "@/components/use-scroll-animation";

const opportunities = [
  {
    title: "Harvard Radcliffe Fellowship",
    description:
      "A chance for world-class researchers and artists to spend a year at Harvard University.",
    badge: "Fellowship",
    location: "USA",
    funding: "$78k Stipend",
    image:
      "https://images.unsplash.com/photo-1593081891731-fda08743a2b4?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Google STEP Internship",
    description:
      "A developmental internship for first and second-year undergraduate students with a passion for CS.",
    badge: "Internship",
    location: "Global",
    funding: "Paid",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Fulbright Global Scholar",
    description:
      "The flagship international educational exchange program sponsored by the U.S. government.",
    badge: "Scholarship",
    location: "Germany",
    funding: "Full Coverage",
    image:
      "https://images.unsplash.com/photo-1536152470836-b943b246da54?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "MITACS Globalink",
    description:
      "A 12-week research internship at Canadian universities for international undergrads.",
    badge: "Research",
    location: "Canada",
    funding: "Fully Funded",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&q=80",
  },
];

export function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-14 lg:py-20 bg-surface-navy dark:bg-surface-dim text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 lg:mb-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[32px] font-semibold leading-tight text-white">
                Elite Opportunities
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-white/60">
                Closing soon. Handpicked for maximum career growth.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
        >
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] bg-surface-container-lowest dark:bg-surface-container text-text-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col card-lift snap-start"
            >
              <div className="h-44 sm:h-48 bg-surface-container relative overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={opp.image}
                  alt={opp.title}
                />
                <span className="absolute top-3 right-3 bg-tertiary dark:bg-tertiary-fixed text-on-tertiary dark:text-on-tertiary-fixed px-3 py-1 rounded-full text-[11px] font-bold font-[family-name:var(--font-dm-sans)] tracking-wide">
                  {opp.badge}
                </span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <h4 className="font-[family-name:var(--font-sora)] text-lg sm:text-xl font-semibold">
                  {opp.title}
                </h4>
                <p className="text-sm text-text-secondary line-clamp-2 font-[family-name:var(--font-dm-sans)]">
                  {opp.description}
                </p>
                <div className="flex items-center gap-4 py-2 border-y border-outline-variant/10 dark:border-outline-variant/15 text-xs font-medium font-[family-name:var(--font-dm-sans)] text-text-secondary">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {opp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={14} /> {opp.funding}
                  </span>
                </div>
                <button className="w-full py-2.5 rounded-lg border border-primary text-primary dark:text-primary-fixed dark:border-primary-fixed text-sm font-medium font-[family-name:var(--font-dm-sans)] hover:bg-primary/5 dark:hover:bg-primary-fixed/5 transition-all duration-200">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
