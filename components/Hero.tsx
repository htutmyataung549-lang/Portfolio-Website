"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="w-full pt-32 pb-20 flex flex-col justify-center min-h-[80vh] bg-background text-foreground transition-colors duration-300"
    >
      {/* Grid Wrapper */}
      <div className="max-w-5xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Htut Myat Aung
              </span>
              . <br />
            </h1>
          </motion.div>

          <p className="text-lg text-foreground/70 max-w-xl mb-8 leading-relaxed">
            I am a Junior Full-Stack Developer passionate about creating modern
            web applications and scalable infrastructure. Armed with experience
            from frontend frameworks to robust backends, I am actively bridging
            the gap between clean code and cloud automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition shadow-sm"
            >
              View My Work
            </a>

            <a
              href="/docs/resume.pdf"
              download="Htut Myat Aung_CV.pdf"
              className="border border-foreground/20 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 transition inline-flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg
                className="w-4 h-4 text-foreground/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Photo Container */}
        <div className="flex justify-center items-center w-full h-full min-h-75 md:min-h-100 relative">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-full md:h-full max-w-100 max-h-100 aspect-square relative rounded-2xl overflow-hidden shadow-xl border border-foreground/10 transition-colors duration-300">
            <Image
              src="/docs/profile.jpg"
              alt="Htut Myat Aung Profile Photo"
              fill
              priority
              className="object-cover"
              sizes="(max-w-768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
