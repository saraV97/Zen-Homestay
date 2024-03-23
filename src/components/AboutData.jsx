"use client";
import { useRef } from "react";
// import Picture1 from "../assets/4.webp";
// import Picture2 from "../assets/5.webp";
// import Picture3 from "../assets/6.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { titleVariants1, titleVariants2 } from "./Animations";

const word = "with framer-motion";

const AboutData = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: "https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108443/Zen%20Homestay/bygpzhzp4qwzj9n6bu3y.jpg",
      y: 0,
    },
    {
      src: "https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108442/Zen%20Homestay/epfqzuuqw9pdqwcv0pxs.jpg",
      y: lg,
    },
    {
      src: "https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108440/Zen%20Homestay/vbydz6pzzaksupigbnbg.jpg",
      y: md,
    },
  ];

  // const ourText = new splitType(".reveal", { types: "chars" });
  // const chars = ourText.chars;

  return (
    <div ref={container} className="mt-16 mb-20">
      <div className="pt-14">
        <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-7xl flex justify-center items-center font-marvel font-semibold text-slate-800"
        >
          About Us
        </motion.h1>
        <motion.h1
          variants={titleVariants2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="m-0 mt-[10px] text-opacity-5 font-medium leading-[2vw] font-marvel  text-4xl flex justify-center items-center"
        >
          Who are we ?
        </motion.h1>
      </div>
      <div className="">
        <div className=" w-[100%] justify-center relative mt-[12vh] hidden lg:flex">
          {images.map(({ src, y }, i) => {
            return (
              <motion.div
                style={{ y }}
                key={`i_${i}`}
                className="absolute
              
              [&:nth-of-type(2)]:w-[25vh] [&:nth-of-type(2)]:h-[35vh] [&:nth-of-type(2)]:left-[3vw] [&:nth-of-type(2)]:top-[30vh] [&:nth-of-type(2)]:z-2
               [&:nth-of-type(3)]:left-[65vh] [&:nth-of-type(3)]:top-[5vh] [&:nth-of-type(3)]:h-[22vh] [&:nth-of-type(3)]:w-[18vh] [&:nth-of-type(3)]:z-3
               [&:nth-of-type(1)]:w-[40vh] [&:nth-of-type(1)]:h-[40vh] [&:nth-of-type(1)]:z-1 [&:nth-of-type(1)]:left-[30vh] [&:nth-of-type(1)]:top-[-10vh]"
              >
                <img
                  src={src}
                  placeholder="blur"
                  alt="image"
                  fill="true"
                  className="object-cover rounded-lg shadow-2xl border border-slate-600"
                />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          // style={{ y: sm }}
          className="flex flex-col relative justify-end items-end px-10 py-5 mx-5
         mt-14 lg:mt-0 lg:ml-[50vw] lg:mr-10 font-logo1 text-lg lg:text-2xl border shadow-xl border-slate-600 rounded-3xl bg-[#e9d3b4]"
        >
          <p>
            Welcome to <span className="text-emerald-600">Zen Homestay</span>,
            your serene escape in the heart of{" "}
            <span className=" text-sky-600">Pondicherry</span>. Nestled amidst
            peaceful residential, our homestay offers a peaceful retreat where
            you can unwind and recharge.
          </p>
          <br />

          <p>
            At Zen Homestay, we pride ourselves on providing a{" "}
            <span className="text-emerald-600">
              cozy atmosphere and personalized hospitality
            </span>
            . Our rooms have attached bath along with spacious common hall and
            kitchen are designed with your comfort in mind. Whether you're
            traveling solo, with a loved one, or as a family, you'll find our
            accommodations to be your home away from home.
          </p>
          <br />
          <p>
            From our warm hospitality to our convenient{" "}
            <span className="text-sky-600">
              location near Serinity beach and Rock beach
            </span>
            , Zen Homestay is the perfect base for exploring all that
            Pondicherry has to offer. Whether you're here for adventure or
            relaxation, we invite you to experience the tranquility of Zen
            Homestay during your stay.
          </p>
          <br />
          <p className="lg:mr-[14vw] lg:ml-0 mr-10 text-emerald-600 text-2xl lg:text-[2rem]">
            We can't wait to welcome you!
          </p>
        </motion.div>
      </div>

      {/* <div className={word}>
        <p className="text-black m-20 mt-[10px] font-normal uppercase">
          {word.split("").map((letter, i) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, Math.floor(Math.random() * -75) - 25]
            );
            return (
              <motion.span
                className="relative"
                style={{ top: y }}
                key={`l_${i}`}
              >
                {letter}
              </motion.span>
            );
          })}
        </p>
      </div> */}
    </div>
  );
};
export default AboutData;
