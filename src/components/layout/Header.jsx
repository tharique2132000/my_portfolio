"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import Lenis from "@studio-freight/lenis";

export default function Header() {
  const lenisRef = useRef(null);

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
  };

  return (
    <header className="flex items-center justify-between p-4 fixed top-0 shadow-md z-50 w-full backdrop-blur-2xl">
      <h1 className="text-xl font-extrabold">ART 21</h1>
      <nav className="flex gap-14">
        <Button onClick={() => handleScroll("about")} variant="ghost" className='xs: hidden'>
          About Me
        </Button>
        <Button onClick={() => handleScroll("contact")} variant="ghost" className='xs: hidden'>
          Contact
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
}
