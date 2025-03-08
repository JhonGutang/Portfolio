import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import UnderConstruction from "@/components/UnderConstruction";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const Home = () => {
  const isDisabled = true;
  return (
    <div className="flex flex-col items-center justify-end px-5">
      {isDisabled ? (
         <UnderConstruction />
      ) : (
        <div className={poppins.className}>
          <Navbar />
          <Hero />
          <About />
          <Projects/>
        </div>
      )}
    </div>
  );
};

export default Home;
