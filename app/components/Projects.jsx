'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function ProjectSection() {
  const translations = [
    "PROJECT", "PROJEKT", "PROYECTO", "PROJET", "ПРОЕКТ", "プロジェクト",
    "项目", "مشروع", "PROGETTO", "PROJETO", "परियोजना", "โครงการ"
  ];

  const projects = [
    {
      title: "AI Invoice & Document Parser for MSMEs",
      description:
        "Helps small businesses extract key data from invoices (like vendor, GST, amount) using OCR + AI and export it to Excel or Google Sheets. Supports offline use.",
      image: "/images/project-sample.jpg",
    },
    {
      title: "Meeting Summarizer + Action Tracker",
      description:
        "Automatically records, transcribes, and summarizes meetings. Extracts action items and sends reminders via WhatsApp, Notion, Slack, etc. Works in Hindi, Tamil, and English.",
      image: "/images/project-sample.jpg",
    },
    {
      title: "Contract/Legal Document Explainer",
      description:
        "Lets SMEs upload legal contracts to get simple summaries, identify risky clauses, and receive explanations in plain language (Hindi/English/Regional).",
      image: "/images/project-sample.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [typingKey, setTypingKey] = useState(0);

  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.4 });
  const isTextInView = useInView(textRef, { amount: 0.5 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % translations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isInView]);

  useEffect(() => {
    if (isTextInView) {
      setTypingKey((prev) => prev + 1);
    }
  }, [isTextInView]);

  const handlePrevious = () => {
    if (currentProjectIndex === 0) {
      setShowProjects(false);
      setAnimationKey((prev) => prev + 1);
      setTypingKey((prev) => prev + 1);
    } else {
      setCurrentProjectIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setCurrentProjectIndex((prev) => prev + 1);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-screen min-h-screen bg-white dark:bg-black overflow-hidden"
    >
      {!showProjects && (
        <div className="min-h-screen px-10 py-20 flex flex-col justify-center">
          <h1
            className="text-[140px] leading-none text-black dark:text-white"
            style={{ fontFamily: 'Eurostile' }}
          >
            OUR
          </h1>

          <AnimatePresence mode="wait">
            {isInView && (
              <motion.h1
                key={animationKey}
                className="text-[140px] leading-none italic text-[#3C4142] dark:text-[#bfcde0]"
                style={{ fontFamily: 'Eurostile' }}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                ONGOING
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="h-[150px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={translations[index]}
                className="text-[140px] leading-none text-black dark:text-white"
                style={{ fontFamily: 'Eurostile' }}
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                exit={{ y: -150 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                {translations[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div
            ref={textRef}
            className="absolute top-1/4 right-10 max-w-sm text-right text-[#3C4142] dark:text-[#bfcde0] text-lg font-semibold"
            style={{ fontFamily: 'Eurostile' }}
          >
            <TypeAnimation
              key={typingKey}
              sequence={[
                'We are currently working on three key AI projects that solve real problems for Indian users.',
                1000,
              ]}
              speed={50}
              cursor={true}
            />
          </div>

          <div className="absolute bottom-20 right-10">
            <button
              className="w-60 h-20 flex items-center justify-center rounded-full bg-transparent overflow-hidden transition-transform duration-300 hover:scale-125"
              onClick={() => setShowProjects(true)}
            >
              <AnimatePresence mode="wait">
                <motion.svg
                  key={currentProjectIndex}
                  className="w-40 h-40 text-black dark:text-white"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <path d="M 20 50 H 80 M 60 30 L 80 50 L 60 70" />
                  <path d="M 80 50 Q 95 40 100 50 Q 95 60 80 50" />
                </motion.svg>
              </AnimatePresence>
            </button>
          </div>
        </div>
      )}

      {showProjects && (
        <div className="flex flex-col justify-center items-center py-20 h-screen">
          <motion.div
            className="absolute top-10 text-center text-gray-600 dark:text-gray-300 text-lg font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: 'Eurostile' }}
          >
            Hover on project image to view details
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex}
              className="relative w-[1000px] h-[600px] rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={projects[currentProjectIndex].image}
                alt={projects[currentProjectIndex].title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2
                  className="text-white text-2xl font-bold mb-2"
                  style={{ fontFamily: 'Eurostile' }}
                >
                  {projects[currentProjectIndex].title}
                </h2>
                <p
                  className="text-white text-sm text-center px-4"
                  style={{ fontFamily: 'Eurostile' }}
                >
                  {projects[currentProjectIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-10 mt-10">
            <button
              className="w-20 h-20 flex items-center justify-center rounded-full bg-transparent hover:scale-110 transition-transform duration-300"
              onClick={handlePrevious}
            >
              <svg
                className="w-20 h-20 rotate-180 text-black dark:text-white"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M 20 50 H 80 M 60 30 L 80 50 L 60 70" />
                <path d="M 80 50 Q 95 40 100 50 Q 95 60 80 50" />
              </svg>
            </button>

            {currentProjectIndex < projects.length - 1 && (
              <button
                className="w-20 h-20 flex items-center justify-center rounded-full bg-transparent hover:scale-110 transition-transform duration-300"
                onClick={handleNext}
              >
                <svg
                  className="w-20 h-20 text-black dark:text-white"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
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
