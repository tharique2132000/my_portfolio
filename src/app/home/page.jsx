"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    // <div className=" bg-transparent  flex px-4 py-16 flex-col items-center justify-center p-6 md:my-80 sm:p-12 md:p-24 relative md:mb-32">
<div className="bg-transparent flex px-4 py-16 flex-col items-center justify-center p-6 my-[200px] sm:my-[200px] md:my-80 sm:p-12 md:p-24 relative md:mb-32">
      
      <motion.div
        className="flex flex-col space-y-4 text-center sm:text-left mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.3 }}
      >
        <motion.div
          className="font-extralight text-xs sm:text-sm sm:ml-0 md:ml-10 lg:ml-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          HOLA! I'M
        </motion.div>

        <motion.div
          className="font-extrabold text-[80px] sm:text-[150px] md:text-[150px] lg:text-[200px] leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          ART.
        </motion.div>

        <motion.div
          className="font-extralight text-xs sm:ml-0 md:ml-10 lg:ml-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A FULL STACK DEVELOPER
          <br />
          AND WEB DESIGNER
        </motion.div>
      </motion.div>

      {/* Clickable & Throbbing Down Arrow - Hidden on Scroll */}
      {isVisible && (
        <motion.div
          className="absolute bottom-10 flex flex-col items-center justify-center w-20 h-12 sm:w-16 sm:h-16 rounded-full cursor-pointer"
          animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleScrollDown}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </motion.div>
      )}
    </div>
  );
}
