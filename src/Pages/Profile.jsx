import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";

const Profile = () => {
  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className=" sm:py-10"
    >
      <section id="profile">
        <motion.div className="section__pic-container" variants={Animate1}>
          <img src="../../assets/profile-pic.png" alt="Profile Pic" />
        </motion.div>
        <motion.div className="section__text" variants={Animate5}>
          <p className={` text-slate-700`}>Hello, I'm</p>
          <h1 className="title">Sooraj</h1>
          <p
            className={`section__text__p2  text-slate-700
            `}
          >
            Full-Stack Developer
          </p>
          <div className="">
            <button
              className={`sm:p-4 p-3 font-semibold  rounded-full cursor-pointer outline-none border-none 
                 profilebtn2
               z-10 overflow-hidden relative group 
              bg-slate-900
               
  `}
              onClick={() => window.open("../../Resuume Word.docx")}
            >
              <span
                className={`duration-700 text-white 
                z-50 
                 group-hover:text-black
                  `}
              >
                Download CV
              </span>
            </button>
            <button
              className={` sm:py-4 sm:px-6 p-3 font-semibold   cursor-pointer  ml-3 rounded-full border-none   profilebtn2
               z-10 overflow-hidden relative group 
             bg-slate-900`}
              onClick={() => (location.href = "#contact")}
            >
              <span
                className={`duration-700 text-white 
                 z-50 
               group-hover:text-black
                  `}
              >
                Contact Me
              </span>
            </button>
          </div>
          <div id="socials-container">
            <div
              className="icon w-10"
              onClick={() =>
                window.open("https://github.com/Sooraj-Rao", "_blank")
              }
            >
              <span className=" text-4xl  ">
                <i
                  className={`fa-brands fa-github text-slate-900 
                  hover:text-[2.5rem] hover:duration-100 duration-100
                hover:text-teal-900 
                `}
                ></i>
              </span>
            </div>
            <div
              className="icon  w-10"
              onClick={() => window.open("https://www.linkedin.com", "_blank")}
            >
              <h1 className=" text-4xl   overflow-hidden  ">
                <i
                  className={`fa-brands fa-linkedin shadow-2xl
                  hover:text-[2.5rem] hover:duration-100 duration-100
                  text-slate-900
                 hover:text-teal-900 
                  `}
                ></i>
              </h1>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Profile;
