"use client";

import { User, Code2, ShieldCheck, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
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
          {/* Left Column: Brief Introduction (Slide from left/bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-background border border-foreground/10 shadow-sm space-y-4 transition-colors duration-300">
              <div className="inline-flex p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-2">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Who I Am</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                I am a passionate Full-Stack Software Developer dedicated to
                building clean, scalable, and user-centric web applications.
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                With a strong foundation in modern frontend frameworks and
                robust backend ecosystems, I bridge the gap between seamless
                user experiences and secure, production-ready underlying
                systems.
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
              className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm flex gap-4 items-start hover:shadow-md hover:bg-foreground/2 dark: transition-all duration-300"
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
              className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm flex gap-4 items-start hover:shadow-md hover:bg-foreground/2 transition-all duration-300"
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
              className="p-6 rounded-xl bg-background border border-foreground/10 shadow-sm flex gap-4 items-start hover:shadow-md hover:bg-foreground/2 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 shrink-0">
                <CloudLightning className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1">
                  Cloud Integration & Continuous Learning
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
