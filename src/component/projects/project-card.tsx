import Image from "next/image";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/component/utility/corosel";
import { GithubIcon } from "@/component/icons";
import Link from "next/link";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
  tags?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const query = "https://www.google.com/search?q=";

  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <div
        className={` duration-300  hover:scale-[1.05] scale-[1.01] hover:duration-300 `}
      >
        <Corosel images={props.imageUrl} aspectRatio={2.1} />
      </div>
      <div className="p-3 text-foreground sm:p-4">
        <Link href={props?.liveWebsiteHref} className="flex items-center gap-3">
          <span className="text-md font-semibold  hover:underline">{props.name}</span>
        </Link>
        <div className="flex items-center gap-3">
          {props?.tags?.map((item, i) => {
            return (
              <a
                target="_blank"
                href={query + item}
                key={i}
                className="cursor-pointer text-sm "
              >
                #{item}
              </a>
            );
          })}
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

