import ImageIcon from "../ImageIcons";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const popVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

const Contact = () => {
  const socials = [
    { name: 'Jhon Barry Gutang', iconLink: '/about_me/linkedin.png', link: 'https://linkedin.com/in/jhongutang' },
    { name: 'Jhon Gutang', iconLink: '/about_me/github.png', link: 'https://github.com/JhonGutang' },
    { name: 'Jhon Barry Gutang', iconLink: '/about_me/facebook.png', link: 'https://www.facebook.com/Voider.Kayle' },
    { name: 'jhonbarrygutang@gmail.com', iconLink: '/about_me/gmail.png' },
  ];

  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          await imageControls.start("visible");
        } else {
          await imageControls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [imageControls]);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          await contentControls.start("visible");
        } else {
          await contentControls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [contentControls]);

  return (
    <div className="w-full h-screen distance-from-nav flex lg:flex-row flex-col gap-15">
      <motion.div
        ref={imageRef}
        className="w-full flex justify-center lg:justify-end items-center"
        variants={popVariants}
        initial="hidden"
        animate={imageControls}
      >
        <img src="/contact.svg" alt="" className="w-[60vw] lg:w-[30vw]" />
      </motion.div>
      <motion.div
        ref={contentRef}
        className="w-full flex flex-col items-center lg:items-start lg:justify-center"
        variants={popVariants}
        initial="hidden"
        animate={contentControls}
      >
        <div className="lg:text-3xl mb-5 text-3xl">Let&apos;s Collaborate!!</div>
        <div className="flex flex-col gap-4">
          {socials.map((social, index) => (
            <div key={index}>
              <ImageIcon iconLink={social.iconLink} name={social.name} socialLink={social.link} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
