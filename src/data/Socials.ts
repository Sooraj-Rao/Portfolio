import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@/component/icons";
import { siteMetadata } from "./siteMetaData.mjs";

export const Socials = [
  {
    name: "Email",
    link: "mailto:soorajrao360@gmail.com",
  },
  {
    name: "Twitter",
    link: siteMetadata.twitter,
  },
  {
    name: "Github",
    link: siteMetadata.github,
  },
  {
    name: "LinkedIn",
    link: siteMetadata.linkedin,
  },
];
