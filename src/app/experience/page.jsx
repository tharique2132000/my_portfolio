"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, CircleCheck } from "lucide-react";
import { Badge } from "../../components/ui/badge";

export default function Experience() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const isInView = useInView(headingRef, {
    margin: "-100px",
    amount: 0.5,
  });

  const experiences = [
    {
      year: "Mar 2020 - Feb 2022",
      title: "Freelancer",
      company: "Self Employed",
      description:
        "I’ve worked as a freelancer, developing static websites, Python microservices, and WordPress sites. My experience covers both front-end and back-end development.",
      achievements: [
        "Delivered 10+ client websites with high satisfaction",
        "Built Python microservices for automation and data processing",
        "Successfully migrated WordPress sites and improved performance",
        "Maintained long-term client relationships through quality delivery",
      ],
      technologiesused: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "WordPress",
        "cPanel",
        "Bootstrap",
      ],
      expYears: 2,
    },
    {
      year: "Apr 2022 - Dec 2023",
      title: "Junior Developer",
      company: "Nesh Logitech",
      description:
        "I started my journey as a Junior Developer, gaining hands-on experience in web development. I worked on building static websites, integrating APIs, and improving UI/UX with modern tools and frameworks.",
      achievements: [
        "Developed and maintained company websites using modern front-end tools",
        "Implemented REST API integrations for dynamic content",
        "Reduced UI bugs by 40% through better QA and testing processes",
        "Collaborated with senior developers to deliver key product features",
      ],
      technologiesused: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Axios",
        "Git",
        "Figma",
        "REST API",
      ],
      expYears: 2,
    },
    {
      year: "Dec 2023 - Present",
      title: "Senior Frontend Developer",
      company: "Nesh Logitech",
      description:
        "As a Senior Frontend Developer, I have designed and developed dynamic, responsive UIs using React, Tailwind CSS, and Framer Motion. I have also implemented state management, optimized performance, and integrated complex APIs to build scalable applications.",
      achievements: [
        "Led the UI overhaul of a core web app, boosting user engagement by 25%",
        "Integrated complex APIs and handled error states with robust UX fallback",
        "Introduced Framer Motion to enhance UI transitions and interactions",
        "Mentored 3 junior developers and streamlined front-end development practices",
      ],
      technologiesused: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
        "React Query",
        "Vite",
        "OpenAI API",
      ],
      expYears: 1,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center "
    >
      <motion.div
        ref={headingRef}
        className="w-full max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          My Experience
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto font-thin"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A journey through my roles, responsibilities, and technologies I've
          mastered.
        </motion.p>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        ></motion.div>
      </motion.div>

      <div className="relative w-full flex flex-col max-w-4xl">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 p-5 isolate aspect-video "
          >
            <div>
              {index !== 0 && (
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10"></div>
              )}
              <p className="text-sm text-muted-foreground">{item.year}</p>
              <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
              <p className="text-blue-600 font-medium hover:underline">
                {item.company}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              {/* <div className="mt-3">
                <p className="text-xs text-muted-foreground mb-1">
                  Experience: {item.expYears} year{item.expYears > 1 ? "s" : ""}
                </p>
                <div className="w-full bg-muted-foreground/10 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(item.expYears / 5) * 100}%` }}
                  ></div>
                </div>
              </div> */}
            </div>

            <div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Key Achievements
              </div>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {item.achievements.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CircleCheck className="text-emerald-500 w-4 h-4 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-2">
                Technologies & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologiesused.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="destructive"
                    className="text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
