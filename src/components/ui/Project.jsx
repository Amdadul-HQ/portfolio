'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { createContext } from 'react';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiMonitor } from "react-icons/fi";
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
const project = [
    {   
        id:1,
        name:"DREAM HOUSE",
        description:"Where you can find your Dream House by seeing every details. You can see the property live location and conditions. You can contact the property owner",
        live:"/",
        git:"/",
        img:"/project/dremhouse.png"
    },
    {   
        id:2,
        name:"ASSET FLOW",
        description:"This web application allows businesses to manage their assets and products efficiently. HR Managers can track how employees are using company assets, categorized as returnable (laptops, keyboards) or non-returnable (pens, paper).",
        live:"https://assetflow-2ac74.web.app",
        git:"https://github.com/Amdadul-HQ/assetFlow_client_side",
        img:"/project/assetFlow.png"
    },
    {   
        id:3,
        name:"QUERY",
        description:"This is a full-stack web application designed to provide users with alternative product information, allowing them to query, view, and provide recommendations for various products.",
        live:"https://shop-now-fc5a4.web.app/",
        git:"https://github.com/Amdadul-HQ/querie_client_site",
        img:"/project/query.png"
    },
]

const Project = () => {
    return (
        <motion.section
        id='project'
        variants={fadeIn('up',0.2)}
        initial="hidden"
        whileInView={"show"}
        className='flex min-h-screen flex-col justify-center'>
           <div className='mt-48'>
           <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
        My Project's
      </h1>
      <div className='mx-auto grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-5 gap-6 mt-10 '>
        
            {
                project.map(item => <li className='list-none' key={item.id}>
                <motion.div
                
                className='border-2 group rounded-[30px] bg-[rgba(22,26,49,1)] overflow-hidden '>
                    <Image src={item.img} style={{width:'100%',height:'280px',}} className='rounded-t-3xl h-[200px] group-hover:scale-105 overflow-hidden transition-all duration-300'  width={400} height={200} alt=''></Image>
                   <div className='px-8 py-2'>
                    <h1 className='text-xl text-gray-300 mt-2 font-medium'>{item.name}</h1>
                    <p className='text-sm text-justify font-light'>{item.description}</p>
                    <div className='flex justify-between my-6'>
                        <Link className='flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400' target='_blank' href={item.live}>Live View <FiMonitor className='text-xl'/> </Link>
                        <Link className='flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400' href={item.git}>GitHub Link <FaGithub className='text-xl'/></Link>
                    </div>
                   </div>
                </motion.div>
                </li>)
            }
      
       
      </div>
           </div>
            
        </motion.section>
    );
};

export default Project;