import React from "react";
import { motion } from "framer-motion";
import { Animate1, Animate5 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";

const Project = ({ Dark }) => {
  const Proj = [
    {
      img: "../../assets/project-1.png",
      name: "Online Mechanic Booking",
      tech: "React, Tailwind, ExpressJs, MongoDB",
      github: "https://github.com/Sooraj-Rao/FindMyMechanic",
      live: "https://find-my-mechanic.vercel.app/",
    },
    {
      img: "../../assets/project-1.png",
      name: "Shopping (E-Commerce) Application ",
      tech: "React, Tailwind, ExpressJs, MongoDB",
      github: "",
      live: "",
    },
    {
      img: "../../assets/project-1.png",
      name: "Movie Reviewing Platform",
      tech: "React, Firebase-OTP-Authentication, Firebase-Firestore",
      github: "https://github.com/Sooraj-Rao/MovieRulz",
      live: "https://movie-rulz.vercel.app/",
    },
    {
      img: "../../assets/project-1.png",
      name: "Basic Swiggy Clone",
      tech: "React, Tailwind, Swiggy API, Redux Toolkit",
      github: "",
      live: "",
    },
    {
      img: "../../assets/project-1.png",
      name: "QR Code Generator (API)",
      tech: "HTML,CSS,Javascript",
      github: "https://github.com/Sooraj-Rao/QR-Generator",
      live: "https://sooraj-rao.github.io/QR-Generator/",
    },
    {
      img: "../../assets/project-1.png",
      name: "URL shortner (API)",
      tech: "HTML,CSS,Javascript",
      github: "https://github.com/Sooraj-Rao/URL-shortner",
      live: "https://sooraj-rao.github.io/URL-shortner/",
    },
  ];
  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate4}
    >
      <section id="projects" className="pt-24">
        <p
          className={`section__text__p1 ${
            Dark ? "text-slate-800" : "text-slate-400"
          }`}
        >
          Browse My Recent
        </p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-contsainer">
          <div className=" flex flex-wrap gap-5 justify-evenly ">
            {Proj.map((item, i) => {
              let github = item.github;
              let live = item.live;
              return (
                <motion.div
                  className={` w-80 p-2  group  rounded-xl   ${
                    Dark ? "bg-slate-100" : "bg-slate-300"
                  }`}
                  key={i}
                  variants={Animate4}
                >
                  <div className="article-container  relative flex md:items-center md:justify-center justify-between ">
                    <div className=" absolute group-hover:flex flex  md:hidden gap-5 z-40 px-2 py-1  text-slate-300 w-11/12  justify-between md:justify-center ">
                      <span
                        className=" cursor-pointer hover:text-teal-500 flex items-center gap-2 bg-slate-900  px-2 rounded-md"
                        onClick={() => window.open(github, "_blank")}
                      >
                        <span className=" md:block hidden">Code</span>
                        <i className=" text-2xl fa-brands fa-github"></i>
                      </span>
                      <span
                        className=" cursor-pointer hover:text-teal-500  flex items-center gap-2 bg-slate-900 px-2 py-1 rounded-md"
                        onClick={() => window.open(live, "_blank")}
                      >
                        <span className=" md:block hidden">Live</span>
                        <i className="text-2xl fa-solid fa-arrow-up-right-from-square"></i>
                      </span>
                    </div>
                    <div className="  group-hover:opacity-50  hover:duration-500 duration-500">
                      <img
                        src="./assets/project-1.png"
                        alt="Project 1"
                        className="project-img "
                      />
                    </div>
                  </div>
                  <h2
                    className={` py-2 text-black sm:text-2xl text-xl
                  `}
                  >
                    {item.name.length > 15
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </h2>
                  <h1 className=" font-semibold font-sans text-black pb-4 text-base">
                    {item.tech}
                  </h1>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
