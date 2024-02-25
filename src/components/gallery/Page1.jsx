"use client";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Magnetic from "../Magnetic/index";
import FullGallery from "./FullGallery";

const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
];

function Page() {
  const container = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.9]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  //   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4]);
  useEffect(() => {
    // const lenis = new Lenis();

    // function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    // requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="main">
      {/* <div className="h-[100vh]"></div> */}
      <div
        ref={container}
        className="w-[370px] xsm:w-[400px] md:h-[100vh] md:w-full relative flex gap-[2vw]
         p-[2vw] mb-10 box-border overflow-hidden xsm:m-2 md:m-0 transform-gpu"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        {/* <Column images={[images[9], images[10], images[11]]} y={y4} /> */}
        <div
          className="lg:flex lg:flex-1 justify-center items-center p-10
         font-logo1 w-30 relative lg:right-0 lg:top-0 xsm:right-[31.5rem] xsm:top-[18rem] right-[29rem] "
        >
          <Magnetic>
            <button
              className="rounded-3xl border-2 border-black p-5
             bg-yellow-200 hover:bg-emerald-400 m-18.5 text-3xl"
            >
              <a href="/">View Gallery</a>
            </button>
          </Magnetic>
        </div>
      </div>
      {/* <div className="h-[100vh]"></div> */}
    </main>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div
      className="relative w-[10%] h-[80%] min-w-[175px] xsm:min-w-[190px] md:h-[180%]
       md:w-[20%] md:min-w-60 flex flex-col gap-[2vw]
       lg:[&>*:nth-child(1)]:top-[-45%]
       lg:[&>*:nth-child(2)]:top-[-45%]
       lg:[&>*:nth-child(3)]:top-[-45%]
       [&>*:nth-child(1)]:top-[-460px]
       [&>*:nth-child(2)]:top-[-420px]
       [&>*:nth-child(3)]:top-[-380px]"
      // [&>*:nth-child(4)]:top-[-60%]"
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="h-[100%] w-[100%] lg:w-[80%] relative rounded-lg overflow-hidden"
          >
            <img
              src={`/images/${src}`}
              alt="image"
              fill="true"
              className="object-cover h-full"
            />
          </div>
        );
      })}
      ;
    </motion.div>
  );
};
export default Page;
