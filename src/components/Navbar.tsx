import { Home, UserRound, Files, Mails } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex justify-center p-4 fixed top-3 left-0 z-10" >
      <div className="px-6 h-full border-2  rounded-full flex justify-center items-center gap-6" style={{backgroundColor: '#29232E'}}>
        <Home className="cursor-pointer" />
        <UserRound className="cursor-pointer" />
        <Files className="cursor-pointer" />
        <Mails className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
