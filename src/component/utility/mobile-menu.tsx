import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";

import ThemeSwitch from "@/component/utility/theme-switch";
import { type NavbarProps } from "@/layout/navbar";

export interface MobileMenuProps extends NavbarProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  routes,
  isModalOpen,
  setIsModalOpen,
}: MobileMenuProps) {
  const router = useRouter();

  const handleClick = (href: string) => {
    setIsModalOpen(false);
    router.push(href);
  };
  return (
    <div className={`fixed z-[-9] flex items-center left-0 h-screen  w-screen duration-500 bg-background justify-center 
    ${!isModalOpen?' top-[-50rem]  duration-500':'top-0 duration-500'}
    `}>
      <div className="pointer-events-auto flex flex-col items-center gap-6  text-center">
        {routes.map((link) => (
          <button
            key={link.title}
            className="group relative py-2 text-2xl font-medium"
            onClick={() => handleClick(link.href)}
          >
            {link.title}
          </button>
        ))}
        <ThemeSwitch setClose={setIsModalOpen} />
      </div>
      <div className="absolute bottom-0 py-6">©2024 Sooraj Rao</div>
    </div>
  );
}
