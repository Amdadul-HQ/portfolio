"use client";
import React from "react";
import contact from "../../../public/contact.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { createContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const templateParams = {
      from_name: email,
      from_phone: phone,
      to_name: "Amdadul Haque",
      message,
    };
    emailjs
      .send('service_paxw2th', "template_rl643jf", templateParams, {
        publicKey: "KXBk2HwgyJvgkY2vl",
      })
      .then(
        (response) => {
        //   console.log("SUCCESS!", response.status, response.text);
          form.reset()
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <motion.section
      id="contact"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      className="flex min-h-screen flex-col justify-center"
    >
      <h1 className="text-3xl text-gray-100 text-center mx-auto font-medium w-fit rounded-2xl px-4 border-purple-400 border-b-2 pb-2">
        Contact with me
      </h1>
      <div className="flex lg:px-0 px-5 items-center lg:flex-row flex-col-reverse mt-10">
        <div className="lg:w-1/2">
          <h1 className="lg:text-5xl text-white font-semibold">
            Let’s work together!
          </h1>
          <p className="lg:text-xl font-medium text-white mt-4">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
          <div className="mt-5 space-y-3">
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="flex items-center gap-x-3 text-white">
                <p className="bg-gradient-to-t rounded-full from-[#8750f7] to-[#2a1454] w-[50px] h-[50px] flex justify-center items-center">
                  <IoCallOutline className="lg:text-2xl font-medium" />
                </p>
                <div>
                  <p className="lg:text-xl">Phone</p>
                  <p className="lg:text-xl font-semibold">+8801756171239</p>
                </div>
              </div>
              <div className="flex items-center gap-x-3 text-white">
                <p className="bg-gradient-to-t rounded-full from-[#8750f7] to-[#2a1454] w-[50px] h-[50px] flex justify-center items-center">
                  <MdOutlineMail className="lg:text-2xl font-medium" />
                </p>
                <div>
                  <p className="lg:text-xl">Email</p>
                  <p className="lg:text-xl font-semibold">
                    rimonamdadul301@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 text-white">
              <p className="bg-gradient-to-t rounded-full from-[#8750f7] to-[#2a1454] w-[50px] h-[50px] flex justify-center items-center">
                <CiLocationOn className="lg:text-2xl font-medium" />
              </p>
              <div>
                <p className="lg:text-xl">Address</p>
                <p className="lg:text-xl font-semibold">Feni, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={sendEmail}>
              <div className="flex lg:flex-row flex-col gap-y-5 gap-x-5">
                <input
                  required
                  className="bg-[rgba(22,26,49,1)] h-11 block lg:w-full px-5 rounded-lg border border-purple-300"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                />
                <input
                  required
                  className="bg-[rgba(22,26,49,1)] h-11 block lg:w-full px-5 rounded-lg border border-purple-300"
                  type="tel"
                  name="phone"
                  id=""
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-4">
                <textarea
                  required
                  className="bg-[rgba(22,26,49,1)] h-40 pt-4 block w-full px-5 rounded-lg border border-purple-300"
                  name="message"
                  placeholder="Message"
                  id=""
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="border-purple-300 px-6 text-white bg-[#2A1454] py-2 text-xl font-medium border-2 mt-3 rounded-full"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Lottie animationData={contact}></Lottie>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
