import Socials from "../Socials";

const About = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center distance-from-nav gap-10">
      <div className="text-3xl lg:mb-8">About Me</div>
      <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 justify-center">
        <div className=" lg:w-full lg:flex lg:justify-end">
          <img src="/about_me/about_me.svg" alt="" className="w-[80vw] lg:w-[40vw]" />
        </div>
        <div className="text-center lg:text-left px-4">
          <div className="text-2xl mb-2">Hi, I'm Jhon!</div>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            dolore aliquid quos repellendus repellat esse ex illum nobis rerum
            accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            dolore aliquid quos repellendus repellat esse ex illum nobis rerum
            accusantium?
          </p>
          <Socials/>
        </div>
      </div>
    </div>
  );
};

export default About;
