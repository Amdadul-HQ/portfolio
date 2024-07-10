"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'
import Image from "next/image";

const Navbar = () => {
  const [pathname,setpathname] = useState('')
  const [active,setActive] = useState(false)
  const scroll=()=> window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
      const scrolled = window.scrollY
      // console.log(scrolled);
      if(scrolled<610){
        setpathname('#home')
        if(scrolled>115){
          setActive(true)
        }
      }
      if(scrolled>=610 && scrolled<1200){
        setpathname('#skills')
      }
      if(scrolled>=1200 && scrolled<2642){
        setpathname('#project')
      }
      if(scrolled>=2642 && scrolled<3332){
        setpathname('#about')
      }
      if(scrolled>= 3332 && scrolled < 4455){
        setpathname('#blogs')
      }
      if(scrolled>=4100){
        setpathname('#contact')
      }
      setActive(true)
    }
    else{
      setActive(false)
    }
  })
  useEffect(()=>{
    scroll()
  },[pathname])

  
    const links = [
        {
            title:"HOME",
            path:"#home"
        },
        {
            title:"SKILLs",
            path:"#skills"
        },
        {
          title:"PROJECT",
          path:"#project"
        },
        {
            title:"ABOUT",
            path:"#about"
        },
        {
          title:"BLOGS",
          path:"#blogs"
        },
        {
          title:"CONTACT",
            path:"#contact"
        }
    ]
    const [isOpen, setOpen] = useState(false)
  return (
    <nav className={`container z-50 ${active && 'bg-[rgb(14,16,29)]'} fixed max-w-screen-xl mx-auto py-4 flex justify-between items-center border-b border-purple-300 px-5 rounded-xl shadow-xl`}>
      <div className="text-gray-200 flex flex-col max-w-44 cursor-pointer">
        <Image src='/riwhitelogo.png' width={140} height={80} alt=""/>
        {/* <h1 className="lg:text-3xl text-xl text-justify font-medium tracking-[7px]">Rimon</h1>
        <p className="text-gray-400 tracking-wide uppercase text-[9px] lg:text-xs font-normal">create you unique</p> */}
      </div>
      <ul className={`text-gray-400 z-50 lg:text-sm text-xl mt-2 lg:gap-y-0 gap-y-5 lg:text-left text-right flex lg:flex-row flex-col  transition-all duration-1000 ${isOpen ? 'right-6 top-20' : '-right-full top-20'} gap-x-14 lg:static fixed font-normal`}>
        {
            links.map((link,index )=> <Link className={`${pathname === link.path && "text-white"} hover:text-white transition-all duration-300`} href={link.path} key={index}>{link.title}</Link>  )
        }
      </ul>
      <div className="lg:hidden">
      <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
