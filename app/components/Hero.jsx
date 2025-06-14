'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const slides = [
    {
      title: "AI With Real-World Impact",
      description: "At Sentienta QualityAI, we are committed to building AI solutions that make a real-world impact. Our goal is to apply artificial intelligence not just as a buzzword, but as a practical tool to solve urgent problems."
    },
    {
      title: "Solving Problems Across Industries",
      description: "We apply AI across healthcare, education, finance, and small business operations — driving innovation where it's needed most."
    },
    {
      title: "Beginning with MedTech",
      description: "We began by focusing on MedTech, where our AI technologies have been used for data processing, diagnostics, and automation in healthcare."
    },
    {
      title: "Expanding into AutoTech",
      description: "Using AI for used-car inspection, pricing, and financing — streamlining operations and enabling smarter decision making in the automotive sector."
    },
    {
      title: "Supporting MSMEs",
      description: "Building tools to help small businesses handle documents, contracts, and meetings — empowering MSMEs to grow efficiently."
    },
    {
      title: "Simplifying LegalTech",
      description: "Explaining complex contracts in simple, regional languages using AI — making legal information more accessible and easier to understand."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen text-gray-900 dark:text-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"

      >
        <source src="/images/video-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="relative z-20 text-center max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">{slides[currentSlide].title}</h1>
            <p className="text-xl mb-8 text-gray-200">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
