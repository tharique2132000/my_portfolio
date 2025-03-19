"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2020",
    title: "Freelancer",
    company: "Freelancer",
    description:
      "I’ve worked as a freelancer, developing static websites, Python microservices, and WordPress sites. My experience covers both front-end and back-end development.",
  },
  {
    year: "2021",
    title: "Junior Developer",
    company: "ABC Solutions",
    description:
      "I started my journey as a Junior Developer, gaining hands-on experience in web development. I worked on building static websites, integrating APIs, and improving UI/UX with modern tools and frameworks.",
  },
  {
    year: "Present",
    title: "Senior Frontend Developer",
    company: "XYZ Corp",
    description:"As a Senior Frontend Developer, I have designed and developed dynamic, responsive UIs using React, Tailwind CSS, and Framer Motion. I have also implemented state management, optimized performance, and integrated complex APIs to build scalable applications.",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-start py-20 px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MY EXPERIENCE
      </motion.h2>

      <div className="relative w-full flex-col">
        {/* Vertical Timeline Line */}
        {/* <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div> */}

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-col items-center md:items-start mb-12 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Timeline Dot */}
            {/* <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-800"></div> */}

            {/* Year (for desktop) */}
            <div className="hidden md:block items-center w-full text-center mb-2">
              <h3 className="text-2xl font-bold">{exp.year}</h3>
            </div>

            {/* Card */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 shadow-lg rounded-lg w-full max-w-[600px] mx-auto flex flex-col gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-primary text-xl font-semibold">{exp.title}</h3>
              {/* <p className="text-gray-600 dark:text-gray-300">{exp.company}</p> */}
              <p className="text-gray-500 dark:text-gray-400">{exp.description}</p>
            </motion.div>

            {/* Year (for mobile) */}
            <div className="md:hidden text-center mt-4">
              <h3 className="text-lg font-bold">{exp.year}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
