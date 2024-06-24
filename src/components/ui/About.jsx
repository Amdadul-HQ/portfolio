"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import TabsPage from "../Tabs/Tabs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section id="about" className="flex min-h-screen flex-col justify-center">
      <div className="flex lg:flex-row-reverse flex-col-reverse lg:px-0 px-5  mt-20 justify-around overflow-hidden">
        <motion.div
        variants={fadeIn('left',0.2)}
        initial="hidden"
        whileInView={"show"}
         className="lg:w-9/12  w-full lg:px-6">
          <h1 className="text-3xl text-gray-200 font-medium border-b-2 pb-2">
            About Me
          </h1>
          <p className="text-sm text-white mt-3 text-justify">
            Hello i am passionate <strong>Web Developer</strong> Amdadul Haque
            Bhuiyan, I embarked on my journey in technology after completing my
            diploma in Electrical Engineering from Feni Polytechnic institute.
            Although my academic background is't from software development, my
            fascination with technology has been a lifelong affair. From
            disassembling gadgets as a child to building websites and
            applications, I've always been drawn to the creative and
            problem-solving aspects of technology. Driven by my innate curiosity
            and determination to excel, I immersed myself in learning of skills
            essential for modern Web Development.
          </p>
          <div className="">
            <TabsPage/>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('right',0.2)}
        initial="hidden"
        whileInView={"show"}
        className=""
        >
          <Image
            className="bg-[rgba(22,26,49,1)] w-fit h-fit rounded-lg"
            src={"/profile1.png"}
            width={500}
            height={700}
            alt=""
          ></Image>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
