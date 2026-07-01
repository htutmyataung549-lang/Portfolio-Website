"use client";

import {
  Code2,
  Layers,
  Globe,
  Database,
  Terminal,
  Server,
  GitBranch,
  Cpu,
  Workflow,
  CloudLightning,
  Boxes,
  Container,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const SKILLS_DATA = [
  {
    category: "Frontend Modern Tech",
    skills: [
      { name: "Next.js 15", level: "Intermediate", icon: Globe },
      { name: "React.js", level: "Intermediate", icon: Cpu },
      { name: "TypeScript", level: "Intermediate", icon: Code2 },
      { name: "Tailwind CSS", level: "Intermediate", icon: Layers },
      { name: "Shadcn UI / Radix", level: "Intermediate", icon: Boxes },
      { name: "Vanilla JavaScript", level: "Intermediate", icon: Terminal },
    ],
  },
  {
    category: "Backend, DB & Tools",
    skills: [
      { name: "Java / Spring Boot", level: "Intermediate", icon: Code2 },
      { name: "Node.js / Express", level: "Intermediate", icon: Server },
      { name: "PostgreSQL / Mongo", level: "Intermediate", icon: Database },
      { name: "Prisma ORM", level: "Intermediate", icon: Workflow },
      { name: "Payload CMS", level: "Intermediate", icon: Boxes },
      { name: "Git & GitHub", level: "Intermediate", icon: GitBranch },
    ],
  },
  {
    category: "Cloud & DevOps (100 Days of KodeKloud DevOps)",
    skills: [
      { name: "AWS Services", level: "Beginner", icon: CloudLightning },
      { name: "Docker Containers", level: "Beginner", icon: Container },
      { name: "CI/CD Pipelines", level: "Beginner", icon: Workflow },
      { name: "Vercel / Neon Cloud", level: "Beginner", icon: Globe },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-6xl w-full mx-auto px-6">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">
            Technical Skills
          </h2>
          <p className="text-foreground/70 text-sm">
            Proficient in modern web technologies, secure backend systems, and
            automated cloud deployments.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 rounded-2xl border border-foreground/10 bg-foreground/2 hover:bg-background hover:shadow-xl dark:hover:shadow-blue-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground border-b border-foreground/10 pb-3 mb-4">
                  {group.category}
                </h3>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.02, x: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-background border border-foreground/5 shadow-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-foreground/80">
                            {skill.name}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            skill.level === "Expert"
                              ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400"
                              : skill.level === "Advanced"
                              ? "bg-green-50 dark:bg-green-950/60 text-green-600 dark:text-green-400"
                              : skill.level === "Intermediate"
                              ? "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400"
                              : skill.level === "Beginner"
                              ? "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400"
                              : "bg-foreground/5 text-foreground/60"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
