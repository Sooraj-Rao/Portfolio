import React from "react";
import { motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";

const Contact = ({ Dark }) => {
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
          className={`section__text__p1 ${
            Dark ? "text-slate-800" : "text-slate-300"
          } `}
        >
          Get in Touch
        </p>
        <h1 className="title">Contact Me</h1>
        <div
          className={`contact-info-upper-container  lg:w-1/3 sm:w-1/2 w-11/12
        
        ${
          Dark
            ? "  shadow-[0rem_.5rem_1rem_1px]"
            : "  shadow-[inset_0rem_0rem_1rem_2px]"
        } 
        ${Dark ? " shadow-slate-800" : " shadow-slate-500"} 
        `}
        >
          <div className="contact-info-container sm:py-0 py-3 group">
            <h1
              className={`icon contact-icon 
              ${
                !Dark
                  ? "text-white  group-hover:text-teal-400"
                  : "text-black  group-hover:text-teal-900"
              }
            `}
            >
              <i className="fa-solid fa-envelope"></i>
            </h1>
            <div>
              <h3
                className={` font-medium cursor-pointer
                ${
                  !Dark
                    ? "text-white  group-hover:text-teal-400"
                    : "text-black  group-hover:text-teal-900"
                }
                `}
                onClick={() =>
                  window.open("mailto:soorajrao180@gmail.com", "_blank")
                }
              >
                soorajrao180@gmail.com
              </h3>
            </div>
          </div>

          <div className="contact-info-container sm:py-0 py-3  group   ">
            <h1
              className={`icon contact-icon
              ${
                !Dark
                  ? "text-white  group-hover:text-teal-400"
                  : "text-black  group-hover:text-teal-900"
              }
            `}
            >
              <i className="fa-brands fa-whatsapp "></i>
            </h1>
            <div>
              <h3
                className={`
                ${
                  !Dark
                    ? "text-white  group-hover:text-teal-400"
                    : "text-black  group-hover:text-teal-900"
                }
                 font-medium cursor-pointer
                
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
                ${
                  !Dark
                    ? "text-white  group-hover:text-teal-400"
                    : "text-black  group-hover:text-teal-900"
                }
              `}
              ></i>
            </h1>
            <div>
              <h3
                className={`
                ${
                  !Dark
                    ? "text-white  group-hover:text-teal-400"
                    : "text-black  group-hover:text-teal-900"
                }
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
