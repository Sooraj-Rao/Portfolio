/* eslint-disable react/jsx-key */
"use client";
import { ContactDialog } from "@/component/contact/contact.dialog";
import { Socials } from "@/data/Socials";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ArrowTopRight,
} from "@/component/icons";
import { useEffect, useState } from "react";

const icon = [<MailIcon />, <TwitterIcon />, <GithubIcon />, <LinkedinIcon />];

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
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.6,
        }}
        className="mx-auto flex h-72 w-full max-w-7xl flex-col gap-8 rounded-2xl border p-8 text-background sm:p-12 md:gap-12 lg:p-4"
      >
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase text-accent text-white md:text-sm lg:text-base">
            Socials
          </span>
        </div>
        <div className="flex items-center justify-center gap-x-8">
          {Socials.map((item, i) => (
            <Link
              href={item?.link}
              target="_blank"
              className="flex h-20 w-20 flex-col items-center justify-center rounded-lg text-accent duration-300 dark:text-accent dark:hover:text-white sm:hover:bg-accent/30 sm:hover:text-black sm:hover:shadow-xl sm:hover:duration-500"
              key={item.name}
            >
              <h1>{icon[i]}</h1>
              <h1>{item?.name}</h1>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <ContactDialog />
        </div>
      </motion.div>
      <div className="flex justify-center">
        {showArrow && (
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="fixed bottom-10 right-10 h-16 rotate-[-45deg] cursor-pointer rounded-full bg-accent dark:bg-transparent dark:hover:bg-accent/50 p-1 text-white duration-300 hover:bg-black"
          >
            <ArrowTopRight />
          </div>
        )}
        <span className="text-foreground">©2024 Sooraj Rao</span>
      </div>
    </footer>
  );
}
