"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { AnimatedSection } from "@/components/use-scroll-animation";

const stories = [
  {
    title: "How I got into Oxford: Rhodes 2023",
    person: "Aisha M. • Fully Funded Scholar",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop&q=80",
  },
  {
    title: "Interning at Google HQ in Zurich",
    person: "Daniel K. • STEP Intern",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop&q=80",
  },
  {
    title: "Breaking into Research at MIT",
    person: "Elena R. • MITACS Fellow",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop&q=80",
  },
];

export function SuccessStories() {
  return (
    <section className="py-20 lg:py-24 bg-surface-container-low overflow-hidden" id="stories">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-sora)] text-2xl sm:text-[32px] font-semibold leading-tight text-text-primary mb-10 lg:mb-12">
            Success Stories
          </h2>
        </AnimatedSection>

        <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="min-w-[300px] sm:min-w-[400px] aspect-video rounded-2xl overflow-hidden relative group cursor-pointer snap-start"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={story.image}
                alt={story.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 lg:p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <PlayCircle className="text-white" size={56} />
                </motion.div>
                <h4 className="text-white font-[family-name:var(--font-sora)] text-xl font-semibold">
                  {story.title}
                </h4>
                <p className="text-white/70 text-sm font-[family-name:var(--font-dm-sans)]">
                  {story.person}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
