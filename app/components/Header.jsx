'use client';
import {useState} from 'react';
import Link from 'next/link';
import {motion,AnimatePresence} from 'framer-motion';
import {Moon,Sun,Menu,X}from 'lucide-react';

export default function Header() {
  const[isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
  const[isDarkMode,setIsDarkMode]=useState(false);
  const toggleMobileMenu=()=>setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode=()=>{
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark',!isDarkMode);
  };
  const navItems=[
    {name :'Home', href: '#home'},
    {name :'About Us', href: '#about'},
    {name :'Mission', href: '#mission'},
    {name :'Solutions', href: '#solutions'},
    {name: 'Contact', href: '#contact'},

  ];
  return(
    <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <div className="text-xl font-bold font-eurostile text-gray-900 dark:text-white">
          Sentienta QualityAI
        </div>
        {/*Desktop Navigation*/}
        <nav className="hidden md:flex space-x-6 font-condensed">
          {navItems.map((item)=>(
            <a key={item.name}
               href={item.href}
               className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.name}
               </a>
          ))}
        </nav>
        {/*Buttons*/}
        <div className="flex items-center space-x-4">
          {/*Dark Mode Toggle*/}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          {/*Mobile Menu Button*/}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="md:hidden text-gray-700 dark:text-gray-200">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
      {/*Mobile Navigation*/}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{height:0}}
            animate={{height:'auto'}}
            exit={{height:0}}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item)=>(
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-condensed transition-colors"
                  onClick={()=>setIsMobileMenuOpen(false)}
                >
                  {item.name}

                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
