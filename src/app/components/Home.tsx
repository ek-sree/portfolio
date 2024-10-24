"use client";

import React, { useRef } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { BackgroundBeams } from "./ui/background-beams";
import Navbar from "./Navbar";
import TypewriterEffect from '../components/utils/TypewriterEffect';
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Resume from "./Resume";
import { motion } from "framer-motion";

const Home = () => {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: 'home' | 'about' | 'projects' | 'skills' | 'contact') => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="mb-9">

      <Navbar scrollToSection={scrollToSection} />
      </div>
      
      <section ref={sectionRefs.home} className="h-screen relative overflow-hidden">
        <BackgroundBeamsWithCollision>
          <div className="absolute top-4 right-4 z-20">
            <Resume />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 max-w-4xl px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <p className="text-lg font-light tracking-wider text-gray-400 mb-10">
                  Hello! my name is
                </p>
                <h1 className="text-7xl font-bold font-mono bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-2">
                  Sreehari E K
                </h1>
                <div className="text-2xl font-light tracking-wide">
                  I am a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    <TypewriterEffect words={["Developer", "Designer"]} />
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8"
              >
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Crafting digital experiences through elegant code and creative design
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex justify-center gap-4 mt-8"
              >
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium 
                    hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 mb-10"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 rounded-full border border-gray-500 text-gray-300 font-medium
                    hover:border-purple-500 hover:text-purple-400 transition-all duration-300 mb-10"
                >
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      <section ref={sectionRefs.about} className="min-h-screen relative">
        <BackgroundBeams className="absolute inset-0" />
        <div className="relative z-10">
          <About />
        </div>
      </section>

      <section ref={sectionRefs.projects} className="min-h-screen">
        <Projects />
      </section>

      <section ref={sectionRefs.skills} className="min-h-screen">
        <Skills />
      </section>

      <section ref={sectionRefs.contact} className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
