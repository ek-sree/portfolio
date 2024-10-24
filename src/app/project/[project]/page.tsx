"use client";

import { data } from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";
import notFound from "./not-found";
import { useRouter } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

type Props = {
  params: { project: string };
};

export default function ProjectPage({ params }: Props) {
  const router = useRouter();

  const id = Number(params.project);
  const project = data.find((pro) => pro.id === id);

  if (!project) {
    return notFound();
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mb-8">
        <button
          onClick={handleBack}
          className="group flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl 
          transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Go Back</span>
        </button>
      </div>

      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        bg-clip-text text-transparent animate-gradient-x">
          {project.title}
        </h1>
        <p className="text-md sm:text-lg text-slate-400 italic">
          {project?.description}
        </p>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="mt-10 sm:mt-16 flex justify-center gap-6 flex-wrap">
        <Link
          href={project.github}
          className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-500 hover:to-indigo-300 
          py-2.5 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          <span>GitHub</span>
        </Link>
        {project.live && (
          <Link
            href={project.live}
            className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 
            py-2.5 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Live Demo</span>
          </Link>
        )}
      </div>

      <div className="mt-16 sm:mt-20">
        <h3 className="text-xl font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 
        after:bg-gradient-to-r after:from-indigo-500 after:to-transparent after:bottom-0 after:left-0">
          Technologies Used
        </h3>
        {project.technology && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {project.technology.map((tech, index) => (
              <div
                key={index}
                className="text-sm bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 
                text-white py-2 px-4 rounded-xl text-center overflow-hidden hover:scale-105 transition-transform duration-300
                hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16 sm:mt-20">
        <h3 className="text-xl font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 
        after:bg-gradient-to-r after:from-purple-500 after:to-transparent after:bottom-0 after:left-0">
          Architecture Used
        </h3>
        {project.architecture && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architecture.map((arch, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 
                text-white py-3 px-4 rounded-xl text-center overflow-hidden hover:scale-105 transition-transform duration-300
                hover:shadow-lg hover:shadow-purple-500/10"
              >
                {arch}
              </div>
            ))}
          </div>
        )}
      </div>

      {project.features && (
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 
          after:bg-gradient-to-r after:from-pink-500 after:to-transparent after:bottom-0 after:left-0">
            Features
          </h3>
          <ul className="ml-8 md:ml-16 space-y-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-slate-300 text-lg flex items-start gap-2 group"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-xl
                transition-transform duration-300 group-hover:scale-125">
                  •
                </span>
                <span className="group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 
        after:bg-gradient-to-r after:from-indigo-500 after:to-transparent after:bottom-0 after:left-0">
          Screenshots
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <Link key={index} href={`/project/${id}/image/${index}`}>
              <div className="relative w-full h-64 sm:h-72 lg:h-80 group rounded-xl overflow-hidden 
              border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300
              hover:shadow-xl hover:shadow-indigo-500/10">
                <Image
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  src={image.src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center pb-6">
                  <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 
                  transition-transform duration-300">
                    Click to Expand
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}