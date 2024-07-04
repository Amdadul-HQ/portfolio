import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import { FiMonitor } from "react-icons/fi";
const project = [
    {
        id:1,
        name:'AssetFlow',
        projectType:'Fullstack',
        image:'/assetFlow.png',
        projectShortDes:'This web application allows businesses to manage their assets and products efficiently. HR Managers can track how employees are using company assets.',
        projectDescription:{

        },
        gitHub:'https://github.com/Amdadul-HQ/assetFlow_client_side',
        live:'https://assetflow-2ac74.web.app/'
    },
    {
        id:2,
        name:'Qurie',
        projectType:'Fullstack',
        image:'/query.png',
        projectShortDes:'This is a full-stack web application designed to provide users with alternative product information, allowing them to query, view, and provide recommendations for various products.',
        projectDescription:{

        },
        gitHub:'https://github.com/Amdadul-HQ/querie_client_site',
        live:'https://shop-now-fc5a4.web.app/'
    },
    {
        id:3,
        name:'Pathway Pioneer',
        projectType:'MERN Stack',
        image:'/pathwaypioneer.jpg',
        projectShortDes:"Explore exciting tourist spots from around the world, categorized by regions. Whether you're planning your next adventure or just browsing, we've got you covered with a user-friendly interface and comprehensive information.",
        projectDescription:{

        },
        gitHub:'https://github.com/Amdadul-HQ/pathway_pioneer_client_site',
        live:'https://pathway-pioneers.web.app/'
    },
    {
        id:4,
        name:'Dream House',
        projectType:'MERN Stack',
        image:'/coffee.jpg',
        projectShortDes:'Welcome to the Coffee Store Admin Interface! This web application allows administrators to manage products, update prices, and handle user management efficiently. Built using React, Tailwind CSS, Daisy UI, and Firebase authentication, it provides a seamless experience for administrators to oversee their coffee store operations.',
        projectDescription:{

        },
        gitHub:'https://github.com/Amdadul-HQ/querie_client_site',
        live:'https://coffee-store-manage.netlify.app/'
    }
]

const FullStackProject = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 relative z-10 mt-10'>
            {
                project.map(project => <div className='p-9 pb-0 bg-[#140C1C] group z-10 rounded-xl relative transition-all duration-500' key={project.id}>
                <Image src={project.image} width={550} className='h-[475px]' height={475} alt='' />
                
                <div className='absolute h-fit flex justify-between items-center bg-gradient-to-r p-2 lg:p-5 from-[#8750f7] to-[#2a1454] group-hover:opacity-100 transition-all -bottom-12 group-hover:bottom-5 rounded-2xl -left-0 duration-500 opacity-0 lg:w-[550px] '>
                    <div className='max-w-[85%]'>
                    <h1 className='lg:text-xl text-base text-white font-semibold'>Project Name: {project.name}</h1>
                    <p className='lg:text-sm text-xs text-justify text-white mt-1 font-normal'>{project.projectShortDes}</p>
                    <div>
                    <div className='flex justify-between my-3'>
                        <Link className='flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-300' target='_blank' href={project.live}>Live View <FiMonitor className='text-xl'/> </Link>
                        <Link className='flex gap-x-3 text-sm lg:text-base items-center lg:px-6 px-2 py-1 lg:py-2 border rounded-full border-purple-400 hover:bg-[#2a1454] transition-all duration-300' target='_blank' href={project.gitHub}>GitHub Link <FaGithub className='text-xl'/></Link>
                    </div>
                    </div>
                    </div>
                    <div>
                    <BsArrowDownRight className='group-hover:-rotate-90 lg:text-5xl transition-all rotate-180 delay-200 duration-300'/>
                    </div>
                </div> 
                </div>)
            }
            <div className='bg-[#ecebeb] w-[300px] h-[300px] blur-[180px] absolute z-0 top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] rounded-full'>

            </div>
        </div>
    );
};

export default FullStackProject;