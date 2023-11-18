import React, { useState } from "react";

const Navbar = ({ menu, setmenu }) => {
  function toggleMenu() {
    setmenu(!menu);
  }

  return (
    <div className=" sticky sm:top-5 top-0 z-50  ">
      <nav className="mx-auto rounded-full NavBg h-14 w-fit px-10 hidden sm:flex ">
        <div>
          <ul className="nav-links text-xl">
            <li>
              <a
                onClick={() => {
                  toggleMenu;
                  window.scrollTo(0, 0);
                }}
                className={` cursor-pointer
                text-white  font-medium
                hover:text-teal-400
                `}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`
                text-white  font-medium
                hover:text-teal-400
                `}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`
                text-white  font-medium
                hover:text-teal-400
                `}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`
                text-white  font-medium
                hover:text-teal-400
                `}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className=" z-50 NavBg2 h-20 flex sm:hidden">
        <div className={`logo italic text-white `}>Sooraj Rao</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menu && "open"}  text-white
            text-2xl
            `}
            onClick={toggleMenu}
          >
            {!menu ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-x"></i>
            )}
          </div>
          <div
            className={`
            Light2
              shadow shadow-slate-300 menu-links z-50 ${
                menu && "open"
              } mt-7 w-fit px-10 `}
          >
            <li>
              <a
                onClick={() => {
                  toggleMenu();
                  window.scrollTo(0, 0);
                }}
                className={`${menu && "open"} cursor-pointer
                 text-black
                `}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={toggleMenu}
                className={`${menu && "open"}
                text-black
                `}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className={`${menu && "open"}
                text-black
                `}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className={`${menu && "open"}
                 text-black
                `}
              >
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
