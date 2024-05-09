"use client"
import React from "react";
import SplitCharText from "@/utils/SplitCharText";
import { motion } from "framer-motion";

const name = "Alief";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function Heading() {
  const nameChars = SplitCharText(name);
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 1 }}
        className="text-[7rem] md:text-[12rem] uppercase text-[#35353D] text-stroke-3 tracking-widest opacity-70"
      >
        {nameChars.map((char: string, index: number) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{ duration: 1 * index }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default Heading;
