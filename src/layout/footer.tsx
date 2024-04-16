import { ContactDialog } from "@/component/contact/contact.dialog";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { Socials } from "@/data/Socials";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/component/icons";

// eslint-disable-next-line react/jsx-key
const icon = [<MailIcon />, <TwitterIcon />, <GithubIcon />, <LinkedinIcon />];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex h-64 w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent/70 p-8 text-background sm:p-12 md:gap-12 lg:p-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Socials
          </span>
        </div>
        <div className=" flex items-center justify-center gap-x-8">
          {Socials.map((item, i) => {
            return (
              <Link
                href={item?.link}
                className=" hover:text-white"
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
      <div className="flex w-full flex-col items-center justify-between gap-8   md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2024 Sooraj Rao</span>
        {/* <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
