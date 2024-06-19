/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import React from 'react';
import { createContext } from 'react';
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
const Hero = () => {
    return (
        <section className='flex items-center justify-between max-w-screen-xl mx-auto min-h-[calc(100vh-93px)]'>
            <div className='text-5xl text-gray-300 font-medium overflow-hidden'>
                <motion.h3 
                initial={{x:-200,opacity:0}}
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:'1',
                    delay:'0.3'
                }}
                className='overflow-hidden'
                >
                Hello 👋
                </motion.h3>
                <motion.h3
                initial={{x:-200,opacity:0}}
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:'1',
                    delay:'0.4'
                }}
                className='overflow-hidden'
                >
                I am <span className='text-gray-500'>Amdadul Rimon</span> <br />
                </motion.h3>
                <motion.h3
                initial={{x:-200,opacity:0}}
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:'1',
                    delay:'0.5'
                }}
                className='overflow-hidden'
                >
                Creative Web Developer{"/>"}
                </motion.h3>
                <motion.p
                initial={{x:-200,opacity:0}}
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:'1',
                    delay:'0.6'
                }}
                className='text-gray-300 font-normal text-xl mt-2 overflow-hidden'>Who will provide you & your business unique identity</motion.p>
                <motion.button
                initial={{x:-200,opacity:0}}
                animate={{
                    x:0,
                    opacity:1
                }}
                transition={{
                    duration:'1',
                    delay:'0.7'
                }}
                className='border-purple-300 px-6 py-2 overflow-hidden text-xl font-medium border-2 mt-3 rounded-full'>
                    Let's Talk 💬
                </motion.button>
            </div>
            <motion.div
            initial={{x:100,opacity:0}}
            animate={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:'1',
                delay:'0.7'
            }}
            className=' overflow-hidden'>
                <Image src={"/file.png"} width={500} height={500} alt='' className='bg-transparent relative shadow-inner rounded-br-none backdrop-grayscale-0 border-2 border-purple-400 rounded-full'></Image>
                <motion.div
                 initial={{
                    opacity:0,
                    x:100
                 }}
                 animate={
                    {
                        opacity:1,
                        x:0
                    }
                 }
                 transition={{
                    duration:'1',
                    delay:'2'
                 }}
                 className='flex absolute right-40 bottom-[135px] gap-4 flex-col text-3xl  rounded-2xl mt-4 justify-center z-50 py-3'>
                    <Link href={'/'}><FaFacebook/></Link>
                    <Link href={'/'}><FaGithub/></Link>
                    <Link href={'/'}><FaLinkedin/></Link>
                    <Link href={'/'}><FaTwitter/></Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;