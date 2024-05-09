"use client";
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

interface ParagraphProps {
  value: string;
}

function Paragraph({ value }: ParagraphProps) {
  const element = useRef(null);
  const { scrollYProgress }: any = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.div
      className="text-justify px-10 font-semibold text-gray-100 text-5xl"
      ref={element}
      style={{opacity: scrollYProgress}}
    >
      {value}
    </motion.div>
  );
}

export default Paragraph;
