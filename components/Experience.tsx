"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, FolderGit2 } from "lucide-react";

const EXPERIENCE_DATA = [
  {
    role: "Full-Stack Developer",
    company:
      "CHID Bank (ဆောက်လုပ်ရေး၊ အိမ်ရာနှင့် အခြေခံအဆောက်အအုံဖွံ့ဖြိုးရေးဘဏ်)",
    period: "Jan 2026 - May 2026",
    project: "Blacklist Portal Management System",
    description:
      "Developed an enterprise-grade portal system featuring employee tracking, organization administration, secure audit logging, and strict role-based access permissions (RBAC).",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Full-Stack Developer",
    company:
      "CHID Bank (ဆောက်လုပ်ရေး၊ အိမ်ရာနှင့် အခြေခံအဆောက်အအုံဖွံ့ဖြိုးရေးဘဏ်)",
    period: "June 2026 - Present",
    project: "CHID Website Redesign",
    description:
      "Redesigned and developed the web portal and robust backend API services for banking operations, housing services, and news listings, ensuring high performance and secure data management.",
    techStack: [
      "Next.js",
      "Spring Boot",
      "MyBatis",
      "TypeScript",
      "REST APIs",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-16 sm:py-24 bg-background transition-colors duration-300 relative overflow-hidden"
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Work Experience
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            My professional journey building scalable web applications and
            enterprise portals.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/20 dark:border-blue-500/10 ml-3 sm:ml-6 md:ml-36 space-y-10">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Dot Icon */}
              <div className="absolute -left-4.25 top-1.5 w-8 h-8 rounded-full bg-background border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Period Badge (Desktop & Mobile Responsive with fixed spacing for lg screens) */}
              <div className="md:absolute md:-left-40 lg:-left-42 md:top-2 text-xs font-semibold text-foreground/60 mb-3 md:mb-0 flex items-center gap-1.5 bg-foreground/5 md:bg-transparent px-2.5 py-1 md:p-0 rounded-md w-fit whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{item.period}</span>
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl border border-foreground/10 bg-foreground/2 hover:bg-background hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-blue-950/30 hover:border-blue-500/30 transition-all duration-300">
                {/* Role Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {item.role}
                  </h3>

                  {/* Project Name Tag */}
                  {item.project && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 w-fit">
                      <FolderGit2 className="w-3 h-3" />
                      {item.project}
                    </span>
                  )}
                </div>

                {/* Company Name */}
                <h4 className="text-xs sm:text-sm font-medium text-foreground/70 mb-4 leading-relaxed">
                  {item.company}
                </h4>

                {/* Description */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-foreground/10 group-hover:border-blue-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
