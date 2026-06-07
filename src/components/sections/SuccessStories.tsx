"use client";

import { useState, useEffect } from "react";
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

export function SuccessStories() {
  const [activeVideo, setActiveVideo] = useState<(typeof stories)[0] | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    if (activeVideo) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <section className="py-12 lg:py-16 bg-background" id="stories">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2.5">
              Real Stories. <span className="text-primary italic">Real Impact.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Watch how ambitious students changed their academic and professional trajectories.
            </p>
          </div>
        </AnimatedSection>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:border-border/80"
              onClick={() => setActiveVideo(story)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <img
                  loading="lazy"
                  src={`https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  draggable={false}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/95 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play size={16} className="text-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="px-3.5 py-3">
                <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal (Pure Tailwind Transitions) */}
      <div
        onClick={() => setActiveVideo(null)}
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm transition-all duration-300 ${
          activeVideo ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-300 ${
            activeVideo ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/60 hover:bg-black/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200 border border-white/10"
          >
            <X size={14} strokeWidth={2.5} />
          </button>

          {/* Iframe */}
          <div className="relative w-full pt-[56.25%]">
            {activeVideo && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}