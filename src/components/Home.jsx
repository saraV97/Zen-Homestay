import React from "react";
import Magnetic from "../components/Magnetic/index";
// import homeImg from "../assets/pexels1.jpg";
const Home = () => {
  return (
    <div name="home" className="">
      <div>
        <div className="w-full text-6xl lg:text-[8vw] leading-[1.1] py-40 px-5 lg:px-80">
          <span className="text-left font-bold font-grotesk">
            Your Escape,{" "}
          </span>
          <div className="text-center">
            <span className="text-yellow-200 font-logo1">Our Pleasure.</span>
          </div>
          <div className="md:hidden flex justify-center pt-20 ">
            {/* <Magnetic> */}
            <a href="#footer">
              <button
                className=" flex justify-center items-center border-2 rounded-2xl border-slate-700 py-1 px-3
         text-slate-800  bg-yellow-200  hover:bg-emerald-400 text-xl"
              >
                <span>Call to Book</span>
              </button>
            </a>
            {/* </Magnetic> */}
          </div>
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
