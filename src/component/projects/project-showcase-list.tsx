import Link from "next/link";

import { motion } from "framer-motion";

export type ProjectShowcaseListItem = {
  index: number;
  title: string;
  href: string;
  tags: string[];
  image: string;
};

export interface ProjectShowcaseListProps {
  data: ProjectShowcaseListItem;
  activeProject: number;
  toggleList: (index: number) => void; //eslint-disable-line no-unused-vars
}

export default function ProjectShowcaseList(props: ProjectShowcaseListProps) {
  return (
    <motion.div
      className="group flex gap-4 "
      onHoverStart={() => props.toggleList(props.data.index)}
      onFocus={() => props.toggleList(props.data.index)}
    >
      <span
        className={`hidden text-6xl font-bold transition-colors duration-300 lg:block
          ${
            props.activeProject === props.data.index
              ? "text-foreground"
              : "text-foreground/70"
          }`}
      >
        {props.data.index + 1}.
      </span>
      <span className="text-xl font-bold text-accent transition-colors duration-300 sm:text-4xl md:text-5xl lg:hidden">
        {props.data.index + 1}.
      </span>
      <div className="flex flex-col gap-2">
        <Link href={props.data.href} className="relative max-w-max">
          <span
            className={`hidden text-6xl font-bold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:invisible hover:after:visible after:border-[3px] after:border-foreground after:duration-300 hover:after:w-full lg:block
              ${
                props.activeProject === props.data.index
                ? "text-foreground"
                : "text-foreground/70"
              }`}
          >
            {props.data.title}
          </span>
          <span className="text-xl font-semibold text-foreground transition-colors duration-300 hover:underline  sm:text-4xl md:text-5xl lg:hidden">
            {props.data.title}
          </span>
          <span
            className={`lg:block absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full
              ${props.activeProject === props.data.index ? "w-full" : "w-0"}`}
          ></span>
        </Link>
        <p className="max-w-xl text-base font-semibold text-muted-foreground sm:text-lg">
          {props.data.tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </motion.div>
  );
}
