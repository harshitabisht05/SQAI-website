'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneIcon, UserIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-16 transition-colors duration-300">
      <motion.div 
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-green-600 mb-2">How can we help you?</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get in touch with us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Have questions, ideas, or want to collaborate with us? We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>

          <div className="space-y-6">
            <motion.div className="flex items-center" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5, duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <UserIcon className="h-5 w-5 text-pink-500 mr-3" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Nizaul Rahman</p>
                <p className="text-gray-700 dark:text-gray-300">+91 91937 00777</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7, duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <UserIcon className="h-5 w-5 text-pink-500 mr-3" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Sahil Beniwal</p>
                <p className="text-gray-700 dark:text-gray-300">+91 99966 79259</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.9, duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <LinkIcon className="h-5 w-5 text-blue-500 mr-3" />
              <Link
                href="https://www.linkedin.com/company/quality-ai-io/"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Sentienta QualityAI on LinkedIn
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/Contactus.gif"
            alt="Contact Illustration"
            className="w-150 h-auto"
          />
        </motion.div>
      </motion.div>

    
    </section>
  );
}
