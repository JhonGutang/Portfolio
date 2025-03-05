import Image from "next/image";
import styles from "./page.module.css";

import UnderConstruction from "@/components/UnderConstruction";
export default function Home() {
  return (
    <div className="border-2 h-screen w-screen flex items-center justify-center">
      <UnderConstruction/>
    </div>
  );
}
