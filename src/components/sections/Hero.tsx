import { Button } from "../ui/button";
import Navbar from "../Navbar";

const Hero = () => {
    return ( 
        <div className="w-screen h-screen hero-background text-white">
        <Navbar/>
        <div className="flex items-center w-screen h-[90vh]" style={{padding: '0 8vw'}}>
            <div className=" w-[50vw] flex flex-col gap-3 h-[35vh]">
                <div className="text-5xl">Jhon Barry Gutang</div>
                <div className="text-2xl">Software Engineer | Full-Stack Developer </div>
                <div className="text-xl">Building Scalable Web Applications  </div>
                <div className="mt-4 flex gap-3">
                <Button>View my Projects</Button>
                    <Button variant="ghost">Check my Resume</Button>
                </div>
            </div>
            <div className="absolute right-0">
                <img src="/thumbnail/hero.png" width={850} alt="" />
            </div>
        </div>
        </div>
     );
}
 
export default Hero;