import hirehub1 from '../public/hirehub1.png'
import hirehub2 from '../public/hirehub2.png'
import hirehub3 from '../public/hirehub3.png'
import hirehub4 from '../public/hirehub4.png'
import hirehub5 from '../public/hirehub5.png'
import hirehub6 from '../public/hirehub6.png'
import hirehub from '../public/hirehub.png'
import hirehub7 from '../public/hirehub7.png'
import hirehub8 from '../public/hirehub8.png'
import hirehub9 from '../public/hirehub9.png'
import hirehub10 from '../public/hirehub10.png'
import hirehub11 from '../public/hirehub11.png'
import hirehub12 from '../public/hirehub12.png'
import hirehub13 from '../public/hirehub13.png'
import hirehub14 from '../public/hirehub14.png'
import hirehub15 from '../public/hirehub15.png'
import hirehub16 from '../public/hirehub16.png'

import timezone from '../public/timezone/1.png'
import timezone1 from '../public/timezone/2.png'
import timezone2 from '../public/timezone/3.png'
import timezone3 from '../public/timezone/4.png'
import timezone4 from '../public/timezone/5.png'
import timezone5 from '../public/timezone/6.png'
import timezone6 from '../public/timezone/7.png'
import timezone7 from '../public/timezone/8.png'
import timezone8 from '../public/timezone/9.png'
import timezone9 from '../public/timezone/10.png'
import timezone10 from '../public/timezone/11.png'
import timezone11 from '../public/timezone/12.png'
import timezone12 from '../public/timezone/13.png'
import timezone13 from '../public/timezone/14.png'
import timezone14 from '../public/timezone/15.png'
import timezone15 from '../public/timezone/16.png'
import timezone16 from '../public/timezone/17.png'
import timezone17 from '../public/timezone/18.png'
import timezone18 from '../public/timezone/19.png'

import aadharOCR from '../public/AAdharOCR/Screenshot (290).png'
import aadharOC1 from '../public/AAdharOCR/aadharocr2.png'

import netflixGpt1 from '../public/netflixgpt/1.png'
import netflixGpt2 from '../public/netflixgpt/2.png'
import netflixGpt3 from '../public/netflixgpt/3.png'
import netflixGpt4 from '../public/netflixgpt/4.png'
import netflixGpt5 from '../public/netflixgpt/5.png'

import olx1 from '../public/olk-clone/1.png'
import olx2 from '../public/olk-clone/2.png'
import olx3 from '../public/olk-clone/3.png'

import todo1 from '../public/todo/todo1.png'
import todo2 from '../public/todo/todo2.png'

