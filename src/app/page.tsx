import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import UnderConstruction from "@/components/UnderConstruction";

const Home = () => {
  const isDisabled = true;
  return (
    <div className="flex flex-col items-center justify-end px-5">
      {isDisabled ? (
         <UnderConstruction />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
        </div>
      )}
    </div>
  );
};

export default Home;
