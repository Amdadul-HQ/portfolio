"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const pathName = usePathname()
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
    <nav className="container mx-auto py-2 flex justify-between items-center border-b border-purple-300 px-5 rounded-xl shadow-xl">
      <div className="text-gray-200 flex flex-col max-w-44 cursor-pointer">
        <h1 className="lg:text-3xl text-xl text-justify font-medium tracking-[7px]">Rimon</h1>
        <p className="text-gray-400 tracking-wide uppercase text-[9px] lg:text-xs font-normal">create you unique</p>
      </div>
      <ul className={`text-gray-400 lg:text-sm text-xl lg:text-left text-right flex lg:flex-row flex-col  transition-all duration-1000 ${isOpen ? 'right-6 top-20' : '-right-full top-20'} gap-x-14 lg:static fixed font-normal`}>
        {
            links.map((link,index )=> <Link className={`${pathName === link.path && "text-white"} hover:text-white transition-all duration-300`} href={link.path} key={index}>{link.title}</Link>  )
        }
      </ul>
      <div>
      <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
