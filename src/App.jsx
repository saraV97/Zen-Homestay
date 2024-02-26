"use client";
import Home from "./components/Home";
import About from "./components/About";
import Aminities from "./components/Aminities";
import Gallery from "./components/gallery/Gallery.jsx";
import NavBar from "./components/NavBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";
import { AnimatePresence } from "framer-motion";

// import Sticky from "./components/stickyCursor/Sticky.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  gsap.registerPlugin(ScrollTrigger);

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
    <div id="main" className="main min-h-full w-full flex flex-col bg-white">
      <div className="hidden lg:flex">
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence> */}
      </div>
      <NavBar
      // sectionRefs={sectionRefs.current}
      />
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center 
          custom-bg-class bg-cover bg-center sticky top-0 "
        data-bgcolor="#FFFFFF"
      >
        <Home />
      </section>
      <section
        // forwardedRef={(el) => (sectionRefs.current[0] = el)}
        id="about"
        className=" min-h-screen w-full relative flex items-center justify-center
        border-t-2 rounded-t-3xl lg:rounded-t-[5%] bg-[#F1F0E8]"
        data-bgcolor="#F1F0E8"
      >
        <About />
      </section>
      <section
        id="aminities"
        className="relative flex items-center justify-center bg-[#e6dfed]"
        // data-bgcolor="#EEE0C9"
        data-bgcolor="#e6dfed"
      >
        <Aminities />
      </section>
      <section
        id="gallery"
        className="relative bg-[#d8e7ed]"
        // className="min-h-screen w-full relative flex items-center justify-center"
        data-bgcolor="#d8e7ed"
      >
        <Gallery />
      </section>
      <sectionFooter
        id="footer"
        className="min-h-screen w-full sticky flex items-center justify-center bg-[#d8e7ed]
        lg:pt-20"
        // data-bgcolor="#526D82"
        // data-bgcolor="#96B6C5"
        // bg-[#FFE5E5]
      >
        <Footer />
      </sectionFooter>
    </div>
  );
}

export default App;
