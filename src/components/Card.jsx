"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { titleVariants4 } from "./Animations";

const Card = ({ i, title, icon, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  // console.log(imageScale);
  // const size = i * 25;

  // const icons = i;

  // icons.map((src) => {
  // console.log(i);
  // });
  return (
    <div ref={container} className="sticky top-0">
      <div className={`h-[100vh] flex items-center justify-center`}>
        <motion.div
          style={{ scale, top: `calc(-5% + ${i * 40}px)` }}
          className={`${color}  w-[370px] h-[620px] md:w-[550px] lg:w-[1300px] lg:h-[650px] 
          rounded-3xl relative shadow-2xl border border-slate-800`}
        >
          <div className="">
            <motion.h2
              variants={titleVariants4}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="clipath flex justify-center items-center pt-10 font-marvel text-opacity-80 text-3xl lg:text-4xl text-slate-800"
            >
              {title}
            </motion.h2>
            <hr className="mx-10 lg:mx-32 mt-5 border-black" />
            <div className="flex flex-wrap justify-evenly lg:justify-center items-center px-2 py-2 mt-2 lg:px-20 lg:py-16 lg:mt-2">
              {icon.map((src, i) => {
                return (
                  <motion.div
                    style={{
                      opacity: scrollYProgress,
                      // scale: imageScale
                    }}
                    key={i}
                    className="lg:w-40 lg:px-5 lg:mt-0 w-[75px] mx-5 mt-5 transform-gpu"
                  >
                    <img src={Object.values(src.src)} />
                    <p className="lg:text-2xl text-l justify-center font-marvel text-center items-center flex p-2 lg:p-5 text-slate-900">
                      {src.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className="h-[100vh] flex items-center justify-center">
        <div className="w-[1000px] h-[500px] bg-[#977F6D]">
          <div>
            <h2 className="flex justify-center items-center">
              Bathroom and Laundry
            </h2>
            <img src={shampoo}></img>
            <p>Shampoo</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
