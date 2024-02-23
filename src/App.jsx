import Home from "./components/Home";
import About from "./components/About";
import Aminities from "./components/Aminities";
import Gallery from "./components/gallery/Gallery.jsx";
import NavBar from "./components/NavBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer.jsx";
// import Sticky from "./components/stickyCursor/Sticky.jsx";

function App() {
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

  // const lenisRef = useRef();
  useEffect(() => {
    // ScrollTrigger.defaults({
    //   scroller: ".main",
    // });
    window.addEventListener("load", function () {
      const sectionColor = document.querySelectorAll("[data-bgcolor]");
      sectionColor.forEach((colorSection, i) => {
        const prevBgColor = i === 0 ? " " : sectionColor[i - 1].dataset.bgcolor;
        console.log(colorSection.id);

        ScrollTrigger.create({
          trigger: colorSection,
          // scroller: ".main",
          start: "top 50%",
          end: "bottom 0%",
          // markers: "true",
          onEnter: () =>
            gsap.to(".main", {
              backgroundColor: colorSection.dataset.bgcolor,
              overwrite: "auto",
            }),
          onLeaveBack: () =>
            gsap.to(".main", {
              backgroundColor: prevBgColor,
              overwrite: "auto",
            }),
        });
      });
    });

    return () => {};
  }, []);

  return (
    <div id="main" className="main min-h-full w-full flex flex-col bg-white">
      <NavBar
      // sectionRefs={sectionRefs.current}
      />
      <section
        id="home"
        className="min-h-screen w-full relative flex items-center justify-center custom-bg-class bg-cover bg-center"
        data-bgcolor="#FFFFFF"
      >
        <Home />
      </section>
      <section
        // forwardedRef={(el) => (sectionRefs.current[0] = el)}
        id="about"
        className=" min-h-screen w-full relative flex items-center justify-center "
        data-bgcolor="#F1F0E8"
      >
        <About />
      </section>
      <section
        id="aminities"
        className="relative flex items-center justify-center "
        data-bgcolor="#EEE0C9"
      >
        <Aminities />
      </section>
      <section
        id="gallery"
        // className="min-h-screen w-full relative flex items-center justify-center"
        data-bgcolor="#E9B384"
      >
        <Gallery />
      </section>
      <section
        id="footer"
        className="min-h-screen w-full relative flex items-center justify-center"
        data-bgcolor="#96B6C5"
      >
        <Footer />
      </section>
    </div>
  );
}

export default App;
