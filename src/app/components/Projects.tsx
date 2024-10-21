import { data } from "@/constant/projects";
import { HoverEffect } from "./ui/card-hover-effect"
import { useState } from "react";

const Projects = () => {

  const [show, setShow] = useState(6);

  const handleShowMore = ()=>{
    setShow((prev)=>prev+6);
  }

  const projects = data.map(({id,title, description})=>({
    title,
    description,
    link:`/project/${id}`
  }))

      
  return (
    <div>
        <div className="flex justify-center mt-9">
        <h5 className="text-3xl border-b-2 text-purple-500">My Works.</h5>
        </div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects.slice(0, show)} />
    </div>
    {show < projects.length &&(
      <div className="flex justify-center mt-8">
        <button className="relative overflow-hidden border border-purple-500   hover:bg-purple-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out group" onClick={handleShowMore}>
          <span className="relative z-10 text-purple-500 group-hover:text-white transition-colors duration-300 ease-in-out">Show More</span>
          <span className="absolute inset-0 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </button>
      </div>
    )}
    </div>
  )
}

export default Projects