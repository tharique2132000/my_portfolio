"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { Code, Terminal, Database, FileCode, GitBranch, Globe } from "lucide-react";

export default function Skills() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Languages",
      items: [
        { icon: Code, title: "JavaScript & Java", level: 90 },
        { icon: Terminal, title: "React & Next.js", level: 85 },
        { icon: Database, title: "Spring Boot & Databases", level: 80 },
      ],
    },
    {
      category: "Tools",
      items: [
        { icon: GitBranch, title: "Git & VSCode", level: 90 },
        { icon: Globe, title: "Grafana & Zoho Analytics", level: 70 },
        { icon: FileCode, title: "WordPress & Shopify", level: 75 },
      ],
    },
  ];

  return (
    <div ref={ref} className="flex flex-col items-center justify-center px-6 py-16 gap-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        MY TECH SKILLS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-3xl">
        {skills.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold mb-4">{section.category}</h3>
            {section.items.map((skill, i) => (
              <div key={i} className="w-full mb-5">
                <div className="flex items-center mb-2">
                  <skill.icon className="text-primary w-7 h-7 mr-3" />
                  <span className="text-lg font-medium">{skill.title}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-primary h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
