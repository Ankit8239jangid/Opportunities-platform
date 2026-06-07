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
    <section className="py-20 lg:py-24 bg-surface-navy text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="flex justify-between items-end mb-10 lg:mb-12">
            <div className="flex flex-col gap-3">
              <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[32px] font-semibold leading-tight text-white">
                Elite Opportunities
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-lg text-secondary-fixed-dim">
                Closing soon. Handpicked for maximum career growth.
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
        >
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] sm:min-w-[320px] bg-white text-text-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col card-lift snap-start"
            >
              <div className="h-48 bg-surface-container relative overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={opp.image}
                  alt={opp.title}
                />
                <span className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[11px] font-bold font-[family-name:var(--font-dm-sans)] tracking-wide">
                  {opp.badge}
                </span>
              </div>
              <div className="p-5 lg:p-6 flex flex-col gap-4">
                <h4 className="font-[family-name:var(--font-sora)] text-xl font-semibold">
                  {opp.title}
                </h4>
                <p className="text-sm text-text-secondary line-clamp-2 font-[family-name:var(--font-dm-sans)]">
                  {opp.description}
                </p>
                <div className="flex items-center gap-4 py-2 border-y border-outline-variant/10 text-xs font-medium font-[family-name:var(--font-dm-sans)] text-text-secondary">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {opp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={14} /> {opp.funding}
                  </span>
                </div>
                <button className="w-full py-3 rounded-lg border border-primary text-primary text-sm font-medium font-[family-name:var(--font-dm-sans)] hover:bg-primary/5 transition-all duration-200">
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
