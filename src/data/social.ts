import { siteMetadata } from "./siteMetaData.mjs";

type Social = {
  name: string;
  link: string;
};

export const Socials: Social[] = [
  {
    name: "Email",
    link: `mailto:${siteMetadata.email}`,
  },
  {
    name: "LinkedIn",
    link: siteMetadata.linkedin,
  },
  {
    name: "X",
    link: siteMetadata.twitter,
  },
  {
    name: "Github",
    link: siteMetadata.github,
  },
];
