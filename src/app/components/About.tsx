"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import aboutImg from '../../public/a5a7f018cf7942eda56841879934f318.jpeg'
import { motion, useScroll } from 'framer-motion';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "0.5 0"]
  });

  return (
    <motion.div ref={ref} style={{ scale: scrollYProgress, opacity: scrollYProgress }}>
      <div className='flex flex-col md:flex-row items-center justify-between mt-10'>
        <div className='md:w-1/3 w-full md:ml-12 text-left'>
          <h1 className='text-5xl mb-3 text-indigo-400 underline'>About Me!</h1>
          <div className='leading-7 font-serif font-semibold text-slate-200'>
            <p className='mb-3'>
              I&apos;m Sreehari, a passionate Full Stack Developer. I enjoy creating scalable web applications that deliver seamless user experiences...
            </p>
            <p>
              With a strong focus on modern technologies and best practices, I continuously work to improve my skills...
            </p>
          </div>
        </div>
        <div className='md:w-1/2 w-full mt-5 md:mt-0 md:mr-12'>
          <Image src={aboutImg} alt='fullstack developer' className='rounded-lg' />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
