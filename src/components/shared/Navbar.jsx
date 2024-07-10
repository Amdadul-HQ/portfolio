"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'
import Image from "next/image";

const Navbar = () => {
  const [pathName,setpathname] = useState('')
  const scroll=()=> window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
      const scrolled = window.scrollY
      console.log(scrolled);
      if(scrolled<730){
        setpathname('#home')
      }
      if(scrolled>=730 && scrolled<2373){
        setpathname('#service')
      }
      if(scrolled>=2373 && scrolled<3767){
        setpathname('#project')
      }
      if(scrolled>=3767 && scrolled<4489){
        setpathname('#skills')
      }
      if(scrolled>= 4489 && scrolled < 5394){
        setpathname('#about')
      }
      if(scrolled>=5394 && scrolled <6100){
        setpathname('#blogs')
      }
      if(scrolled>=6100){
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
            path:"/"
        },
        {
            title:"SKILL's",
            path:"#myskills"
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
          title:"CONTACT",
            path:"#contact"
        }
    ]
    const [isOpen, setOpen] = useState(false)
  return (
    <nav className="container fixed max-w-screen-xl mx-auto py-4 flex justify-between items-center border-b border-purple-300 px-5 rounded-xl shadow-xl">
      <div className="text-gray-200 flex flex-col max-w-44 cursor-pointer">
        <Image src='/riwhitelogo.png' width={140} height={80} alt=""/>
        {/* <h1 className="lg:text-3xl text-xl text-justify font-medium tracking-[7px]">Rimon</h1>
        <p className="text-gray-400 tracking-wide uppercase text-[9px] lg:text-xs font-normal">create you unique</p> */}
      </div>
      <ul className={`text-gray-400 lg:text-sm text-xl mt-2 lg:gap-y-0 gap-y-5 lg:text-left text-right flex lg:flex-row flex-col  transition-all duration-1000 ${isOpen ? 'right-6 top-20' : '-right-full top-20'} gap-x-14 lg:static fixed font-normal`}>
        {
            links.map((link,index )=> <Link className={`${pathName === link.path && "text-white"} hover:text-white transition-all duration-300`} href={link.path} key={index}>{link.title}</Link>  )
        }
      </ul>
      <div className="lg:hidden">
      <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
