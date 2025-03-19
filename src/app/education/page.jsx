"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brush, Megaphone, Headset, Star, FileCode } from "lucide-react";
import { MagicCard } from "../../components/magicui/MagicCard";
import { useTheme } from "next-themes";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const skills = [
    { icon: Code, title: "Development", description: "Building efficient software." },
    { icon: Brush, title: "Clean Designing", description: "Creating aesthetic UIs." },
    { icon: Megaphone, title: "Marketing", description: "Effective audience reach." },
    { icon: Headset, title: "Support", description: "Reliable customer support." },
    { icon: Star, title: "Branding", description: "Strong brand identity." },
    { icon: FileCode, title: "Clear Code", description: "Writing maintainable code." },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-6 md:px-12 py-16 gap-12">
      {/* SECTION HEADER */}
      <motion.div
        ref={ref}
        className="flex flex-col space-y-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          WHAT I CAN DO
        </motion.h2>

        {/* SKILLS GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {skills.map((skill, index) => (
            <MagicCard
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center text-center p-6 text-lg w-[300px] min-h-[180px]"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="flex flex-col justify-center items-center space-y-3">
                <skill.icon className="text-primary w-12 h-12" />
                <h3 className="text-lg font-semibold text-primary">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </MagicCard>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
