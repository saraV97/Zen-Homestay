"use client";
import socialicon from "../assets/instagram.png";
import rooficon from "../assets/roofing.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLinks from "./MobileNavLinks";
import Magnetic from "./Magnetic/index";
// import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  // const navBar = useRef(null);
  // const logo = useRef(null);
  // const cta = useRef(null);
  // const tl = gsap.timeline();
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // });

  // useEffect(() => {
  //   tl.to(navBar.current, {
  //     y: 0,
  //     duration: 3,
  //     delay: 0.5,
  //     ease: "power4.inOut",
  //   });
  // });

  // useEffect(() => {
  //   sectionRefs.forEach((section) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top 375px",
  //       end: "bottom 300px",
  //       // markers: true,
  //       animation: gsap
  //         .timeline()
  //         .to(navBar.current, { color: "#DDDDD5" })
  //         .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
  //         .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

  //       toggleActions: "restart reverse restart reverse",
  //     });
  //   });
  // });
  //responsive
  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    gsap.fromTo(
      ".nav",
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
  });

  const links = [
    // {
    //   id: 1,
    //   link: "home",
    // },
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "aminities",
    },
    {
      id: 3,
      link: "gallery",
    },
  ];

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      delayChildre: 0.3,
      transition: { staggerChildren: 0.09, staggerDirection: 1 },
    },
  };

  return (
    <header
      // ref={navBar}
      className="nav flex justify-between items-center w-80 md:w-8/12 lg:w-6/12 h-[70px]
       text-slate-800 bg-slate-400 bg-opacity-40
       backdrop-blur-sm 
        border border-slate-800 rounded-3xl shadow-xl
     fixed z-50 top-5 left-8 xsm:left-14 md:left-40 lg:left-1/4 "
    >
      <a href="/" className="ml-5 flex justify-center items-center">
        <p className="flex ">
          <img src={rooficon} alt="" width="30" height="30" />
        </p>
        <div className="">
          {/* <img src={logo} width={300} height={20} className=""></img> */}
          <h1 className="text-3xl font-damion  text-slate-800">Zen</h1>
          <h1 className="text-xl font-grotesk ml-4 mt-[-14px] text-slate-800">
            Homestay
          </h1>
        </div>
      </a>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => [
          <Magnetic>
            <li
              key={id}
              className="group px-5 cursor-pointer lg:text-xl md:text-xl text-Black
         hover:text-black "
            >
              <a href={`#${link}`}>{link}</a>
              <div className="indicator transition duration-300 ease-in-out group-hover:scale-100"></div>
            </li>
          </Magnetic>,
        ])}
      </ul>
      <div className="flex">
        <Magnetic>
          <a href="#footer">
            <button
              className="hidden lg:flex border border-slate-800 rounded-xl py-1 px-3 mr-7
         text-slate-800  bg-yellow-200  hover:bg-emerald-400 text-xl shadow-lg"
            >
              <span
              // className="ptag hover:text-white"
              >
                Call to Book
              </span>
            </button>
          </a>
        </Magnetic>
      </div>
      <div
        // ref={ref}
        className="cursor-pointer md:hidden border border-slate-800 rounded-xl text-md mr-5 px-2 py-1 text-slate-800 font-logo1 text-2xl"
        onClick={toggleMenu}
      >
        Menu
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-[90vh] border-black border-2
             rounded-3xl bg-yellow-300 origin-top text-slate-800
       p-10"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between">
                <p>
                  <img src={rooficon} alt="" width="40" height="40" />
                </p>
                <p
                  className="cursor-pointer text-md text-slate-800 px-2 pt-2 border border-slate-800 rounded-xl"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-logo1 text-slate-800 
                capitalize items-center gap-10 text-5xl"
              >
                {links.map((title, id) => {
                  return (
                    <MobileNavLinks
                      link={title.link}
                      key={id.link}
                      toggle={toggleMenu}
                    />
                  );
                })}
              </motion.div>

              <div className="flex justify-end">
                <p>
                  <a href="https://www.instagram.com">
                    <img src={socialicon} alt="" width="40" height="40" />
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
  // });
}
