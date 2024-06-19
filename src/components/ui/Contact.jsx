'use client'
import React from 'react';
import contact from '../../../public/contact.json'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Contact = () => {
    return (
        <motion.section
        variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        className='mt-32'>
           <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
       Contact with me
      </h1>
            <div className='flex items-center mt-10'>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-medium'>Feel free to asking any of your Queries...</h1>
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
                            <button className='border-purple-300 px-6 py-2 text-xl font-medium border-2 mt-3 rounded-full'>
                    Send 
                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                <Lottie animationData={contact}></Lottie>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;