"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import Image from "next/image";
import { Award, ExternalLink, X, Eye } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const CERTIFICATES_DATA: Certificate[] = [
  {
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "August 2026",
    image: "/docs/CS50x.png",
    credentialUrl:
      "https://certificates.cs50.io/5f5721c3-8f96-4716-9f32-a1a4c2d0c558.pdf?size=letter",
  },
  //   {
  //     title: "100 Days of KodeKloud DevOps",
  //     issuer: "KodeKloud",
  //     date: "2026",
  //     image: "/docs/devops-cert.jpg",
  //   },
  {
    title: "Web Development Foundation Class",
    issuer: "",
    date: "13/10/2024",
    image: "/docs/coder.png",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Professional React Course",
    date: "10/10/2025",
    image: "/docs/code-lab.jpg",
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="w-full py-10 sm:py-20 bg-background transition-colors duration-300 relative overflow-hidden"
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
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Licenses & Certificates
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            Recognitions and certifications from professional courses and
            rigorous training.
          </p>
        </motion.div>

        {/* 3D Swiper Carousel */}
        <div className="w-full py-6">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-full py-10"
          >
            {CERTIFICATES_DATA.map((cert, index) => (
              <SwiperSlide
                key={index}
                className="w-70 sm:w-95 md:w-112.5 bg-foreground/2 rounded-2xl border border-foreground/10 overflow-hidden shadow-xl"
              >
                <div className="relative group aspect-16/10 overflow-hidden bg-foreground/5">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Hover Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedImage(cert)}
                      className="px-4 py-2 rounded-xl bg-white/90 text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:bg-white transition"
                    >
                      <Eye className="w-4 h-4" /> View Full
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    {cert.issuer} • {cert.date}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mt-1 mb-2">
                    {cert.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-background border border-foreground/10 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 text-foreground/80 hover:text-foreground rounded-full bg-foreground/10 hover:bg-foreground/20 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-foreground mb-4 pr-10">
                {selectedImage.title} ({selectedImage.issuer})
              </h3>

              <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-foreground/10 mb-4">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain bg-black/20"
                />
              </div>

              {selectedImage.credentialUrl && (
                <div className="flex justify-end">
                  <a
                    href={selectedImage.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
