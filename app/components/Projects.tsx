'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Poster Design',
    category: 'Graphic',
    image: '/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Editorial Site',
    category: 'Web',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Type Experiments',
    category: 'Typography',
    image: '/images/project3.jpg',
  },
  {
    id: 4,
    title: 'Identity System',
    category: 'Brand',
    image: '/images/project4.jpg',
  },
];

export default function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll handler for vertical to horizontal
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const newIndex = Math.round(el.scrollLeft / window.innerWidth);
      setActiveIndex(newIndex);

      // Pause auto-scroll and restart after inactivity
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 5000);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % projects.length;
        scrollRef.current?.scrollTo({
          left: window.innerWidth * nextIndex,
          behavior: 'smooth',
        });
        return nextIndex;
      });
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="w-screen h-screen overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex w-full h-full overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-screen h-screen px-6 md:px-20 flex flex-col justify-center items-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            {index === 0 && (
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-left w-full"
              >
                PROJECTS
              </motion.h2>
            )}

            <motion.div
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-4xl overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.category}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'bg-black dark:bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
