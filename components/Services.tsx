"use client";

import { Monitor, Palette, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES_DATA = [
  {
    title: "Web Development",
    description:
      "Building fast, secure, and scalable web applications using Next.js, React, and Node.js. Experienced in handling server-side architecture, RESTful API integrations, and robust SQL/NoSQL database management.",
    icon: Monitor,
  },
  {
    title: "Web Design & UI Systems",
    description:
      "Crafting highly responsive, accessible user interfaces using Tailwind CSS and component libraries like Shadcn UI. Focused on creating intuitive layouts that provide seamless user experiences across all screen widths.",
    icon: Palette,
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Integrating modern cloud infrastructures and continuous automation pipelines. From containerization to handling workflow deployment on AWS, ensuring applications are production-ready and highly available.",
    icon: CloudLightning,
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
            What I Do
          </h2>
          <p className="text-foreground/70 text-sm">
            Combining engineering practices with clean design implementations to
            build highly performing modern web apps.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-8 rounded-2xl border border-foreground/10 bg-foreground/2 hover:bg-background hover:shadow-xl dark:hover:shadow-blue-950/30 hover:border-foreground/20 transition-all duration-300 group cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6 transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
