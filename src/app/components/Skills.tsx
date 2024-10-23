import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import js from '../../../public/skills/images.png'
import react from '../../../public/skills/images (1).png'
import express from '../../../public/skills/images (2).png'
import next from '../../../public/skills/nextjs.png'
import mongo from '../../../public/skills/mongo.png'
import typescriipt from '../../../public/skills/Typescript.svg.png'
import html from '../../../public/skills/html.png'
import docker from '../../../public/skills/docker.png'
import github from '../../../public/skills/github.jpg'
import material from '../../../public/skills/material.jpeg'
import postman from '../../../public/skills/postman.png'
import rabbitmq from '../../../public/skills/rabbitMqq.jpg'
import redux from '../../../public/skills/redux.png'
import tailwind from '../../../public/skills/thumb.webp'
import node from '../../../public/skills/node.png'
import kube from '../../../public/skills/k.png'
import css from '../../../public/skills/css.png'
import redis from '../../../public/skills/ress.png'
import git from '../../../public/skills/gt.png'
import socket from '../../../public/skills/sckt.png'
import webrtc from '../../../public/skills/webrtc.png'
import figma from '../../../public/skills/figma.jpg'
import grpc from '../../../public/skills/grpcss.webp'
import ejs from '../../../public/skills/ejs.png'


const Skills = () => {


    const skills = [
        {
          image: js, 
        },
        {
          image: react, 
        },
        {
          image: node
        },
        {
          image: express
        },{
          image:next
        },
        {
          image:mongo
        },
        {
          image: typescriipt
        },
        {
          image: html
        },
        {
          image: docker
        },
        {
          image: kube
        },
        {
          image: css
        },
        {
          image: redis
        },
        {
          image: redux
        },
        {
          image: git
        },
        {
          image: github
        },
        {
          image: rabbitmq
        },
        {
          image: socket
        },
        {
          image: webrtc
        },
        {
          image: figma
        },
        {
          image: grpc
        },
        {
          image: material
        },
        {
          image: postman
        },
        {
          image: tailwind
        },
        {
          image: ejs
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