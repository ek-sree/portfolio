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
                  items={skills}
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