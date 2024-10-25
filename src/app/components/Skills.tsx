import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { skills } from '@/constant/skills';


const Skills = () => {

  const data =  skills

      return (
        <div className="relative min-h-[40rem] w-full bg-gradient-to-b from-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:4rem_4rem] opacity-20" />
          
          <div className="absolute -top-40 -left-40 h-80 w-80 bg-emerald-500 rounded-full blur-[100px] opacity-20" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-blue-500 rounded-full blur-[100px] opacity-20" />
          
          <div className="relative px-4 py-16 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-500 font-fontTitle inline-block">
                Technical Skills
              </h1>
              <div className="h-1 w-24 bg-emerald-500 mx-auto mt-4 rounded-full" />
            </div>
    
            <div className="relative">
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
              
              <div className="py-8">
                <InfiniteMovingCards
                  items={data}
                  direction="right"
                  speed="slow"
                />
              </div>
            </div>
    
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-20" />
          </div>
        </div>
      );
    };

export default Skills