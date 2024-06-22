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
      <AboutHero />

      <ExperienceShowcaseList title="Experiance" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
