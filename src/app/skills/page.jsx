"use client";

import React from "react";
import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

// Import icons
import {
  SiNodedotjs, SiPython, SiExpress, SiDjango, SiGraphql, SiSocketdotio,
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiFlutter,
  SiPostgresql, SiMongodb, SiMysql, SiRedis
} from "react-icons/si";

const techStack = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Expert", exp: "4 years", icon: <SiNodedotjs className="w-8 h-8" /> },
      { name: "Python", level: "Expert", exp: "5 years", icon: <SiPython className="w-8 h-8" /> },
      { name: "Express", level: "Expert", exp: "3 years", icon: <SiExpress className="w-8 h-8" /> },
      { name: "Django", level: "Intermediate", exp: "2 years", icon: <SiDjango className="w-8 h-8" /> },
      { name: "GraphQL", level: "Intermediate", exp: "2 years", icon: <SiGraphql className="w-8 h-8" /> },
      { name: "Socket.io", level: "Intermediate", exp: "2 years", icon: <SiSocketdotio className="w-8 h-8" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Expert", exp: "4 years", icon: <SiReact className="w-8 h-8" /> },
      { name: "Next.js", level: "Expert", exp: "3 years", icon: <SiNextdotjs className="w-8 h-8" /> },
      { name: "TypeScript", level: "Expert", exp: "4 years", icon: <SiTypescript className="w-8 h-8" /> },
      { name: "JavaScript", level: "Expert", exp: "5 years", icon: <SiJavascript className="w-8 h-8" /> },
      { name: "Tailwind CSS", level: "Expert", exp: "3 years", icon: <SiTailwindcss className="w-8 h-8" /> },
      { name: "Flutter", level: "Intermediate", exp: "2 years", icon: <SiFlutter className="w-8 h-8" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: "Expert", exp: "3 years", icon: <SiPostgresql className="w-8 h-8" /> },
      { name: "MongoDB", level: "Expert", exp: "3 years", icon: <SiMongodb className="w-8 h-8" /> },
      { name: "MySQL", level: "Expert", exp: "3 years", icon: <SiMysql className="w-8 h-8" /> },
      { name: "Redis", level: "Intermediate", exp: "2 years", icon: <SiRedis className="w-8 h-8" /> },
    ],
  },
];

const levelColor = {
  Expert: {
    light: "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
    dark: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  },
  Intermediate: {
    light: "bg-blue-500/20 text-blue-600 border-blue-500/30",
    dark: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
};


const Skills = () => {
  
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 max-w-4xl">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technology Stack
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Technologies I use to bring ideas to life
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {techStack.map((stack, index) => (
          <motion.div key={index} className="mb-20" variants={fadeIn}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {stack.category}
              </h2>
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {stack.items.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card/80 backdrop-blur-lg border border-border rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  custom={idx}
                  variants={fadeIn}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-accent p-3 rounded-xl shadow-sm border border-border">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {tech.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {tech.exp}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium border backdrop-blur-sm",
                      levelColor[tech.level].light,
                      `dark:${levelColor[tech.level].dark}`
                    )}
                  >
                    {tech.level}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div className="mb-20" variants={fadeIn}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Additional Technologies
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Redux", "Zustand", "React Query", "Framer Motion", "Prisma", "Mongoose", "tRPC", "WebSockets", "RESTful APIs", "Jest", "Cypress", "Vite", "Webpack", "Sass", "CSS Modules", "Styled Components", "Figma", "Adobe XD"].map((tech, idx) => (
              <motion.div
                key={idx}
                className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-sm"
                custom={idx}
                variants={fadeIn}
              >
                <span className="text-foreground font-medium text-sm">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
