import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import Image from "next/image";


const Skills = () => {
  return (
    <section className="mt-32 ">
      <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
        My Skills
      </h1>
      <div className="mt-6">
        <h1 className="text-gray-200 text-center px-6 py-2 mx-auto bg-slate-900 w-fit rounded-full font-medium text-2xl">
          Front-End Development
        </h1>

        <div>
          <Marquee className="max-w-[1200px] mx-auto">
            <div className="flex text-8xl gap-x-20 mt-6">
              <div className="flex justify-center flex-col items-center">
                <FaHtml5 className="text-orange-500" />
                <h1 className="text-white text-lg font-normal">HTML</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <IoLogoCss3 className="text-blue-500" />
                <h1 className="text-white text-lg font-normal">CSS</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <IoLogoJavascript className="text-yellow-500" />
                <h1 className="text-white text-lg font-normal">JavaScript</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <FaReact className="text-blue-700" />
                <h1 className="text-white text-lg font-normal">React.Js</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <RiNextjsFill className="text-black" />
                <h1 className="text-white text-lg font-normal">Next.Js</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <RiTailwindCssFill className="text-blue-400" />
                <h1 className="text-white text-lg font-normal">Tailwind CSS</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <IoLogoFirebase className="text-orange-700" />
                <h1 className="text-white text-lg font-normal">Firebase</h1>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-gray-200 text-center px-6 py-2 mx-auto bg-slate-900 w-fit rounded-full font-medium text-2xl">
          Back-End Development
        </h1>

        <div>
          <Marquee direction="right" className="max-w-[1200px] mx-auto">
            <div className="flex text-8xl gap-x-28 mt-6">
              <div className="flex justify-center flex-col items-center">
              <SiMongodb className="text-green-500" />
                <h1 className="text-white text-lg font-normal">MongoDB</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <DiNodejs className="text-blue-500" />
                <h1 className="text-white text-lg font-normal">Node.Js</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
              <SiExpress className="text-yellow-500" />
                <h1 className="text-white text-lg font-normal">Express.Js</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <Image src={'/jwt.png'} width={96} height={96} alt=""></Image>
                <h1 className="text-white text-lg font-normal">JWT</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <RiNextjsFill className="text-black" />
                <h1 className="text-white text-lg font-normal">Next.Js</h1>
              </div>
              <div className="flex justify-center flex-col items-center">
                <IoLogoFirebase className="text-orange-700" />
                <h1 className="text-white text-lg font-normal">Firebase</h1>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
