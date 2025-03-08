'use client'

import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import UnderConstruction from "@/components/UnderConstruction";
import { Poppins } from "next/font/google";
import { useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const Home = () => {
  const isDisabled = false;
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  
  const scrollTo = (section: 'hero' | 'about' | 'projects') => {
    const refMap = {
      hero: heroRef,
      about: aboutRef,
      projects: projectsRef,
    };
    if (refMap[section].current) {
      refMap[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-end px-5">
      {isDisabled ? (
         <UnderConstruction />
      ) : (
        <div className={poppins.className}>
          <Navbar scrollTo={scrollTo} />
          <div id="hero" ref={heroRef}><Hero /></div>
          <div id="about" ref={aboutRef}><About /></div>
          <div id="projects" ref={projectsRef}><Projects /></div>
        </div>
      )}
    </div>
  );
};


export default Home;
