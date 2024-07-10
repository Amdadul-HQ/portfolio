import Image from 'next/image';
import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiAdobexd, SiExpress, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { FaGithub, FaNode, FaStripe } from 'react-icons/fa6';
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import { VscDebug, VscVscode } from "react-icons/vsc";
import { BsStripe } from 'react-icons/bs';
const Skills = () => {
    return (
        <section className='py-32 max-w-screen-xl mx-auto lg:px-0 px-5' id='skills'>
            <div className='text-center mb-6 '>
            <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
            My Skills
      </h1>  
             <p className='text-white font-normal lg:text-lg max-w-[660px] mx-auto mt-3'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
             </div>
             <div className='grid lg:grid-cols-6 grid-cols-3 gap-5'>
                
                   
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454]  shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-orange-600'>HTML<FaHtml5 className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-orange-600  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-blue-600'>CSS<IoLogoCss3 className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-blue-600  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-yellow-600'>JavaScript<RiJavascriptFill className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-yellow-600  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-blue-500'>Tailwind<RiTailwindCssFill className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-blue-500  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-blue-400'>React<FaReact className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-blue-400  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-gray-400'>Next JS<RiNextjsFill className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-gray-400  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                
             </div>
             <div className='grid lg:grid-cols-5 grid-cols-3 gap-5 mt-10'>
                   <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454]  shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-green-600'>MongoDB<SiMongodb className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-green-600  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-slate-700'>Node JS<FaNode className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-green-700  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-yellow-500'>ExpressJs<SiExpress className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-yellow-500  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-orange-400'>Firebase<IoLogoFirebase className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-orange-400  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-black'>JWT<SiJsonwebtokens className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-black  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
             </div>
             <div className='grid lg:grid-cols-6 grid-cols-3 gap-5 mt-10'>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454]  shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-blue-700'>VS Code<VscVscode className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-blue-700  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-gray-100'>GitHub<FaGithub className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-black-700  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-orange-600'>Figma<IoLogoFigma className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-blue-300  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-purple-900'>AdobeXD<SiAdobexd className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-purple-700  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-blue-500'>Stripe<BsStripe className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-blue-500  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
                    <div className='lg:p-4 bg-[#140C1C] rounded-3xl border-[#2a1454] border hover:bg-[#331e5e] group hover:border-[#8750f7] transition-all duration-300 shadow-black hover:shadow-[#2a1454] shadow-2xl'>
                        <p className='text-[#8750F7] text-center flex items-center gap-x-1 lg:text-2xl font-semibold justify-center group-hover:text-red-500'>Debuging<VscDebug className='grayscale-[80%] text-3xl scale-90 group-hover:scale-100 text-red-500  bg-transparent group-hover:grayscale-0 transition-all duration-300 rounded-xl bg-[#140C1C]' /></p>
                    </div>
             </div>
        </section>
    );
};

export default Skills;