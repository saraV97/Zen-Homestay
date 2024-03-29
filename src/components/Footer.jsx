import React from "react";
import Magnetic from "./Magnetic/index";
import location from "../assets/aminities/location.png";
import socialicon from "../assets/instagram.png";

const Footer = () => {
  return (
    <div
      className="p-4 lg:p-10 w-full h-[100vh] flex flex-col justify-between border-t
    border-black rounded-t-3xl lg:rounded-t-[5%] bg-[#526D82]"
    >
      <hr className="border-yellow-100 lg:w-[50%] lg:ml-[20rem]" />
      {/* <div className="w-full  text-[9vw] leading-[1.1] ">
        <span className="text-center">Where Every Moment</span>
        <div className="text-left">
          <span className="text-yellow-300">Feels like </span>{" "}
          <span className="font-damion mx-8 text-green-400"> Footer </span>
        </div>
      </div> */}
      <div className="flex flex-row justify-between items-center mt-3 lg:mt-[2rem] text-slate-800">
        <div className="flex justify-start border-4 border-[#F2EFE5] shadow-2xl rounded-3xl lg:mr-0 mr-5 bg-[#EFE1D1]">
          <Magnetic>
            <div
              className="hidden cursor-pointer w-30 lg:pt-10 lg:w-[180px] 
            lg:h-[200px] lg:flex items-center"
            >
              <a href="https://maps.app.goo.gl/fEEkjon7nciuoXdh9">
                {" "}
                <img src={location} width={200} height={200} />
              </a>
            </div>
          </Magnetic>
          <div className="p-5 pr-3 lg:pr-5 lg:p-10 ">
            <h3 className="text-2xl lg:text-5xl font-bold font-damion">
              Zen <span className=" font-navFont text-2xl">Homestay</span>
            </h3>
            <h4 className="text-xl lg:text-xl font-semibold">Address:</h4>
            <p className="text-sm lg:text-2xl text-slate-800 ">
              No.11, H-Lane, 12th Cross, Krishna Nagar
            </p>
            <p className=" text-sm lg:text-2xl text-slate-800 ">
              Puducherry - 605008
            </p>
            <span className="text-l lg:text-2xl text-slate-800 ">India</span>
          </div>
        </div>
        <div
          className="w-[200px] h-[300px]  lg:w-[400px] lg:h-[350px]
         border-4 border-[#F2EFE5]  rounded-3xl overflow-hidden flex justify-between shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d692.2358711483987!2d79.82173234736366!3d11.951416819620121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU3JzA1LjkiTiA3OcKwNDknMTguNiJF!5e0!3m2!1sen!2sin!4v1708607087012!5m2!1sen!2sin"
            width="400"
            height="350"
            style={{ border: 0, borderRadius: 20 }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr className="mt-10 mb-5 border-yellow-100" />

      <div className="flex flex-row lg:mb-14 justify-between items-center">
        <div
          className="text-sm md:text-xl lg:text-3xl lg:p-5 lg:ml-10 p-5 
        ml-1 border-4 border-[#F2EFE5] rounded-3xl lg:mr-0 sm:mr-5 mr-2 bg-[#EFE1D1] shadow-2xl"
        >
          <p className="font-semibold text-xl">Phone: </p>
          <p className="text-slate-800  ">8220791901</p>
          <br />
          <p className="font-semibold text-xl"> Email:</p>
          <p className="text-slate-800  "> vsara25597@gmail.com</p>
        </div>
        <div className="flex flex-col">
          <Magnetic>
            <p className="p-2 lg:p-10 lg:mt-5 ">
              <span className="flex flex-col  text-yellow-100 justify-center items-center pb-2 text-2xl">
                Social
              </span>
              <a
                className="flex justify-center items-center"
                href="https://www.instagram.com"
              >
                <img src={socialicon} alt="" width="80" height="80" />
              </a>
            </p>
          </Magnetic>
          <Magnetic>
            <button
              className="border-2 rounded-2xl border-black p-1 px-2 text-sm mr-0 sm:mr-5 lg:p-4 lg:px-10 text-Black
             bg-yellow-200 shadow-xl  hover:bg-emerald-400 lg:text-2xl lg:mr-0 mt-2"
            >
              <a href="/">Review Us Here</a>
            </button>
          </Magnetic>
        </div>
      </div>
      <hr className="border-yellow-100" />
      <span className="text-medium text-center mt-5 p-3 text-yellow-100">
        <p>&#169; {new Date().getFullYear()} Sara. All rigths reserved</p>
      </span>
    </div>
  );
};

export default Footer;
