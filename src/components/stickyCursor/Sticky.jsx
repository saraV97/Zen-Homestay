"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Sticky({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 60 : 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };
  const manageMouseOver = (e) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
  };
  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className="w-5 h-5 bg-black fixed z-50 rounded-full"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
    ></motion.div>
  );
}
