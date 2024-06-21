import { NextSeo } from "next-seo";

import AboutHero from "@/component/about-hero";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import ExperienceShowcaseList from "@/component/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experiance";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Sooraj Rao | Web and Apps Developer"
        description="Learn more about Sooraj Rao, a dedicated React and Frontend Developer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Sooraj Rao - React and Frontend Developer",
          description:
            "Dive into the story of Sooraj Rao, a React and Frontend Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
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
            content: siteMetadata.contentText,
          },
        ]}
      />
      <AboutHero />

      <ExperienceShowcaseList title="Experiance" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
