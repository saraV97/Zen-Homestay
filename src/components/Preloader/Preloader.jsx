"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];
// const colors = [
//   "#F1F0E8",
//   "#F5E8DD",
//   "#E9B384",
//   // "Olà",
//   // "やあ",
//   // "Hallå",
//   // "Guten tag",
//   // "Hallo",
//   // "Welcome",
// ];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve1 = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-[100vh] w-[100vw] flex justify-center items-center fixed z-[98] bg-slate-800"
      //   bg-[#dadbb6]
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="flex text-white text-5xl absolute z-[99]"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <span className="block w-3 h-3 bg-yellow-200 rounded-full mr-[10px] pt-10 "></span>
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              className="fill-slate-800 "
              variants={curve1}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
