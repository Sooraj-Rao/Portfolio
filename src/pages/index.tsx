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
  }
);

const ProjectShowcase = dynamic(
  () => import("@/component/projects/project-showcase"),
  {
    ssr: true,
  }
);

export default function Home() {
  return (
    <>
      <NextSeo
        title="Sooraj Rao | Web and Apps Developer"
        description={siteMetadata.description}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: siteMetadata.headerTitle + "" + siteMetadata.description,
          description: siteMetadata.description,
          images: [
            {
              url: `${siteMetadata.siteUrl} + /dp.png`,
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
            content: siteMetadata.contentText,
          },
        ]}
      />
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
