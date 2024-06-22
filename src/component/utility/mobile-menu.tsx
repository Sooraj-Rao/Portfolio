import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";

import ThemeSwitch from "@/component/utility/theme-switch";
import { type NavbarProps } from "@/layout/navbar";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog as="div" onClose={setOpenMenu}>
       
        <div className="fixed inset-0 flex items-center justify-center  z-[9] ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 bottom-full"
            enterTo="opacity-100 bottom-[15%]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 bottom-[15%]"
            leaveTo="opacity-0 bottom-full"
          >
            <Dialog.Panel className="pointer-events-none absolute flex min-h-[100%] w-full flex-col items-center justify-center overflow-y-auto rounded-b-2xl  bg-background  px-6 py-8 text-foreground shadow-lg shadow-foreground/10 md:px-10 md:py-16">
              <div className="pointer-events-auto flex flex-col items-center gap-6  text-center">
                {routes.map((link, i) => (
                  <button
                    key={link.title}
                    className="group relative py-2 text-2xl font-medium"
                    onClick={() => handleClick(link.href)}
                  >
                    <span
                    ></span>
                    {link.title}
                  </button>
                ))}
                <ThemeSwitch setClose={setOpenMenu} />
              </div>
              <div className="absolute bottom-0 py-6">©2024 Sooraj Rao</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
