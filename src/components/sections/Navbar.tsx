"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Rocket } from "lucide-react";

const navLinks = [
  { label: "Success Stories", href: "/#stories" },
  { label: "Resources", href: "/#resources" },
  { label: "Community", href: "/#community" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  // Prevent hydration mismatch for the theme toggle and handle scroll
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Only evaluate theme-specific variables after mounting
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16">

        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Opportunities
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // Detect if the link is active based on pathname
            const isActive = pathname === link.href || (pathname === '/' && link.href.startsWith('/#'));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium relative py-1 transition-colors duration-200 ${isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side: Theme Toggle + CTA */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Theme Toggle */}
          {mounted ? (
            <button
              onClick={toggleTheme}
              className="relative w-9 h-9 rounded-full border border-border flex items-center justify-center bg-background hover:bg-muted transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} className="text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} className="text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ) : (
            // Layout placeholder so the UI doesn't jump before mounting
            <div className="w-9 h-9 rounded-full border border-transparent" />
          )}

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <Link
              href="https://whatsapp.com/channel/0029VbCypEvEVccMnoRyfL0P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all duration-200"
            >
              Join Channel
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-border">
                <Link
                  href="https://whatsapp.com/channel/0029VbCypEvEVccMnoRyfL0P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all duration-200"
                >
                  Join WhatsApp Channel
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}