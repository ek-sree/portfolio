"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Navbar from "./Navbar";
import TypewriterEffect from '../components/utils/TypewriterEffect';
import About from "./About";
import { BackgroundBeams } from "./ui/background-beams";

const Home = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div>
          <Navbar />
        </div>
        <div className="text-center text-white">
          <h1 className="text-2xl bg-gradient-to-r from-gradient-rose to-gradient-blue bg-clip-text text-transparent">
            Hello! my name is,
          </h1>
          <h5 className="text-6xl font-mono">Sreehari E K</h5>
          <h3>
            I am a <TypewriterEffect words={["Developer", "Designer"]} />
          </h3>
        </div>
      </BackgroundBeamsWithCollision>
      <div className="">
        <BackgroundBeams className="" />
        <div className="relative z-10">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;