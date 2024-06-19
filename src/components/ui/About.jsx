"use client"
import Image from "next/image";
import React from "react";
import TabsPage from "../Tabs/Tabs";

const About = () => {
  return (
    <section className="mt-32">
      <div className="flex flex-row-reverse mt-20 justify-around">
        <div className="lg:w-1/2">
          <h1 className="text-3xl text-gray-200 font-medium border-b-2 pb-2">
            About Me
          </h1>
          <p className="text-lg text-white mt-3 text-justify">
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
          <div>
            <TabsPage/>
          </div>
        </div>
        <div>
          <Image
            className="bg-[rgba(22,26,49,1)] w-fit h-fit rounded-lg"
            src={"/profile1.png"}
            width={500}
            height={700}
            alt=""
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
