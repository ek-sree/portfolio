import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import js from '../../public/images.png'

const Skills = () => {


    const skills = [
        {
          image: js, 
        },
        {
          image: js, 
        },
        {
          image: js,
        },
      ]




  return (
  
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className='text-3xl text-fuchsia-600 border-b-2 mb-11'>Skills</h1>
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="slow"
        />
        </div>
  )
}

export default Skills