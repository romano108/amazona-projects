import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeMain from "@/components/HomeMain";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMain />
      <Mission />
    </div>
  );
}
