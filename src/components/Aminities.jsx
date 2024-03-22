"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { projects } from "./CardData";
import { motion, useScroll } from "framer-motion";
import { titleVariants1, titleVariants2 } from "./Animations";

const Aminities = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} id="aminities" className="mt-[10vh] relative mb-10">
      <motion.div
        variants={titleVariants1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center font-marvel items-center font-semibold text-7xl"
      >
        Aminities
      </motion.div>
      <motion.h1
        variants={titleVariants2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="m-0 mt-[20px] font-marvel text-opacity-5 font-medium leading-[2vw]  text-4xl flex justify-center items-center"
      >
        What we have !
      </motion.h1>
      <motion.div
        variants={titleVariants2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-center underline
      items-centerfont-semibold text-2xl lg:text-4xl font-marvel pt-5 text-slate-800 "
      >
        Spacious Two-Bedroom Getaway
      </motion.div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            {...project}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Aminities;
