"use client";
import Home from "./components/Home";
import About from "./components/About";
import Aminities from "./components/Aminities";
import Gallery from "./components/gallery/Gallery.jsx";
import NavBar from "./components/NavBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";
import { AnimatePresence } from "framer-motion";

// import Sticky from "./components/stickyCursor/Sticky.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  gsap.registerPlugin(ScrollTrigger);
  // let roomsContainer = useRef(null);
  // let spaContainer = useRef(null);
  // let mainContainer = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   //spa
  //   ScrollTrigger.create({
  //     trigger: "#aminities",
  //     markers: true,
  //     start: "top 50%",
  //     end: "bottom 80%",

  //     onEnter: () => {
  //       gsap.to(".main", { duration: 1.0, backgroundColor: "#CDFADB" });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".main", { duration: 1.0, backgroundColor: "#F6FDC3" });
  //     },
  //   });

  //   ScrollTrigger.create({
  //     trigger: "#gallery",
  //     markers: true,
  //     start: "top 50%",
  //     end: "bottom 50%",

  //     onEnter: () => {
  //       gsap.to(".main", { duration: 1.0, backgroundColor: "#F6FDC3" });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".main", { duration: 1.0, backgroundColor: "#CDFADB" });
  //     },
  //   });
  // });

  useEffect(() => {
    // ScrollTrigger.defaults({
    //   scroller: ".main",
    // });
    window.addEventListener("load", function () {
      const sectionColor = document.querySelectorAll("[data-bgcolor]");
      sectionColor.forEach((colorSection, i) => {
        const prevBgColor = i === 0 ? " " : sectionColor[i - 1].dataset.bgcolor;
        ScrollTrigger.create({
          trigger: colorSection,
          // scroller: ".main",
          start: "top 50%",
          end: "bottom 0%",
          // markers: "true",
          onEnter: () =>
            gsap.to("section", {
              backgroundColor: colorSection.dataset.bgcolor,
              overwrite: "auto",
            }),
          onLeaveBack: () =>
            gsap.to("section", {
              backgroundColor: prevBgColor,
              overwrite: "auto",
            }),
        });
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo(0, 0);
        }, 2000);
      });
    });

    return () => {};
  }, []);

  return (
    <div
      id="main"
      className="main min-h-full w-full flex flex-col bg-white z-2"
    >
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <NavBar
      // sectionRefs={sectionRefs.current}
      />
      <section
        id="home"
        className="min-h-screen w-full  flex items-center justify-center 
          custom-bg-class bg-cover bg-center sticky top-0 z-1"
        data-bgcolor="#FFFFFF"
      >
        <Home />
      </section>
      <section
        // forwardedRef={(el) => (sectionRefs.current[0] = el)}
        id="about"
        className=" min-h-screen w-full relative flex items-center justify-center
        border-t-2 rounded-t-[5%] "
        data-bgcolor="#F1F0E8"
      >
        <About />
      </section>
      <section
        id="aminities"
        className="relative flex items-center justify-center "
        // data-bgcolor="#EEE0C9"
        data-bgcolor="#DBC4F0"
      >
        <Aminities />
      </section>
      <section
        id="gallery"
        className="relative"
        // className="min-h-screen w-full relative flex items-center justify-center"
        data-bgcolor="#FFE5E5"
      >
        <Gallery />
      </section>
      <sectionFooter
        id="footer"
        className="min-h-screen w-full relative flex items-center justify-center bg-[#FFE5E5]
        lg:pt-20"
        // data-bgcolor="#526D82"
        // data-bgcolor="#96B6C5"
      >
        <Footer />
      </sectionFooter>
    </div>
  );
}

export default App;
