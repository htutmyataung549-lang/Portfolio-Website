"use client";

import { Code2, ShieldCheck, CloudLightning, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockContent,
} from "@/components/ui/code-block";

export default function About() {
  const codeString = `const developer = {
  name: "Htut Myat Aung",
  role: "Full-Stack Developer",
  company: "CHID Bank",
  stack: ["React.js","Next.js", "Spring Boot", "PostgreSQL"],
  learning: "KodeKloud DevOps",
  hireable: true
};`;

  return (
    <section
      id="about"
      className="py-10 bg-background transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Title (Fade In Animation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">
            About Me
          </h2>

          <p className="text-foreground/70 text-sm">
            A glimpse into who I am, my core focus areas, and my passion for
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Code Block Profile Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Shadcn Code Block Component */}
            <CodeBlock>
              <CodeBlockHeader>
                <CodeBlockTitle>
                  <Terminal className="size-4 text-emerald-400 inline-block mr-1.5" />
                  developer.ts
                </CodeBlockTitle>
                <CodeBlockActions>
                  <CodeBlockCopyButton value={codeString} />
                </CodeBlockActions>
              </CodeBlockHeader>

              <CodeBlockContent lineNumbers={true}>
                {codeString}
              </CodeBlockContent>
            </CodeBlock>

            {/* Brief Introduction Text */}
            <div className="p-6 rounded-2xl bg-background border border-foreground/10 shadow-sm space-y-3 transition-colors duration-300">
              <h3 className="text-lg font-bold text-foreground">Who I Am</h3>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                I am a passionate Full-Stack Software Developer dedicated to
                building clean, scalable, and user-centric web applications.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Core Professional Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {/* Pillar 1: Full-Stack Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm flex gap-4 items-start hover:shadow-md transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">
                  Full-Stack Craftsmanship
                </h4>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  Experienced in architecting modern web applications utilizing
                  the power of React, Next.js, and Node.js. I focus on producing
                  clean, modular code and efficient state management.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2: Systems & Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm flex gap-4 items-start hover:shadow-md transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">
                  Backend Integrity & Security
                </h4>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  Deeply interested in systems architecture and backend
                  security. I specialize in implementing comprehensive audit
                  trails, session management, automated background tasks, and
                  secure data layers.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Cloud & DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm flex gap-4 items-start hover:shadow-md transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 shrink-0">
                <CloudLightning className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">
                  DevOps & Continuous Learning
                </h4>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  Actively expanding my capabilities into cloud infrastructures
                  and automation pipelines. I am currently undertaking the
                  intensive **100 Days of DevOps and AWS challenge on
                  KodeCloud** to master containerization, deployment workflows,
                  and robust cloud scaling solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}