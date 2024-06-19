import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiMonitor } from "react-icons/fi";
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
        name:"DREAM HOUSE",
        description:"Where you can find your Dream House by seeing every details. You can see the property live location and conditions. You can contact the property owner",
        live:"/",
        git:"/",
        img:"/project/dremhouse.png"
    },
    {   
        id:3,
        name:"DREAM HOUSE",
        description:"Where you can find your Dream House by seeing every details. You can see the property live location and conditions. You can contact the property owner",
        live:"/",
        git:"/",
        img:"/project/dremhouse.png"
    },
]

const Project = () => {
    return (
        <section className='mt-32'>
           <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
        My Project's
      </h1>
      <div className='mx-auto grid grid-cols-3 gap-6 mt-10 '>
        
            {
                project.map(item => <li className='list-none' key={item.id}>
                <div  className='border-2 group rounded-[30px] bg-[rgba(22,26,49,1)] overflow-hidden '>
                    <Image src={'/project/dremhouse.png'} style={{width:'100%',height:'400px',}} className='rounded-t-3xl h-[400px] group-hover:scale-105 overflow-hidden transition-all duration-300'  width={400} height={250} alt=''></Image>
                   <div className='px-8 py-2'>
                    <h1 className='text-xl text-gray-300 mt-2 font-medium'>{item.name}</h1>
                    <p className='text-base text-justify mt-4 font-normal'>{item.description}</p>
                    <div className='flex justify-between my-6'>
                        <Link className='flex gap-x-3 text-base items-center px-6 py-2 border rounded-full border-purple-400' target='_blank' href={'/'}>Live View <FiMonitor className='text-xl'/> </Link>
                        <Link className='flex gap-x-3 text-base items-center px-6 py-2 border rounded-full border-purple-400' href={'/'}>GitHub Link <FaGithub className='text-xl'/></Link>
                    </div>
                   </div>
                </div>
                </li>)
            }
      
       
            {/* <div className=''>
                <Image src={'/project/assetFlow.png'}  style={{width:'100%',height:'400px'}} width={400} height={200} alt=''></Image>
            </div>
       
       
            <div className=''>
                <Image src={'/project/query.png'} style={{width:'100%',height:'400px'}}  width={400} height={250} alt=''></Image>
            </div> */}
       
      </div>
            
        </section>
    );
};

export default Project;