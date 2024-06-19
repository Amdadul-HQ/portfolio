'use client'
import Image from 'next/image';
import React from 'react';
import { createContext } from 'react';
import { fadeIn } from '../variants';
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section className='flex items-center justify-between max-w-screen-xl mx-auto min-h-[calc(100vh-93px)]'>
            <div className='text-5xl text-gray-300 font-medium overflow-hidden'>
                <motion.h3 
                variants={fadeIn("right",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className='overflow-hidden'
                >
                Hello 👋
                </motion.h3>
                <motion.h3
                variants={fadeIn("right",0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className='overflow-hidden'
                >
                I am <span className='text-gray-500'>Amdadul Rimon</span> <br />
                </motion.h3>
                <motion.h3
                variants={fadeIn("right",0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                className='overflow-hidden'
                >
                Creative Web Developer{"/>"}
                </motion.h3>
                <motion.div
                variants={fadeIn("right",0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.1}}
                >
                    <p className='text-gray-300 font-normal text-xl mt-2 overflow-hidden'>Who will provide you & your business unique identity</p>
                    <button className='border-purple-300 px-6 py-2 overflow-hidden text-xl font-medium border-2 mt-3 rounded-full'>
                    Let's Talk 💬
                    </button>
                </motion.div>
            </div>
            <motion.div
            variants={fadeIn("left",0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.1}}
            className='relative overflow-hidden'>
                <Image src={"/file.png"} width={500} height={500} alt='' className='bg-transparent shadow-inner backdrop-grayscale-0 border-2 border-purple-400 rounded-full'></Image>
            </motion.div>
        </section>
    );
};

export default Hero;