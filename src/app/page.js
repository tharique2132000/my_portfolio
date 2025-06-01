"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Pilot from "./home/page";
import About from "./about/page";
import Education from "./education/page";
import Experience from "./experience/page";
import Skill from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,  // Adjust smoothness speed
      smooth: true,
      lerp: 0.1,  // Interpolation (higher = smoother)
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Ensure the page starts at the top on refresh
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 ">
      <div id="home">
        <Pilot />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skill />
      </div>
      {/* <div id="education">
        <Education />
      </div> */}

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
