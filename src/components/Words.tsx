"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface WordsProps {
  value: string;
}

function Paragraph({ value }: WordsProps) {
  const element = useRef(null);
  const { scrollYProgress }: any = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      className="text-justify px-10 font-semibold text-gray-100 text-md md:text-5xl flex flex-wrap leading-none"
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default Paragraph;

const Word = ({ children, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-[12px] pt-[12px] relative">
        <span className="shadow-xl absolute opacity-50">
            {children}
        </span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
