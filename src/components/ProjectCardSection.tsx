"use client";
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";


function ProjectCardSection() {
  const element = useRef(null);
  const { scrollYProgress }: any = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.div
      className="px-10"
      ref={element}
      style={{opacity: scrollYProgress}}
    >
      <ProjectCard/>
    </motion.div>
  );
}

export default ProjectCardSection;