export const data = [
    {
      id: 1,
      title: "Hirehub",
      description: "A job seeking application",
      details:"Developed a comprehensive job portal using React, Tailwinf CSS, Typescript, Redux, Node.js, Express.js, MongoDB, Leveraged microservice architecture with RabbitMq for messaging and gRPC for service communication. The client interact with API gateway, which route request to various services.",
      features:["Implemented features such as infinity scrolling, search debouncing, video calls using WebRTC, real-time chat and notification for likes on post.",
        "Enable users to upload and manage CVs, apply for jobs, and recruiters to post the jobs and manage applicants",
        "Develop admin functionalities for block/unblock users and recruites, and delete reported posts.",
        "Ensure security authentication and authorization using JWT",
        "Utilized clean architecture principle for maintainable and scalable code"
      ],
      technology: ["React", "Express", "Mongodb","Typescript","Redux","Tailwind","RabbitMQ","gRPC","Socket","WebRTC","Docker","Kubernetes","JWT","S3","CI/CD","CloudFront","Digital Ocean"],
      architecture:["Microservice", "clean architecture"],
      github:'https://github.com/ek-sree/HireHub_client.git',
      images:[hirehub1, hirehub2,hirehub3,hirehub4,hirehub5,hirehub6,hirehub,hirehub7,hirehub8,hirehub9,hirehub10,hirehub11,hirehub12,hirehub13,hirehub14,hirehub15,hirehub16],
      live:'https://hirehub.pro',
      link: "/projects/1", 

    },
    {
      id: 2,
      title: "TimeZone",
      description: "An E-commerce watch store",
      details:"Developed an e-commerce platform for rustic watches using Nodejs, Express and MongoDB for the backend, with EJS , CSS and Javascript for the frontend. Deployed on AWS with Ngnix for scalability and realiability",
      features:["Design interactive views using EJS, enhancing the user interface,",
        "Using Nodemailer for secure user email verification",
        "Integrated multer for seamless image uploads",
        "Implemented online payments using Razorpay for secure transaction"
      ],
      technology: ["Ejs", "Express", "Mongodb","Razorpay","multer","Nodemailer","AWS","Nginx"],
      architecture:["MVC architecture"],
      github:"https://github.com/ek-sree/TimeZone.git",
      images:[timezone,timezone1,timezone2,timezone3,timezone4,timezone5,timezone6,timezone7,timezone8,timezone9,timezone10,timezone11,timezone12,timezone13,timezone14,timezone15,timezone16,timezone17,timezone18],
      live:"https://thetimezone.official",
      link: "/projects/2",
    },
    {
      id: 3,
      title: "Aadhar OCR",
      description: "OCR system for parsing Aadhar details",
      details: "An Aadhar OCR application where users upload both front and back side images of their Aadhar card, and the system parses the images to extract details like Name, Aadhar Number, Date of Birth, Gender, and Address. The frontend is built using React and TypeScript, while the backend uses Node.js with Express, Tesseract for OCR parsing, and security measures like rate-limiting and Helmet.",
      features: [
        "Upload both front and back images of the Aadhar card.",
        "Parse Aadhar card details such as Name, Aadhar Number, Date of Birth, Gender, and Address using Tesseract.js.",
        "Front-end and back-end validation to ensure valid images are uploaded and proper responses are provided.",
        "Implemented security features using rate limiter and Helmet.js to prevent abuse and enhance security.",
        "Provided user-friendly error messages for failed parsing or incorrect image uploads."
      ],
      technology: ["React", "Typescript", "Express", "Tesseract.js", "Helmet.js", "Rate Limiter", "Tailwind CSS", "Multer"],
      architecture: ["REST API architecture"],
      github: 'https://github.com/ek-sree/aadhaar-orc.git',
      images: [aadharOCR, aadharOC1], 
      link: "/projects/3",
    },
    {
      id: 4,
      title: "Netflix GPT",
      description: "A Netflix clone with integrated AI for movie recommendations",
      details: "Developed a Netflix clone that includes AI-powered movie recommendations based on user search queries. Users can search for movies (e.g., 'funny Indian movies'), and the integrated OpenAI GPT will provide personalized movie suggestions. The platform features user authentication using Firebase, a dynamic movie database, and interactive movie trailers.",
      features: [
        "Integrated OpenAI GPT for personalized movie recommendations based on user search queries.",
        "Firebase authentication and Firestore for storing movie data.",
        "Custom hooks for fetching and displaying movie trailers and top-rated/popular movies.",
        "User sign-in and sign-up functionality using Firebase.",
        "State management using Redux for handling movie and user data.",
        "Implemented multi-language support, allowing users to switch between English, Malayalam, and Hindi, with dynamic text content based on the selected language."
      ],
      technology: ["React", "Firebase", "Redux", "OpenAI API", "Tailwind CSS", "Firestore"],
      architecture: ["Component-based architecture"],
      github: "https://github.com/ek-sree/netflix-gpt.git",
      images: [netflixGpt1, netflixGpt2, netflixGpt3, netflixGpt4, netflixGpt5],
      link: "/projects/4",
    },    
      {
        id: 5,
        title: "OLX Clone",
        description: "An OLX clone where users can buy and sell products.",
        details: "Built an OLX clone with features like user authentication, product listing with images, price, and category. Users can log in, upload products for sale, and browse listings by category. Firebase is used for authentication, Firestore for data management, and Context API for state management.",
        features: [
        "User authentication using Firebase for signup and login.",
        "Product listing where users can upload product images, name, price, and select category.",
        "State management with Context API to manage the user session and product listings.",
        "Real-time updates on product listing via Firestore.",
        "Integrated Firebase storage to handle product image uploads."
      ],
        technology: ["React", "Firebase", "Firestore", "Context API"],
        architecture: ["Component-based architecture"],
        github:"https://github.com/ek-sree/olx-clone-react.git",
        images:[olx1,olx2,olx3],
        link: "/projects/5",
      },
      {
        id: 6,
    title: "Todo App",
    description: "A Todo application using React and localhost.",
    details: "Developed a Todo application that enables users to manage their tasks effectively. Features include adding new tasks, editing existing tasks, marking tasks as completed, and deleting tasks. The app persists data using local storage, ensuring that tasks remain available even after refreshing or closing the page.",
    features: [
        "Add new tasks with a user-friendly interface.",
        "Edit tasks with inline editing functionality.",
        "Mark tasks as complete with a single click.",
        "Delete tasks and manage the list dynamically.",
        "Persist data using local storage, allowing tasks to stay after page reloads or closing the browser."
    ],
    technology: ["React", "Local Storage", "CSS"],
    architecture: ["Component-based architecture"],
        github:"https://github.com/ek-sree/react-todo.git",
        images:[todo1,todo2],
        link: "/projects/6",
      },
      {
        id: 7,
        title: "TimeZone",
        description: "A watch store",
        technology: "ejs, express, mongodb",
        link: "/projects/7",
      },
      {
        id: 8,
        title: "TimeZone",
        description: "A watch store",
        technology: "ejs, express, mongodb",
        link: "/projects/8",
      },
  ];
  