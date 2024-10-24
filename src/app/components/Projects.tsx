import { data } from "@/constant/projects";
import { HoverEffect } from "./ui/card-hover-effect";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [show, setShow] = useState(6);

  const handleShowMore = () => {
    setShow((prev) => prev + 6);
  };

  const projects = data.map(({ id, title, description }) => ({
    title,
    description,
    link: `/project/${id}`,
  }));

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div>
      <div className="mx-auto p-8 flex justify-center mt-9">
        <h1 className="text-4xl font-bold text-center mb-16 w-full relative">
          My Works.
          <span className="block w-1/4 h-1 bg-gradient-to-r from-indigo-500 to-transparent absolute bottom-0 top-12 left-1/2 transform -translate-x-1/2"></span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animationVariants}
        >
          <HoverEffect items={projects.slice(0, show)} />
        </motion.div>
      </div>
      {show < projects.length && (
        <div className="flex justify-center mt-7 mb-3">
          <button
            className="relative overflow-hidden border border-purple-500 hover:bg-purple-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out group"
            onClick={handleShowMore}
          >
            <span className="relative z-10 text-purple-500 group-hover:text-white transition-colors duration-300 ease-in-out">
              Show More
            </span>
            <span className="absolute inset-0 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
