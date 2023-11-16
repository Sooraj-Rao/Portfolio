import React from "react";
import { animate, motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";

const Experiance = ({ Dark }) => {
  const image = "../../assets/check.png";
  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.section
        id="experience"
        variants={Animate4}
        className=" md:pt-28 pt-24"
      >
        <p
          className={`section__text__p1 ${
            Dark ? " text-slate-700" : " text-slate-400"
          }`}
        >
          Here is{" "}
        </p>
        <h1 className="title">What I Know</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <motion.div
              className={`details-container ${
                !Dark ? "bg-slate-300" : "bg-white"
              } `}
              variants={Animate1}
            >
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container text-black">
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>React</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Tailwind CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Framer Motion</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Redux Toolkit</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </motion.div>
            <motion.div
              className={`details-container ${
                !Dark ? "bg-slate-300" : "bg-white"
              } `}
              variants={Animate5}
            >
              <h2 className="experience-sub-title">BackEnd Development</h2>
              <div className="article-container text-black ">
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src={image} alt="Experience icon" className="icon" />
                  <div>
                    <h3>PHP</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Experiance;
