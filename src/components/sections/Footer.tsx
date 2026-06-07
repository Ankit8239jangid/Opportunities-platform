"use client";

import { Globe, Share2 } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-low border-t border-border dark:border-outline-variant/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-8 lg:py-10 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-on-primary font-[family-name:var(--font-sora)] text-xs font-bold">E</span>
            </div>
            <span className="font-[family-name:var(--font-sora)] text-lg font-bold text-text-primary">
              EliteOps
            </span>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-text-secondary">
            © 2024 EliteOps. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 lg:gap-7">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-dm-sans)] text-sm text-text-secondary hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2.5">
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-outline-variant/25 dark:border-outline-variant/15 flex items-center justify-center hover:bg-primary/5 dark:hover:bg-primary-fixed/5 transition-all duration-200"
            aria-label="Website"
          >
            <Globe size={16} className="text-text-secondary" />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-outline-variant/25 dark:border-outline-variant/15 flex items-center justify-center hover:bg-primary/5 dark:hover:bg-primary-fixed/5 transition-all duration-200"
            aria-label="Share"
          >
            <Share2 size={16} className="text-text-secondary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
