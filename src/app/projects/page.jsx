"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Github, ExternalLink, Star, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with cart, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Kanban-style task manager with drag-and-drop functionality and real-time updates.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "DnD"],
    category: "frontend",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with location detection and historical data.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    category: "frontend",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Dashboard for tracking social media metrics and generating engagement reports.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis"],
    category: "backend",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first fitness application with workout plans, progress tracking, and community features.",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "AI-powered content creation tool with customizable templates and tone settings.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const categories = ["all", "frontend", "backend", "fullstack", "mobile"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-br from-background ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my latest work and personal projects. Each project reflects my passion for creating impactful solutions.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        {/* Filter */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center text-muted-foreground">
            <Filter className="mr-2" size={18} />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={filter === category ? "default" : "outline"}
              className="rounded-full px-5 capitalize"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-lg border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col">
                {/* {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-3 py-1 rounded-full flex items-center">
                      <Star size={14} className="mr-1" />
                      Featured
                    </Badge>
                  </div>
                )} */}
                
                <div className="relative h-48 overflow-hidden">
                  <div className="bg-gradient-to-br bg-primary w-full h-full flex items-center justify-center">
                    {/* <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16" /> */}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="bg-background/50 border-border/50 text-foreground/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between pt-4">
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Button 
              variant="outline"
              className="rounded-full px-8 py-6 border-2 border-primary/30 hover:border-primary text-foreground"
              onClick={loadMore}
            >
              Load More Projects
            </Button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn't find any projects matching your filter. Try selecting a different category.
            </p>
            <Button 
              variant="ghost"
              className="mt-6 text-primary"
              onClick={() => setFilter("all")}
            >
              Reset Filter
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}