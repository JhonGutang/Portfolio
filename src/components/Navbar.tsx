import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <div className="flex justify-center items-center h-[10vh] w-screen gap-6 sticky top-0 z-10">
            <Button variant="ghost" className="text-md">Home</Button>
            <Button variant="ghost" className="text-md">About Me</Button>
            <Button variant="ghost" className="text-md">Projects</Button>
            <Button variant="ghost" className="text-md">Contacts</Button>
        </div>
     );
}
 
export default Navbar;