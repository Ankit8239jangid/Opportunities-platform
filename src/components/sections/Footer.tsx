"use client";

import { Linkedin, Instagram, Send } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/opportunities-platform",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/opportunities_platform",
    icon: Instagram,
  },
  {
    label: "Telegram",
    href: "https://t.me/opportunities_platform121",
    icon: Send,
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-low border-t border-border dark:border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 lg:py-10 flex flex-col items-center gap-6">
        {/* Top row: links + socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-(family-name:--font-dm-sans) text-sm text-text-secondary hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block w-px h-4 bg-outline-variant/25 dark:bg-outline-variant/15" />

          <div className="flex items-center gap-1.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-outline-variant/25 dark:border-outline-variant/15 flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary-fixed/10 hover:border-primary/25 dark:hover:border-primary-fixed/25 transition-all duration-200 group"
                aria-label={social.label}
              >
                <social.icon
                  size={15}
                  className="text-text-secondary group-hover:text-primary dark:group-hover:text-primary-fixed transition-colors duration-200"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: brand + copyright */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-(family-name:--font-sora) text-base font-bold text-text-primary">
            Opportunities-platform
          </span>
          <p className="font-(family-name:--font-dm-sans) text-xs text-text-tertiary">
            © {new Date().getFullYear()} Opportunities-platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}