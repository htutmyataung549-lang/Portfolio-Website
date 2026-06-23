import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="w-full bg-background border-t border-foreground/10 py-6 text-center transition-colors duration-300">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Copyright*/}
          <p className="text-xs text-foreground/50 order-2 sm:order-1">
            © {new Date().getFullYear()} Dev.Porto. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
