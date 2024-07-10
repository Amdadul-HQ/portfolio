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
        <section className='flex lg:flex-row flex-col-reverse items-center justify-between max-w-screen-xl mx-auto min-h-[calc(100vh-93px)]'>
            <div className='lg:text-5xl lg:mb-0 mb-8 lg:text-left text-2xl text-center text-gray-300 font-medium overflow-hidden'>
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
                className='text-gray-300 font-normal text-base lg:text-xl mt-2 overflow-hidden'>Who will provide you & your business unique identity</motion.p>
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
                className='border-purple-300 lg:px-6 lg:py-2 mr-4 overflow-hidden lg:text-xl text-base py-1 px-2 lg:font-medium border-2 mt-3 rounded-full'>
                    <Link target='_blank' href={`https://drive.google.com/file/d/1ee_UDd7bBfWaU5V4Dw2wMLhPhs_S8ZRE/view`}>Download Resume</Link>
                </motion.button>
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
                className='border-purple-300 lg:px-6 lg:py-2 mr-4 overflow-hidden lg:text-xl text-base py-1 px-2 lg:font-medium border-2 mt-3 rounded-full'>
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
            className='lg:p-0 p-5 overflow-hidden flex justify-center items-center'>
                <Image src='/hero.png' width={472} height={506} style={{
                        borderRadius:'30px',
                        
                        
                    }} className='rotate-[5deg] z-10 hover:rotate-0 border-2 transition-all p-5 duration-500 border-[#2a1454] hover:border-[#8750f7]' alt=''/>
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
                 className='absolute lg:flex hidden right-48 bottom-[135px] text-gray-500 gap-4 flex-col text-3xl  rounded-2xl mt-4 justify-center z-50 py-3'>
                    <Link target='_blank' href={'https://www.facebook.com/amdadul.haque.54540218/'}><FaFacebook/></Link>
                    <Link target='_blank' href={'https://github.com/Amdadul-HQ'}><FaGithub/></Link>
                    <Link target='_blank' href={'https://www.linkedin.com/in/amdadul-haque-bhuiyan/'}><FaLinkedin/></Link>
                    <Link target='_blank' href={'https://x.com/hoque_amdaul'}><FaTwitter/></Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;