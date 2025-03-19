"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ABDUR_RAHMAN_24.pdf";
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down to the next section
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-start  px-6 gap-16">
      {/* ABOUT ME */}
      <motion.div
        ref={ref}
        className="flex flex-col space-y-6 text-center md:text-start w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          WHO AM I?
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I'm a code-slinging Full-Stack Developer from India who speaks fluent
          React, JavaScript, and Java (and occasionally, human). I build sleek
          UIs, craft powerful backends, and debug like a detective on caffeine.
          Whether it’s taming tricky APIs or making pixels behave, I turn
          complex tech puzzles into smooth, scalable solutions. Always on the
          hunt for the next cool framework, I optimize workflows like a tech
          ninja and future-proof apps like a digital time traveler. 🚀💻😎
        </motion.p>

        <div className="flex justify-center md:justify-start">
          <InteractiveHoverButton onClick={handleDownload}>
            Download CV
          </InteractiveHoverButton>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      {isVisible && (
        <motion.div
          className="flex items-center justify-center w-full h-16 cursor-pointer"
          animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleScrollDown}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      )}
    </div>
  );
}
