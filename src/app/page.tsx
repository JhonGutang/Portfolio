import UnderConstruction from "@/components/UnderConstruction";
import Hero from "@/components/sections/Hero";
export default function Home() {
  const hide = false;
  return (
    <div>
      {hide ? (
        <div className=" w-screen flex items-center justify-center h-screen">
          <UnderConstruction />
        </div>
      ) : (
        <Hero />
      )}
    </div>
  );
}
