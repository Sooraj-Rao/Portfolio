import dynamic from "next/dynamic";
import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/component/landing-hero";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const SkillsShowcase = dynamic(
  () => import("@/component/skills/skills-showcase"),
  {
    ssr: true,
  },
);

const ProjectShowcase = dynamic(
  () => import("@/component/projects/project-showcase"),
  {
    ssr: true,
  },
);

export default function Home() {
  return (
    <>
      <NextSeo
        title="Sooraj Rao | Web and Apps Developer"
        description="Explore the professional portfolio of Sooraj Rao, a skilled React and Frontend Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Sooraj Rao - React and Frontend Developer Portfolio",
          description:
            "Dive into the world of web development with Sooraj Rao. Discover a React and Frontend Developer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Sooraj Rao - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:siteMetadata.contentText
          },
        ]}
      />
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
