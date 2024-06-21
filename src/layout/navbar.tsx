import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/component/utility/menu-button";
import ThemeSwitch from "@/component/utility/theme-switch";
import MobileMenu from "@/component/utility/mobile-menu";
// import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href?: string;
  scroll?: boolean;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const pathName = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50   px-6 py-8 sm:px-14 sm:pt-10 md:px-20">
      <div className="mx-auto flex items-center justify-center lg:max-w-7xl">
        <nav className="hidden items-center gap-2 rounded-full   px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md  dark:ring-foreground/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li
                  key={index}
                  className="my-3 transition-transform duration-100 "
                >
                  <Link
                    href={_link.href}
                    className={`
                      ${
                        pathName === _link.href
                          ? "bg-foreground font-semibold text-background hover:bg-foreground/80 dark:hover:text-foreground"
                          : "text-foreground hover:bg-foreground/10"
                      }
                      group relative mx-3 rounded-full px-3 py-2    duration-200 hover:bg-accent/20 
                      `}
                  >
                    {_link.href === pathName && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-accent  group-hover:bg-accent/80"
                      ></motion.span>
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
        </nav>
        <div className=" flex  justify-end w-full md:w-0">
        <AnimatePresence>
          <MenuLogo open={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </AnimatePresence>
        </div>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
