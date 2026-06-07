"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { AnimatedSection } from "@/components/use-scroll-animation";

const stories = [
  {
    id: 1,
    title: "How I got into Oxford: Rhodes 2023",
    videoId: "Wfn0_r2dgZY",
  },
  {
    id: 2,
    title: "From Small Town to Global Impact: Iris Vavilov's Gap Year Journey",

    videoId: "qEDABvhdNxU",
  },
  {
    id: 3,
    title: "Interview with a Turkish student who travelled the world in her gap year",

    videoId: "iJ9X77sIPXY",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function SuccessStories() {
  const [activeVideo, setActiveVideo] = useState<(typeof stories)[0] | null>(
    null
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setActiveVideo(null);
  };

  return (
    <section
      className=" pb-10 bg-background overflow-hidden relative"
      id="stories"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              Real Stories.{" "}
              <span className="text-primary italic">Real Impact.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Watch how ambitious students changed their academic and
              professional trajectories.
            </p>
          </div>
        </AnimatedSection>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              custom={i}
              // variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div
                className="group cursor-pointer"
                onClick={() => setActiveVideo(story)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/5 ring-1 ring-border">
                  <img
                    loading="lazy"
                    src={`https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />

                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play
                        size={18}
                        className="text-foreground ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                {/* Text below */}
                <div className="mt-3 px-0.5">

                  <h3 className="text-sm font-medium text-foreground mt-1 leading-snug line-clamp-2">
                    {story.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/10"
              >
                <X size={16} />
              </button>

              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}