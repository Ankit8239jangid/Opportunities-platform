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
    <footer className="bg-surface-container-lowest border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-[family-name:var(--font-sora)] text-xl font-bold text-text-primary">
            EliteOps
          </span>
          <p className="font-[family-name:var(--font-dm-sans)] text-sm text-text-secondary">
            © 2024 EliteOps. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-dm-sans)] text-sm text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary/5 transition-all duration-200"
            aria-label="Website"
          >
            <Globe size={18} className="text-text-secondary" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary/5 transition-all duration-200"
            aria-label="Share"
          >
            <Share2 size={18} className="text-text-secondary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
