import { NextSeo } from "next-seo";

import ProjectCard from "@/component/projects/project-card";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { PROJECTS_CARD } from "@/data/projects";

export default function Projects() {
  return (
    <>
     <NextSeo
        title="Projects by Sooraj Rao | Web and Apps Developer"
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
      <section className="mx-auto mb-20 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
   
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28 ">
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
