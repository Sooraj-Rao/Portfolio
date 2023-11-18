import React from "react";
import { motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";

const Contact = () => {
  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate2}
    >
      <section id="contact" className="sm:my-0 my-10">
        <p
          className={`section__text__p1 text-slate-800 
           `}
        >
          Get in Touch
        </p>
        <h1 className="title">Contact Me</h1>
        <div
          className={`contact-info-upper-container  lg:w-1/3 sm:w-1/2 w-11/12
            shadow-[0rem_.5rem_1rem_1px]
            shadow-slate-800
        `}
        >
          <div className="contact-info-container sm:py-0 py-3 group group-hover:text-teal-900">
            <h1
              className={`icon contact-icon 
                   text-black  group-hover:text-teal-900
            `}
            >
              <i className="fa-solid fa-envelope"></i>
            </h1>
            <div>
              <h3
                className={` font-medium cursor-pointer 
                    text-black  group-hover:text-teal-900
                    sm:text-xl
                   text-[1.05rem]
                `}
                onClick={() =>
                  window.open("mailto:soorajrao180@gmail.com", "_blank")
                }>
                soorajrao180@gmail.com

              </h3>
            </div>
          </div>
          <div className="contact-info-container sm:py-0 py-3  group group-hover:text-teal-900   ">
            <h1
              className={`icon contact-icon
             
                  text-black  group-hover:text-teal-900
              
            `}
            >
              <i className="fa-brands fa-whatsapp "></i>
            </h1>
            <div>
              <h3
                className={`
               
                     text-black  group-hover:text-teal-900
                
                 font-medium cursor-pointer
                 sm:text-xl
                 text-[1.05rem]
                
                `}
                onClick={() =>
                  window.open(
                    "https://wa.me/918970889647?text=Hi%20there!",
                    "_blank"
                  )
                }
              >
                Whatsapp
              </h3>
            </div>
          </div>
          <div className="contact-info-container sm:py-0 py-3 group">
            <h1 className="icon contact-icon">
              <i
                className={`fa-brands fa-linkedin 
               
                     text-black  group-hover:text-teal-900
                
              `}
              ></i>
            </h1>
            <div>
              <h3
                className={`
               
                     text-black  group-hover:text-teal-900
                     sm:text-xl
                     text-[1.05rem]
                 font-medium cursor-pointer
                `}
                onClick={() =>
                  window.open("https://www.LinkedIn.com", "_blank")
                }
              >
                LinkedIn
              </h3>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
