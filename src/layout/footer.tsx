"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowTopRight } from "@/component/icons";
import { IoMdMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { Socials } from "../data/social";

const icon = [
  <IoMdMail size={25} />,
  <FaLinkedin size={25} />,
  <FaSquareXTwitter size={25} />,
  <FaGithub size={25} />,
];

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      id="footer"
      className="flex w-full flex-col items-center gap-20 px-6 py-8 sm:px-14 md:px-20"
    >
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.6,
        }}
        className="mx-auto flex h-72 w-full sm:max-w-7xl flex-col gap-8 rounded-2xl  p-8 text-foreground sm:p-12 md:gap-12 lg:p-4"
      >
        <div className="text-center w-full ">
          <span
            className="inline-block rounded-full  bg-gradient-to-br from-foreground/70 to-foreground bg-clip-text    px-3 py-1
           sm:text-4xl text-2xl font-bold text-transparent  lg:text-6xl
          "
          >
            {"Connect with me"}
          </span>
        </div>
        <div className="flex items-center justify-center gap-x-8">
          {Socials.map((item, i) => (
            <Link
              href={item?.link}
              target="_blank"
              title={item.name}
              key={item.name}
            >
              <div className="  flex lg:w-20 h-20 transform   flex-col items-center justify-center rounded-lg text-foreground lg:shadow-xl duration-300 hover:-translate-y-2 dark:text-accent dark:hover:text-white    sm:hover:bg-accent/30 sm:hover:duration-500">
                <h1>{icon[i]}</h1>
                <h1 className=" lg:block hidden">{item?.name}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className=" text-center  ">
          <a
            title="Open contact form"
            href={siteMetadata.contactForm}
            className="group relative inline-flex  items-center  justify-center overflow-hidden rounded bg-foreground  p-4 px-6 py-2 font-medium text-foreground shadow-md transition duration-300 ease-out"
          >
            <span className="ease absolute  inset-0 flex h-full w-full -translate-x-full items-center justify-center  text-background duration-300 group-hover:translate-x-0">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="ease  absolute flex h-full w-full transform items-center justify-center text-background transition-all duration-300 group-hover:translate-x-full">
              Need a form ?
            </span>
            <span className="invisible relative">Need a form?</span>
          </a>
        </div>
      </motion.div>
      <div className="flex justify-center">
        {showArrow && (
          <div
            title="scroll to top"
            onClick={() => window.scrollTo(0, 0)}
            className="fixed sm:bottom-10 bottom-5 right-5 sm:right-10 sm:h-16 h-10 rotate-[-45deg] cursor-pointer rounded-full bg-foreground p-1 text-white duration-300 hover:bg-black dark:bg-transparent dark:hover:bg-accent/50"
          >
            <ArrowTopRight />
          </div>
        )}
        <span className="text-foreground">©2024 Sooraj Rao</span>
      </div>
    </footer>
  );
}
