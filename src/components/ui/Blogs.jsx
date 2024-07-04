import Image from 'next/image';
import React from 'react';
import { FaComment } from 'react-icons/fa6';
import { IoCalendarOutline } from 'react-icons/io5';

const Blogs = () => {
    return (
        <section className='py-32 max-w-screen-xl mx-auto lg:px-0 px-5' id='blogs'>
            <div className='text-center mb-6'>
             <h1 className='text-white text-5xl font-semibold'>My Recent Blogs</h1>
             <p className='text-white font-normal text-lg max-w-[660px] mx-auto mt-3'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
             </div>
             <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                <div className='relative'>
                    <Image src='/Why-Use-React-JS-for-Front-End-Development.jpg' className='w-[400px] h-[300px] rounded-2xl' width={400} height={360} alt='' />
                    <p className='absolute top-5 px-4 py-1 rounded-3xl left-5 text-xl font-medium text-white bg-[#8750F7]'>React JS</p>
                    <div className='bg-[#2a1454] absolute w-[360px] bottom-4 left-0 lg:left-5 rounded-3xl h-[100px]'>
                        <div className='pt-2 flex justify-between px-3'>
                        <h1 className='flex items-center gap-x-1 text-[#8750F7]'><IoCalendarOutline/>May,10 2024</h1>
                        <p className='flex items-center gap-x-1 text-[#8750F7]'><FaComment/>{'0'} Comments</p>
                        </div>
                        <h1 className='text-xl px-3 pb-5 text-white'>Why we should use React.JS in Front End </h1>
                    </div>
                </div>
                <div className='relative'>
                    <Image src='/Why-Use-React-JS-for-Front-End-Development.jpg' className='w-[400px] h-[300px] rounded-2xl' width={400} height={360} alt='' />
                    <p className='absolute top-5 px-4 py-1 rounded-3xl left-5 text-xl font-medium text-white bg-[#8750F7]'>React JS</p>
                    <div className='bg-[#2a1454] absolute w-[360px] bottom-4 left-0 lg:left-5 rounded-3xl h-[100px]'>
                        <div className='pt-2 flex justify-between px-3'>
                        <h1 className='flex items-center gap-x-1 text-[#8750F7]'><IoCalendarOutline/>May,10 2024</h1>
                        <p className='flex items-center gap-x-1 text-[#8750F7]'><FaComment/>{'0'} Comments</p>
                        </div>
                        <h1 className='text-xl px-3 pb-5 text-white'>Why we should use React.JS in Front End </h1>
                    </div>
                </div>
                <div className='relative'>
                    <Image src='/Why-Use-React-JS-for-Front-End-Development.jpg' className='w-[400px] h-[300px] rounded-2xl' width={400} height={360} alt='' />
                    <p className='absolute top-5 px-4 py-1 rounded-3xl left-5 text-xl font-medium text-white bg-[#8750F7]'>React JS</p>
                    <div className='bg-[#2a1454] absolute w-[360px] bottom-4 left-0 lg:left-5 rounded-3xl h-[100px]'>
                        <div className='pt-2 flex justify-between px-3'>
                        <h1 className='flex items-center gap-x-1 text-[#8750F7]'><IoCalendarOutline/>May,10 2024</h1>
                        <p className='flex items-center gap-x-1 text-[#8750F7]'><FaComment/>{'0'} Comments</p>
                        </div>
                        <h1 className='text-xl px-3 pb-5 text-white'>Why we should use React.JS in Front End </h1>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Blogs;