import React from "react";
import { motion } from "framer-motion";

const MobileNavLinks = ({ link, toggle }) => {
  const mobileLinkVar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <div className="overflow-hidden hover:text-slate-600">
      <motion.div variants={mobileLinkVar}>
        <a href={`#${link}`} onClick={toggle}>
          {link}
        </a>
      </motion.div>
    </div>
  );
};

export default MobileNavLinks;
