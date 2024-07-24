import { siteMetadata } from "./siteMetaData.mjs";

type Social = {
  name: string;
  link: string;
};

export const Socials: Social[] = [
  {
    name: "email",
    link: `mailto:${siteMetadata.email}`,
  },
  {
    name: "linkedin",
    link: siteMetadata.linkedin,
  },
  // {
  //   name: "x",
  //   link: siteMetadata.twitter,
  // },
  {
    name: "github",
    link: siteMetadata.github,
  },
];
