"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const nameArray = "Htut Myat Aung".split("");

  const characterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full pt-28 pb-20 flex flex-col justify-center min-h-[85vh] bg-background text-foreground transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid Wrapper */}
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col justify-center md:col-span-7 text-center md:text-left">
          
          {/* Small Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-semibold w-fit mb-6 shadow-sm mx-auto md:mx-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Junior Full-Stack Developer</span>
          </motion.div>

          {/* Header main container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Responsive text sizing and wrapping fix for mobile */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.2]">
              Hi, I&apos;m <br className="hidden sm:block" />
              <motion.span
                className="text-blue-600 dark:text-blue-400 inline-flex flex-wrap justify-center md:justify-start mt-1 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {nameArray.map((char, index) => {
                  if (char === " ") {
                    return <span key={index} className="inline-block w-2 sm:w-3">&nbsp;</span>;
                  }
                  return (
                    <motion.span key={index} variants={characterVariants} className="inline-block">
                      {char}
                    </motion.span>
                  );
                })}
              </motion.span>
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </h1>
          </motion.div>

          {/* Description Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-lg text-foreground/70 max-w-xl mb-8 leading-relaxed mx-auto md:mx-0"
          >
            Passionate about creating modern web applications and scalable infrastructure. 
            Bridging the gap between clean frontend experiences and robust backend systems.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg shadow-blue-600/20 flex items-center gap-2 group text-sm sm:text-base"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/docs/resume.pdf"
              download="Htut Myat Aung_CV.pdf"
              className="border border-foreground/15 bg-foreground/[0.02] hover:bg-foreground/5 text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2.5 shadow-sm text-sm sm:text-base"
            >
              <Download className="w-4 h-4 text-foreground/60" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Photo Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center md:col-span-5"
        >
          <div className="relative group">
            {/* Background Glow Ring for Photo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            {/* Main Image Wrapper */}
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 bg-background">
              <Image
                src="/docs/profile.jpg"
                alt="Htut Myat Aung Profile Photo"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}