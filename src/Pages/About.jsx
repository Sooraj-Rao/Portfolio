import React from "react";
import { motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";

const About = ({ Dark }) => {
  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate2}
    >
      <section id="about">
        <p
          className={`section__text__p1 ${
            !Dark ? " text-slate-400 " : " text-slate-700"
          }`}
        >
          Get To Know More
        </p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <span className=" text-3xl">
                  <i className="fa-solid fa-briefcase "></i>
                </span>
                <h3 className=" ">Experience</h3>
                <p
                  className={`section__text__p1 pt-2 ${
                    !Dark ? " text-slate-300 " : " text-slate-900"
                  }`}
                >
                  2+ years <br />
                  Web Development
                </p>
              </div>
              <div className="details-container">
                <span className=" text-3xl">
                  <i className={`fa-solid fa-award `}></i>
                </span>
                <h3 className=" ">Education</h3>
                <p
                  className={`section__text__p1 pt-2 ${
                    !Dark ? " text-slate-300 " : " text-slate-900"
                  }`}
                >
                  B.C.A. Bachelors Degree
                  <br />
                  M.C.A. Masters Degree
                </p>
              </div>
            </div>
            <div className="text-container">
              <p className={`${!Dark ? " text-white" : " text-black"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
