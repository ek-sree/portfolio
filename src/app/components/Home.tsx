"use client";

import React, { useRef } from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Navbar from "./Navbar";
import TypewriterEffect from '../components/utils/TypewriterEffect';
import About from "./About";
import { BackgroundBeams } from "./ui/background-beams";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

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
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection}  />
      <section ref={sectionRefs.home} className="h-screen flex items-center justify-center">
        <BackgroundBeamsWithCollision>
          <div className="text-center text-white">
            <h1 className="text-2xl bg-gradient-to-r from-gradient-rose to-gradient-blue bg-clip-text text-transparent">
              Hello! my name is,
            </h1>
            <h2 className="text-6xl font-mono">Sreehari E K</h2>
            <h3>
              I am a <TypewriterEffect words={["Developer", "Designer"]} />
            </h3>
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