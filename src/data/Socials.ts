import { siteMetadata } from "./siteMetaData.mjs";

export const Socials = [
  {
    name: "Email",
    link: `mailto:${siteMetadata.email}`,
  },
  {
    name: "X",
    link: siteMetadata.twitter,
  },
  {
    name: "LinkedIn",
    link: siteMetadata.linkedin,
  },
  {
    name: "Github",
    link: siteMetadata.github,
  },
];
