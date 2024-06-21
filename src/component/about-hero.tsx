import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { motion } from "framer-motion";
import FadeRight from "@/animation/fade-right";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-x-14 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full overflow-hidden  rounded-full bg-neutral-200 dark:bg-neutral-800  
       sm:w-[10rem] sm:h-[10rem] lg:w-[25rem] lg:h-[25rem] 
       ">
        <motion.div
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 0.4,
          }}
        >
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.6}>
              <Image
                src={"/dp.png"}
                width={100}
                height={100}
                className="h-auto sm:scale-125 lg:mt-14 sm:mt-5 w-full px-0 xl:px-10"
                alt="hero image"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="
            bg-gradient-to-br from-foreground/70 to-foreground text-transparent bg-clip-text
            text-6xl font-bold  sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Sooraj Rao
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I turn vision into reality with code. Whether I&apos;m working on
              a website or any digital product, I bring my commitment to design
              excellence and user-centered thinking to every project I work on.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest projects showcasing my expertise in Reactjs,
              Nextjs, Javascript, Typescript and web development.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <a
              href={siteMetadata.location}
              target="_blank"
              className="text-lg font-medium text-foreground hover:underline"
            >
              Mangalore, India
            </a>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
