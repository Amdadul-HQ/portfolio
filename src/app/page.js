import Image from "next/image";
import HomeH from "./home/page";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";

export default function Home({children}) {
  return (
    <section className="container mx-auto min-h-[calc(100vh-93px)]">
      <div className="fixed w-24 h-24 bg-[#ecebeb] blur-3xl top-80"></div>
      <div className="fixed w-14 h-14 bg-[#ecebeb] blur-2xl right-0"></div>
      <HomeH/>
      <About/>
      <Skills/>
    </section>
  );
}
