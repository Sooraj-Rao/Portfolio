import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { Badge } from "@/components/ui/badge";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto sm:max-w-7xl  text-center">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <span className="  text-lg font-semibold text-foreground">Heyy there, I am </span>
              <h1
                className=" 
                bg-gradient-to-r sm:bg-gradient-to-t from-black  to-black/60 bg-clip-text py-2 text-transparent 
              text-5xl  font-extrabold  dark:from-white sm:dark:to-white/10 dark:to-white/50  sm:text-6xl md:text-7xl xl:text-8xl   "
              >
                Sooraj Rao
              </h1>

              <span
                className="
                bg-gradient-to-t from-black to-black/60  bg-clip-text  py-2 font-semibold text-transparent
              dark:from-white dark:to-white/10  md:text-3xl"
              >
                Web and Apps developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className=" flex items-center justify-center  ">
                <div className=" shadow shadow-foreground/10 p-4  mt-8 flex items-center rounded-full text-center font-semibold  dark:text-zinc-200 sm:text-base md:text-2xl">
                  <span className=" text-base text-foreground   ">
                  I specialize in developing web and mobile applications.
                  </span>
                </div>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
