"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, DollarSign } from "lucide-react";
import { AnimatedSection } from "@/components/use-scroll-animation";

const opportunities = [
  {
    title: "Yale Young Global Scholars (YYGS)",
    description:
      "A prestigious summer academic enrichment program for high school students from around the world.",
    badge: "Summer Program",
    location: "USA",
    funding: "Need-Based Aid",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&q=80",
    deadline: "2027-01-10",
  },
  {
    title: "Google Summer of Code",
    description:
      "A global program that offers students stipends to contribute to open-source software projects.",
    badge: "Internship",
    location: "Remote",
    funding: "$1,500 - $6,600",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
    deadline: "2027-04-08",
  },
  
  {
    title: "MITACS Globalink Research Internship",
    description:
      "A competitive international research internship at top Canadian universities.",
    badge: "Research",
    location: "Canada",
    funding: "Fully Funded",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop&q=80",
    deadline: "2026-09-18",
  },
  {
    title: "DAAD EPOS Scholarship",
    description:
      "Supports students from developing countries pursuing postgraduate degrees in Germany.",
    badge: "Scholarship",
    location: "Germany",
    funding: "Fully Funded",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80",
    deadline: "2026-11-30",
  },
  {
    title: "Chevening Scholarship",
    description:
      "The UK government's global scholarship program for future leaders and decision-makers.",
    badge: "Scholarship",
    location: "United Kingdom",
    funding: "Fully Funded",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop&q=80",
    deadline: "2026-11-05",
  },
  {
    title: "CERN Summer Student Programme",
    description:
      "Work alongside leading scientists and engineers at CERN while gaining hands-on research experience.",
    badge: "Research",
    location: "Switzerland",
    funding: "Paid + Travel",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&q=80",
    deadline: "2027-01-31",
  },
  {
    title: "Meta University Internship",
    description:
      "An internship program designed to support students from underrepresented backgrounds in technology.",
    badge: "Internship",
    location: "Global",
    funding: "Paid",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=600&h=400&fit=crop&q=80",
    deadline: "2026-10-15",
  },
];

export function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-surface-navy dark:bg-surface-dim text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-6 lg:mb-8">
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[30px] font-semibold leading-tight text-white">
                Elite Opportunities
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-white/50 mt-1.5">
                Closing soon. Handpicked for maximum career growth.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar snap-x snap-mandatory"
        >
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="min-w-[280px] sm:min-w-[320px] bg-surface-container-lowest dark:bg-surface-container text-text-primary rounded-xl overflow-hidden shadow-md flex flex-col snap-start hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-40 sm:h-44 bg-surface-container relative overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={opp.image}
                  alt={opp.title}
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-md text-[10px] font-bold font-[family-name:var(--font-dm-sans)] tracking-wide uppercase">
                  {opp.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2.5 flex-1">
                <h4 className="font-[family-name:var(--font-sora)] text-[17px] font-semibold leading-snug">
                  {opp.title}
                </h4>
                
                <p className="text-sm text-text-secondary line-clamp-2 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  {opp.description}
                </p>

                {/* Minimal Meta Info */}
                <div className="flex items-center gap-3 text-xs text-text-tertiary font-[family-name:var(--font-dm-sans)] mt-auto pt-2">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="opacity-70" />
                    {opp.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-text-tertiary/40" />
                  <span className="flex items-center gap-1">
                    <DollarSign size={13} className="opacity-70" />
                    {opp.funding}
                  </span>
                </div>

                {/* Minimal Ghost Button */}
                <button className="w-full py-2 mt-1 rounded-lg bg-white/5 text-white text-sm font-medium font-[family-name:var(--font-dm-sans)] hover:bg-white/10 transition-colors duration-200">
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