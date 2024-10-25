"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { data } from "@/constant/projects";
import notFound from "../../not-found";

type Props = {
  params: { project: string; image: string };
};

export default function ImagePage({ params }: Props) {
  const router = useRouter();
  const projectId = Number(params.project);
  const imageIndex = Number(params.image);

  const project = data.find((pro) => pro.id === projectId);
  if (!project || !project.images[imageIndex]) {
    return notFound();
  }

  const image = project.images[imageIndex];

  const handleClose = () => {    
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div onClick={handleClose} className=" cursor-pointer relative bg-white p-4 rounded-md shadow-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
        <button
          
          className="absolute top-4 right-4 text-5xl text-gray-500 hover:text-black"
        >
          &#10005;
        </button>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <Image
            src={image.src}
            alt={`${project.title} screenshot ${imageIndex + 1}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}