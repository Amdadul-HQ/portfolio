import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className='flex items-center justify-between max-w-screen-xl mx-auto min-h-[calc(100vh-93px)]'>
            <div className=''>
                <h3 className='text-5xl text-gray-300 font-medium'>
                    Hello 👋 <br />
                    I am <span className='text-gray-500'>Amdadul Rimon</span> <br />
                    Creative Web Developer{"/>"}
                </h3>
                <p className='text-gray-300 font-normal text-xl mt-2'>Who will provide you & your business unique identity</p>
                <button className='border-purple-300 px-6 py-2 text-xl font-medium border-2 mt-3 rounded-full'>
                    Let's Talk 💬
                </button>
            </div>
            <div className='relative'>
                <Image src={"/file.png"} width={500} height={500} alt='' className='bg-transparent shadow-inner backdrop-grayscale-0 border-2 border-purple-400 rounded-full'></Image>
            </div>
        </section>
    );
};

export default Hero;