'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import ImageIcons from "./ImageIcons";

const Socials = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialIcons = [
    { id: 'linkedin', name: 'Jhon Barry Gutang', iconLink: '/about_me/linkedin.png', socialLink: 'https://linkedin.com/in/jhongutang' },
    { id: 'github', name: 'Jhon Gutang', iconLink: '/about_me/github.png', socialLink: 'https://github.com/JhonGutang' },
    { id: 'fb', name: 'Jhon Barry D. Gutang', iconLink: '/about_me/facebook.png', socialLink: 'https://www.facebook.com/Voider.Kayle' },
    { id: 'gmail', name: 'jhonbarrygutang@gmail.com', iconLink: '/about_me/gmail.png' },
  ];

  const motionProps = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <div className="w-full text-left mt-7 flex gap-5 items-center justify-center lg:justify-start">
      {socialIcons.map(({ id, name, iconLink, socialLink }) => (
        <motion.div
          key={id}
          {...motionProps}
          onMouseEnter={() => setHoveredIcon(id)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <ImageIcons 
            iconLink={iconLink}
            name={hoveredIcon === id ? name : undefined}
            socialLink={socialLink ?? undefined}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
