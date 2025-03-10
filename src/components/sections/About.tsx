import Socials from "../Socials";
import Skills from "./Skills";

const About = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex flex-col items-center distance-from-nav gap-10">
        <div className="text-3xl lg:mb-8">About Me</div>
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 justify-center">
          <div className=" lg:w-full lg:flex lg:justify-end">
            <img
              src="/about_me/about_me.svg"
              alt=""
              className="w-[80vw] lg:w-[40vw]"
            />
          </div>
          <div className="text-center lg:text-left px-4 max-w-2xl">
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
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
