"use client";

import { data } from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";
import notFound from "./not-found";
import { useRouter } from "next/navigation";

type Props = {
  params: { project: string };
};

export default function ProjectPage({ params }: Props) {

  const router = useRouter()

  const id = Number(params.project);
  const project = data.find((pro) => pro.id === id);

  if (!project) {
    return notFound();
  }

  const handleBack = ()=>{
    router.back()
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mb-4">
        <button
         onClick={handleBack}
          className="bg-neutral-400 text-sm p-2 rounded-xl hover:bg-neutral-500"
        >
          Go Back
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl flex justify-center font-bold bg-gradient-to-r from-gradient-rose to-gradient-blue bg-clip-text text-transparent mb-6 sm:mb-8">
        {project.title}{" "}
        <span className="text-md sm:text-lg text-slate-400">({project?.description})</span>
      </h1>

      <div className="mt-10 sm:mt-20 flex justify-center gap-4 flex-wrap">
        <Link
          href={project.github}
          className="bg-indigo-500 hover:bg-indigo-400 py-2 px-4 rounded-lg"
        >
          GitHub
        </Link>
        {project.live &&(<Link
          href={project.live}
          className="bg-purple-600 hover:bg-purple-700 py-2 px-5 rounded-lg"
        >
          Live
        </Link>)}
      </div>

      <div className="mt-10 sm:mt-20">
        <h3 className="text-xl font-semibold underline">Technologies Used:</h3>
        {project.technology && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
            {project.technology.map((tech, index) => (
              <div
                key={index}
                className="bg-green-500 text-white py-2 px-4 rounded-md text-center overflow-hidden"
              >
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 sm:mt-20">
        <h3 className="text-xl font-semibold underline">Architecture Used:</h3>
        {project.architecture && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {project.architecture.map((arch, index) => (
              <div
                key={index}
                className="bg-slate-500 text-white py-2 px-4 rounded-md text-center overflow-hidden"
              >
                {arch}
              </div>
            ))}
          </div>
        )}
      </div>

      {project.features && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold underline">Features:</h3>
          <ul className="ml-8 md:ml-16 mt-4 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-slate-300 text-lg">
                <span className="text-indigo-500">*</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10">
        <h3 className="text-xl font-semibold underline">Screenshots:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {project.images.map((image, index) => (
            <Link key={index} href={`/project/${id}/image/${index}`}>
              <div className="relative w-full h-64 sm:h-72 lg:h-80 group overflow-hidden">
                <Image
                  className="object-cover"
                  src={image.src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex justify-center items-center">
                  <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    Click to Show
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
