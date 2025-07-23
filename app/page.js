import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeMain from "@/components/HomeMain";
import Mission from "@/components/Mission";
import ClientSlider from "@/components/ClientSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMain />
      <Mission />
      <ClientSlider />
    </div>
  );
}
