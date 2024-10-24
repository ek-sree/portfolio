"use client";

import Image from 'next/image';
import React, { Suspense } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const ImageLoader = () => (
  <div className="w-full h-[400px] bg-gray-800/30 animate-pulse rounded-xl border border-gray-700/50" />
);

const AboutText = React.memo(() => {
  return (
    <div className='space-y-6 text-gray-300 font-fontPara text-lg'>
      <p className='leading-relaxed'>
        I&apos;m Sreehari, a passionate Full Stack Developer with a keen eye for creating 
        scalable web applications that deliver seamless user experiences. My journey in 
        web development has been driven by curiosity and a constant desire to innovate.
      </p>
      <p className='leading-relaxed'>
        With a strong focus on modern technologies and best practices, I continuously 
        work to improve my skills and stay at the forefront of web development trends. 
        I believe in writing clean, maintainable code that makes a difference.
      </p>
      
      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-4 text-white">Technical Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Node.js","Express.js","docker", "kubenetes", "MongoDB"].map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-gray-800/30 rounded-xl border border-gray-700/50
                hover:border-indigo-500/50 transition-all duration-300
                hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

AboutText.displayName = 'AboutText';

const About = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <LazyMotion features={domAnimation} strict>
        <div className='max-w-7xl mx-auto p-8'>
          <h1 className='text-4xl font-bold text-center mb-16 inline-block relative w-full
              after:content-[""] after:absolute after:w-1/4 after:h-1 
              after:bg-gradient-to-r after:from-indigo-500 after:to-transparent 
              after:-bottom-4 after:left-1/2 after:-translate-x-1/2'>
              About Me
          </h1>

          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <m.div
              className='lg:w-1/2 w-full'
              initial="hidden"
              whileInView="visible"
              variants={animationVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="backdrop-blur-sm bg-gray-800/30 p-4 rounded-2xl shadow-2xl 
                  border border-gray-700/50 hover:border-gray-600/50 
                  transition-all duration-300">
                <Suspense fallback={<ImageLoader />}>
                  <Image
                    src="/a5a7f018cf7942eda56841879934f318.jpeg"
                    alt='fullstack developer'
                    width={600}
                    height={400}
                    className='rounded-xl'
                    loading="lazy"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0hIyEiISMhISMiIyIiIiMiIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Suspense>
              </div>
            </m.div>

            <m.div
              className='lg:w-1/2 w-full'
              initial="hidden"
              whileInView="visible"
              variants={animationVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-2xl shadow-2xl 
                  border border-gray-700/50 space-y-6 hover:border-gray-600/50 
                  transition-all duration-300">
                <AboutText />
              </div>
            </m.div>
          </div>
        </div>
      </LazyMotion>
    </Suspense>
  );
};

About.displayName = 'About';

export default React.memo(About);