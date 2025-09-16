import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import Socials from "../Socials";
import Skills from "./Skills";
import { useEffect } from "react";

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } },
};

const textVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.2 } },
};

const About = () => {
  // Use refs for the motion divs
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageControls = useAnimation();
  const textControls = useAnimation();

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
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [imageControls]);

  useEffect(() => {
    const node = textRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          await textControls.start("visible");
        } else {
          await textControls.start("hidden");
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [textControls]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-col items-center distance-from-nav gap-10 px-4">
        <div className="text-3xl lg:mb-8">About Me</div>
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 justify-center items-center">
          <motion.div
            ref={imageRef}
            className="w-full max-w-md lg:max-w-lg lg:flex-shrink-0"
            variants={imageVariants}
            initial="hidden"
            animate={imageControls}
          >
            <img
              src="/about_me/about_me.svg"
              alt=""
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            ref={textRef}
            className="text-center lg:text-left max-w-2xl w-full"
            variants={textVariants}
            initial="hidden"
            animate={textControls}
          >
            <div className="text-2xl mb-2">Hi, I&apos;m Jhon!</div>
            <p className="mb-3">
              an aspiring Software Engineer & Full-Stack Developer passionate
              about building efficient and scalable applications. I believe in a
              hands-on learning approach, applying new knowledge in real-world
              projects to continuously improve my skills.
            </p>
            <p className="mb-3">
              I prioritize clean, maintainable code and enjoy solving problems
              through well-structured development practices. Currently, I’m also
              diving into Prompt Engineering to stay ahead in the AI-driven era,
              ensuring I can adapt to emerging technologies.
            </p>
            <p>
              I’m eager to contribute, grow, and collaborate on impactful
              projects. Let’s build something amazing together!
            </p>
            <Socials />
          </motion.div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
