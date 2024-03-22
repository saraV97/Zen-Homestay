import React from "react";
import { gsap } from "gsap";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
import { motion } from "framer-motion";
import { titleVariants3 } from "./Animations";

const Home = () => {
  const ourText = new splitType(".reveal", { types: "chars" });
  const chars = ourText.chars;

  gsap.fromTo(
    chars,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      delay: 1,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: "power4.out",
    }
  );

  gsap.fromTo(
    "downsvg",
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      delay: 2,
      opacity: 1,
      duration: 2,
      ease: "power4.out",
    }
  );

  return (
    <div
      name="home"
      className="relative bg-[rgba(58,58,58,0.29)] w-full h-screen "
    >
      <div>
        <div className="w-full flex flex-col justify-center items-center mt-28 text-5xl xxs:text-6xl lg:text-[10vw] leading-[1.1] py-40 px-5">
          <span className="reveal text-center font-bold text-black opacity-70 font-grotesk clipath">
            Your Escape,{" "}
          </span>
          <div className="text-center">
            <span className="reveal text-yellow-300 font-logo1">
              Our Pleasure.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center m-5 p-5">
            <motion.p
              variants={titleVariants3}
              initial="initial"
              animate="animate"
              className=" mx-auto mb-10 max-w-25xl font-marvel text-sm xxs:text-lg text-break xs:text-base lg:text-xl text-gray-200 leading-1` "
            >
              Discover comfort, relaxation in our cozy house. Book your stay now
              and experience serenity at its finest.
            </motion.p>
          </div>
          <div className="lg:hidden flex justify-center pt-20 ">
            {/* <Magnetic> */}
            <a href="#footer">
              <button
                className=" flex justify-center items-center border rounded-xl border-slate-700 py-1 px-3
           text-slate-800  bg-gray-100 bg-opacity-80  hover:bg-emerald-400 text-xl"
              >
                <p>Call to Book</p>
              </button>
            </a>
            {/* </Magnetic> */}
          </div>
          <svg class="downsvg arrows ">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>

        {/* <div className="flex justify-end items-end">
          <a href="#footer">
            <button
              className="border-2 rounded-3xl p-4 px-10
         text-white bg-orange-400  hover:bg-orange-500 text-3xl"
            >
              <span>Call to Book</span>
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
