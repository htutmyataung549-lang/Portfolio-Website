"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, X, BookOpen, CheckCircle2 } from "lucide-react";

interface Note {
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  content: string[]; // Modal ထဲမှာ ပြမယ့် အသေးစိတ် မှတ်စုများ
  tags: string[];
}

const BLOG_NOTES: Note[] = [
  {
    title: "100 Days of KodeKloud DevOps: Containers & Kubernetes",
    category: "DevOps",
    date: "2026",
    readTime: "5 min read",
    description:
      "My hands-on journey and daily learning notes covering containerization with Docker, pod orchestration, and infrastructure deployment.",
    content: [
      "Deep dive into Docker images, layers, and multi-stage builds for minimal container sizes.",
      "Configuring Kubernetes Pods, Deployments, and Cluster Services.",
      "Setting up persistent volumes, ingress routing, and config maps for production apps.",
    ],
    tags: ["Docker", "Kubernetes", "DevOps"],
  },
  {
    title: "Mastering Harvard CS50: From C to Data Structures",
    category: "Computer Science",
    date: "Aug 2026",
    readTime: "8 min read",
    description:
      "A comprehensive reflection on completing Harvard's CS50 curriculum, mastering low-level memory management, algorithms, and core problem sets.",
    content: [
      "Understanding memory allocation, pointers, and stack vs heap in C.",
      "Implementing fundamental data structures: Hash Tables, Linked Lists, and Binary Trees.",
      "Algorithmic complexity (Big O notation) and problem-solving patterns.",
    ],
    tags: ["C", "Algorithms", "Data Structures"],
  },
  {
    title: "Building Enterprise Backends with Spring Boot & MyBatis",
    category: "Backend Architecture",
    date: "2026",
    readTime: "6 min read",
    description:
      "Architectural patterns and best practices for structuring robust controllers, services, and secure database mapping in enterprise applications.",
    content: [
      "Layered architecture: Controllers, Services, Mapper interfaces, and DTOs.",
      "Configuring MyBatis XML mappers and SQL dynamic queries.",
      "Spring Security implementation with role-based access control (RBAC).",
    ],
    tags: ["Spring Boot", "Java", "PostgreSQL"],
  },
];

export default function TechBlog() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <section
      id="blog"
      className="w-full py-12 sm:py-24  bg-background border-y border-foreground/10 transition-colors duration-300 relative overflow-hidden"
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
            Tech Blog & Notes
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            Sharing my learning notes, DevOps milestones, and software engineering insights.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_NOTES.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedNote(post)}
              className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-background hover:shadow-xl dark:hover:shadow-blue-950/30 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70 border border-foreground/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Read More Link */}
              <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>

    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
  Read Note <ArrowRight className="w-4 h-4" />
</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedNote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-background border border-foreground/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground rounded-full hover:bg-foreground/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                  {selectedNote.category}
                </span>
                <span className="text-xs text-foreground/60">• {selectedNote.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                {selectedNote.title}
              </h3>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6 border-b border-foreground/10 pb-4">
                {selectedNote.description}
              </p>

              {/* Key Takeaways / Content */}
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Key Topics & Takeaways:
              </h4>
              
              <ul className="space-y-2.5 mb-6">
                {selectedNote.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/70">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-foreground/10">
                {selectedNote.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/70 border border-foreground/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}