"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "Manage Tasks App",
    description: "A comprehensive Task Management System with full CRUD capabilities, an analytics chart dashboard, dark mode toggle, and robust schema handling.",
    tags: ["Next.js 15", "Payload CMS", "Postgres", "Neon", "Shadcn UI"],
    link: "https://manage-tasks-uda4.vercel.app"
  },
  {
    title: "Bookings Management System",
    description: "A decoupled, full-stack scheduling and booking application featuring an enterprise Java backend microservice integrated with a high-performance Next.js client.",
    tags: ["Next.js", "Java", "REST API", "Tailwind CSS"],
    link: "https://bookings-management-system-frontend.vercel.app/"
  },
  {
    title: "Recipe Finder App",
    description: "An asynchronous web application that queries a third-party food database API to fetch, filter, and render culinary recipes based on user keyword search criteria.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Fetch API", "Netlify"],
    link: "https://creative-dodol-b6bd87.netlify.app/"
  },
  {
    title: "Dynamic Web Calculator",
    description: "A fully responsive math calculator featuring standard arithmetic operations, clean UI layouts, and instant input evaluation logic engineered with native web standards.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Netlify"],
    link: "https://dainty-squirrel-c4afb2.netlify.app/"
  },
  {
    title: "Interactive Quiz Application",
    description: "A dynamic quiz application featuring real-time score tracking, immediate response feedback, and interactive client-side state management built using native web APIs.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Netlify"],
    link: "https://clinquant-gumption-56ed31.netlify.app/"
  },
  {
    title: "Cinematic Movie Hub",
    description: "A dynamic, interactive movie discovery website featuring clean layouts, responsive media grids, and client-side filtering built with native web standards.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Netlify"],
    link: "https://deluxe-liger-9bc2a0.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-background border-y border-foreground/10 transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto px-6">
        
        {/* Header Title (Fade In Animation) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Selected Work</h2>
          <p className="text-foreground/70">A handpicked selection of things I&apos;ve built recently.</p>
        </motion.div>
        
        {/* Project Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DATA.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-background p-6 rounded-xl border border-foreground/10 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-blue-950/20 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Link with Lucide Icon */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground/80 group-hover:text-blue-600 dark:group-hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors self-start border border-foreground/10 group-hover:border-blue-200 dark:group-hover:border-blue-900 px-3 py-1.5 rounded-lg bg-foreground/[0.02] group-hover:bg-blue-50/30 dark:group-hover:bg-blue-950/20"
              >
                <span>View Project</span>
                <ExternalLink className="w-3.5 h-3.5 text-foreground/40 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}