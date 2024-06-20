
import HomeH from "./home/page";
export const dynamic = "force-dynamic"

export default function Home({children}) {
  return (
    <section className="container max-w-screen-xl mx-auto min-h-[calc(100vh-93px)]">
      <div className="absolute w-24 h-24 bg-[#ecebeb] blur-3xl top-52"></div>
      <div className="absolute w-14 h-14 bg-[#ecebeb] blur-2xl right-0"></div>
      <HomeH/>
    </section>
  );
}
