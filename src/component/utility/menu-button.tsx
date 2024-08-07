import { SVGMotionProps, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export interface MenuLogoProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function MenuLogo({ isModalOpen, toggleModal }: MenuLogoProps) {
  return (
    <button
      aria-label="open menu"
      onClick={toggleModal}
      className={`
        relative z-[999] flex h-12 w-12 select-none items-center gap-1 rounded-full bg-background p-3 py-1 font-semibold shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:bg-zinc-900 dark:ring-accent/50 md:hidden`}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 23 23"
        className="mt-1 stroke-foreground dark:stroke-foreground"
        animate={isModalOpen ? "open" : "close"}
      >
        <Path
          variants={{
            close: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            close: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            close: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </motion.svg>
    </button>
  );
}
