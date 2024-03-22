"use client";
// import { titleVariants1 } from "@/components/Animation";
import { motion } from "framer-motion";
import React from "react";
// import Image from "next/image";
import Magnetic from "../Magnetic/index";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import slides from ".";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

const Gall = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="mt-20 mx-5">
      <div>
        {/* <motion.h1
          variants={titleVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center py-10 text-5xl"
        >
          Our
          <span className="text-green-500">&nbsp;Gallery</span>
        </motion.h1> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108443/Zen%20Homestay/nsr0moajbgvzypi2rtk1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108443/Zen%20Homestay/hnphnhouh3noufmnpjva.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108442/Zen%20Homestay/wnsucfpa5fyu1ygwviqa.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108441/Zen%20Homestay/rm6o6xsayljexdkvkypu.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108441/Zen%20Homestay/fvu69kraxllxj4vhcbxh.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108440/Zen%20Homestay/ue8404rxxilva7fcqc0m.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108441/Zen%20Homestay/bs2va9xovhhmo6khpj6i.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108441/Zen%20Homestay/gxdyggffbwvict8suwxh.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108440/Zen%20Homestay/vbydz6pzzaksupigbnbg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108440/Zen%20Homestay/oyq7ffnds3phnzzceugr.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108441/Zen%20Homestay/qd782c4nhgj7qcrwaqw4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108442/Zen%20Homestay/c8tjrax84q2qgzgwgpdr.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108442/Zen%20Homestay/tooicj3qqtcyx0enwvx3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108443/Zen%20Homestay/rcgw3pqkrtbfr6muz8j7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
                src="https://res.cloudinary.com/dg80cvwhy/image/upload/v1711108440/Zen%20Homestay/wdzfnzn39fbyiultcj8h.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Magnetic>
          <button
            className="rounded-3xl border border-black p-5 flex justify-center items-center
             bg-yellow-200 hover:bg-[#e0ad69] mt-10 mb-20 text-3xl shadow-2xl mx-auto"
            onClick={() => setOpen(true)}
          >
            View Full Gallery
          </button>
        </Magnetic>
        <Lightbox
          plugins={[Thumbnails, Fullscreen, Zoom]}
          open={open}
          close={() => setOpen(false)}
          slides={slides}
        />
      </div>
    </main>
  );
};

export default Gall;
