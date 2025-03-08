'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import ImageIcons from "./ImageIcons";

const Socials = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialIcons = [
    { id: 'facebook', iconLink: '/about_me/facebook.png' },
    { id: 'github', iconLink: '/about_me/github.png' },
    { id: 'gmail', iconLink: '/about_me/gmail.png' }
  ];

  const motionProps = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <div className="w-full text-left mt-7 flex gap-5 items-center justify-center lg:justify-start">
      {socialIcons.map(({ id, iconLink }) => (
        <motion.div
          key={id}
          {...motionProps}
          onMouseEnter={() => setHoveredIcon(id)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <ImageIcons 
            iconLink={iconLink}
            name={hoveredIcon === id ? id : undefined}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
