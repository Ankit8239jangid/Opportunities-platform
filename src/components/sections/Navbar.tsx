"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Opportunities", href: "#opportunities", active: true },
  { label: "Success Stories", href: "#stories" },
  { label: "Resources", href: "#resources" },
  { label: "Community", href: "#community" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header border-b border-surface-container/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-10 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-sora)] text-xl font-bold text-text-primary">
            EliteOps
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-[family-name:var(--font-dm-sans)] text-sm font-medium relative transition-colors duration-200 ${
                link.active
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              {link.label}
              {link.active && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-medium font-[family-name:var(--font-dm-sans)] hover:opacity-90 active:scale-95 transition-all duration-200">
            Join WhatsApp Channel
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-header border-b border-surface-container/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-[family-name:var(--font-dm-sans)] text-sm font-medium py-2 ${
                    link.active ? "text-primary" : "text-text-secondary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-medium w-full">
                Join WhatsApp Channel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
