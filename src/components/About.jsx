import React from "react";
import AboutData from "./AboutData";
const About = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} id="about">
      {/* About
      <div className="w-full  text-[9vw] leading-[1.1] ">
        <span className="text-center">Where Every Moment</span>
        <div className="text-left">
          <span className="text-yellow-300">Feels like </span>{" "}
          <span className="font-damion mx-8 text-green-400"> Home </span>
        </div>
      </div> */}
      <AboutData />
    </div>
  );
};

export default About;
