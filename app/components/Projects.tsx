'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function ProjectSection() {
  const translations = [
    "PROJECT", "PROJEKT", "PROYECTO", "PROJET", "ПРОЕКТ", "プロジェクト",
    "项目", "مشروع", "PROGETTO", "PROJETO", "परियोजना", "โครงการ"
  ];

  const projects = [
    {
      title: "QuickRide",
      description: "Real-time rental vehicle booking system with secure payments.",
      image: "https://via.placeholder.com/400x300?text=QuickRide"
    },
    {
      title: "Voice Assistant",
      description: "Web-based voice agent using Web Speech API for dynamic voice interaction.",
      image: "https://via.placeholder.com/400x300?text=Voice+Assistant"
    },
    {
      title: "Website Monitoring",
      description: "Full-stack monitoring system with real-time uptime tracking.",
      image: "https://via.placeholder.com/400x300?text=Monitoring"
    }
  ];

  const [index, setIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % translations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  const handlePrevious = () => {
    if (currentProjectIndex === 0) {
      setShowProjects(false);
      setAnimationKey(prev => prev + 1);
    } else {
      setCurrentProjectIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    setCurrentProjectIndex(prev => prev + 1);
  };

  return (
    <section ref={sectionRef} className="relative w-screen min-h-screen bg-white overflow-hidden">

      {/* Main Section */}
      {!showProjects && (
        <div className="min-h-screen bg-white px-10 py-20 flex flex-col justify-center text-bold">
          
          {/* OUR - fully static */}
          <h1
            className="text-[140px] leading-none text-black"
            style={{ fontFamily: 'eurostile' }}
          >
            OUR
          </h1>

          {/* ONGOING - animates on scroll / back */}
          <AnimatePresence mode="wait">
            {isInView && (
              <motion.h1
                key={animationKey}
                className="text-[140px] leading-none italic text-[#3C4142]"
                style={{ fontFamily: 'condensed' }}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                ONGOING
              </motion.h1>
            )}
          </AnimatePresence>

          {/* PROJECT translations */}
          <div className="h-[150px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={translations[index]}
                className="text-[140px] leading-none text-black"
                style={{ fontFamily: 'eurostile' }}
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                exit={{ y: -150 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {translations[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Main Arrow to open projects */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
            <button
              className="w-40 h-40 flex items-center justify-center rounded-full bg-transparent hover:scale-110 transition-transform duration-300"
              onClick={() => setShowProjects(true)}
            >
              <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
                <path d="M 20 50 H 80 M 60 30 L 80 50 L 60 70" />
                <path d="M 80 50 Q 95 40 100 50 Q 95 60 80 50" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {showProjects && (
        <div className="flex flex-col justify-center items-center py-20 h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex}
              className="relative w-[400px] h-[300px] rounded-xl shadow-lg overflow-hidden cursor-pointer"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gray-300 transition duration-500 hover:opacity-0"></div>

              <img
                src={projects[currentProjectIndex].image}
                alt={projects[currentProjectIndex].title}
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4 text-white text-lg font-semibold">
                {projects[currentProjectIndex].title}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="flex justify-center items-center gap-10 mt-10">
            {/* Back Arrow */}
            <button
              className="w-20 h-20 flex items-center justify-center rounded-full bg-transparent hover:scale-110 transition-transform duration-300"
              onClick={handlePrevious}
            >
              <svg className="w-20 h-20 rotate-180" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
                <path d="M 20 50 H 80 M 60 30 L 80 50 L 60 70" />
                <path d="M 80 50 Q 95 40 100 50 Q 95 60 80 50" />
              </svg>
            </button>

            {/* Next Arrow */}
            {currentProjectIndex < projects.length - 1 && (
              <button
                className="w-20 h-20 flex items-center justify-center rounded-full bg-transparent hover:scale-110 transition-transform duration-300"
                onClick={handleNext}
              >
                <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2">
                  <path d="M 20 50 H 80 M 60 30 L 80 50 L 60 70" />
                  <path d="M 80 50 Q 95 40 100 50 Q 95 60 80 50" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
