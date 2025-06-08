"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import Lenis from "@studio-freight/lenis";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const lenisRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleScroll = (section) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${section}`, {
        duration: 1.2,
        offset: -50,
      });
    }
    setMenuOpen(false); // close menu after scroll
  };

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl shadow-md px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-xl font-extrabold">ART 21</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map(({ label, section }) => (
            <Button
              key={section}
              variant="ghost"
              onClick={() => handleScroll(section)}
              className="text-foreground hover:bg-transparent hover:text-primary transition-colors"
            >
              {label}
            </Button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-background border-t border-border overflow-hidden"
          >
            {navItems.map(({ label, section }) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => handleScroll(section)}
                className="text-foreground justify-start px-4 py-3"
              >
                {label}
              </Button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
