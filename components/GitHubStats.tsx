"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Code2 } from "lucide-react";

export default function GitHubStats() {
  const githubUsername = "htutmyataung549-lang";

  return (
    <section
      id="github-stats"
      className="w-full py-14 sm:py-24 bg-background border-b border-foreground/10 transition-colors duration-300 relative overflow-hidden"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-semibold w-fit mb-4 shadow-sm">
            <span>Code Activity & Contribution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            GitHub Contributions
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            A visual snapshot of my coding consistency and daily open-source
            activity.
          </p>
        </motion.div>

        {/* GitHub Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-foreground/10 bg-foreground/2 flex items-center gap-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">Active</h4>
              <p className="text-xs text-foreground/60 font-medium">
                Daily Commit Streak
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-foreground/10 bg-foreground/2 flex items-center gap-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">Full-Stack</h4>
              <p className="text-xs text-foreground/60 font-medium">
                Next.js & Spring Boot Repos
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl border border-foreground/10 bg-foreground/2 flex items-center gap-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">
                Open Source
              </h4>
              <p className="text-xs text-foreground/60 font-medium">
                Projects & Contributions
              </p>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contribution Graph Image Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-2xl border border-foreground/10 bg-foreground/2 shadow-xl flex flex-col items-center justify-center overflow-x-auto"
        >
          <div className="w-full flex justify-center overflow-x-auto py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/${githubUsername}`}
              alt={`${githubUsername}'s Github chart`}
              className="w-full max-w-4xl rounded-lg filter dark:invert-[0.85] dark:hue-rotate-180 transition-all duration-300"
            />
          </div>
          <p className="text-xs text-foreground/50 mt-4 text-center">
            Contributions calculated from public repositories on GitHub.
          </p>
        </motion.div>
      </div>
    </section>
  );
}