"use client";
import { ContactDialog } from "@/component/contact/contact.dialog";
import { Socials } from "@/data/Socials";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/component/icons";

const icon = [<MailIcon />, <TwitterIcon />, <GithubIcon />, <LinkedinIcon />];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="  mx-auto  flex h-72 w-full max-w-7xl flex-col gap-8 rounded-2xl border p-8  text-background sm:p-12 md:gap-12 lg:p-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase text-accent text-white md:text-sm lg:text-base">
            Socials
          </span>
        </div>
        <div className=" flex items-center justify-center gap-x-8">
          {Socials.map((item, i) => {
            return (
              <Link
                href={item?.link}
                className=" flex  h-20 w-20 flex-col items-center  justify-center rounded-lg text-accent duration-300  hover:bg-accent/30 hover:text-black hover:shadow-xl  hover:duration-500 dark:text-accent dark:hover:text-white"
                key={item.name}
              >
                <h1>{icon[i]}</h1>
                <h1>{item?.name}</h1>
              </Link>
            );
          })}
        </div>
        <div className=" flex justify-center">
          <ContactDialog />
        </div>
      </div>
      <div className="flex justify-center ">
        <span className="text-foreground">©2024 Sooraj Rao</span>
      </div>
    </footer>
  );
}
