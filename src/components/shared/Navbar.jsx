"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname()
    const links = [
        {
            title:"HOME",
            path:"/"
        },
        {
            title:"ABOUT",
            path:"/about"
        },
        {
            title:"PROJECT",
            path:"/project"
        },
        {
            title:"CONTACT",
            path:"/contact"
        }
    ]
  return (
    <nav className="container mx-auto py-2 flex justify-between items-center border-b border-purple-300 px-5 rounded-xl shadow-xl">
      <div className="text-gray-200 flex flex-col max-w-44 cursor-pointer">
        <h1 className="text-3xl text-justify font-medium tracking-[7px]">Rimon</h1>
        <p className="text-gray-400 tracking-wide uppercase text-xs font-normal">create you unique</p>
      </div>
      <ul className="text-gray-400 text-sm space-x-20 font-normal">
        {
            links.map((link,index )=> <Link className={`${pathName === link.path && "text-white"} hover:text-white transition-all duration-300`} href={link.path} key={index}>{link.title}</Link>  )
        }
      </ul>
    </nav>
  );
};

export default Navbar;
