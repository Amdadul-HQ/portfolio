'use client'
import React from 'react';
import contact from '../../../public/contact.json'
import Lottie from 'lottie-react';
import { createContext } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
    return (
        <motion.section
        id='contact'
        variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        className='flex min-h-screen flex-col justify-center'>
           <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
       Contact with me
      </h1>
            <div className='flex lg:px-0 px-5 items-center lg:flex-row flex-col-reverse mt-10'>
            <div className='lg:w-1/2'>
                    <h1 className='text-5xl text-white font-semibold'>Let’s work together!</h1>
                    <p className='text-xl font-medium text-white mt-4'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <div className='mt-5 space-y-3'>
                        <div className='flex justify-between'>
                        <div className='flex items-center gap-x-3 text-white'>
                            <p className='bg-gradient-to-t rounded-full from-[#8750f7] to-[#2a1454] w-[50px] h-[50px] flex justify-center items-center'>
                            <IoCallOutline className='text-2xl font-medium' />
                            </p>
                           <div>
                            <p className='text-xl'>Phone</p>
                            <p className='text-xl font-semibold'>+8801756171239</p>
                           </div>
                        </div>
                        <div className='flex items-center gap-x-3 text-white'>
                            <p className='bg-gradient-to-t rounded-full from-[#8750f7] to-[#2a1454] w-[50px] h-[50px] flex justify-center items-center'>
                            <MdOutlineMail className='text-2xl font-medium' />
                            </p>
                           <div>
                            <p className='text-xl'>Email</p>
                            <p className='text-xl font-semibold'>rimonamdadul301@gmail.com</p>
                           </div>
                        </div>
                        </div>
                        <div className='flex items-center gap-x-3 text-white'>
                            <p className='bg-gradient-to-t rounded-full from-[#8750f7] to-[#2a1454] w-[50px] h-[50px] flex justify-center items-center'>
                            <CiLocationOn className='text-2xl font-medium' />
                            </p>
                           <div>
                            <p className='text-xl'>Address</p>
                            <p className='text-xl font-semibold'>Feni, Bangladesh</p>
                           </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <form>
                            <div className='flex gap-x-5'>
                            <input className='bg-[rgba(22,26,49,1)] h-11 block w-full px-5 rounded-lg border border-purple-300' type="email" name="email" id="" placeholder='Enter Your Email'/>
                            <input className='bg-[rgba(22,26,49,1)] h-11 block w-full px-5 rounded-lg border border-purple-300' type="tel" name="phone" id="" placeholder='Phone Number'/>
                            </div>
                            <div className='mt-4'>
                            <textarea className='bg-[rgba(22,26,49,1)] h-40 pt-4 block w-full px-5 rounded-lg border border-purple-300' name="message" placeholder='Message' id=""></textarea>
                            </div>
                            <div>
                            <button className='border-purple-300 px-6 text-white bg-[#2A1454] py-2 text-xl font-medium border-2 mt-3 rounded-full'>
                    Send 
                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                <Lottie animationData={contact}></Lottie>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;