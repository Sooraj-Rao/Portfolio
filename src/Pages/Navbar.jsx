import React, { useState } from "react";

const Navbar = ({ Dark, setDark }) => {
  const [menu, setmenu] = useState(false);

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
                href="#profile"
                className={`
               text-white  font-medium
               ${Dark ? "hover:text-black" : "hover:text-teal-400"}
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
                ${Dark ? "hover:text-black" : "hover:text-teal-400"}
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
                ${Dark ? "hover:text-black" : "hover:text-teal-400"}
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
                ${Dark ? "hover:text-black" : "hover:text-teal-400"}
                `}
              >
                Contact
              </a>
            </li>
            <li className=" h-7 cursor-pointer " onClick={() => setDark(!Dark)}>
              <i
                className={`fa-solid fa-circle-half-stroke  text-white
                  `}
              ></i>
            </li>
          </ul>
        </div>
      </nav>
      <nav className=" z-50 NavBg h-20 flex sm:hidden">
        <div className={`logo italic ${!Dark ? "text-white" : "text-black"}`}>
          Sooraj Rao
        </div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menu && "open"}  ${
              !Dark ? "text-white" : "text-black"
            }
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
            className={`${
              Dark ? "Light2" : "Dark2"
            }  shadow shadow-slate-300 menu-links z-50 ${
              menu && "open"
            } mt-9 w-fit px-10 `}
          >
            <li>
              <a
                href="#profile"
                onClick={toggleMenu}
                className={`${menu && "open"}
                ${!Dark ? "text-white" : "text-black"}
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
                ${!Dark ? "text-white" : "text-black"}
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
                ${!Dark ? "text-white" : "text-black"}
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
                ${!Dark ? "text-white" : "text-black"}
                `}
              >
                Contact
              </a>
            </li>
            <li
              className=" h-7 cursor-pointer pb-2  flex justify-center items-center"
              onClick={() => {
                setDark(!Dark);
                toggleMenu();
              }}
            >
              <i
                className={`fa-solid fa-circle-half-stroke ${
                  !Dark ? " text-white" : "text-black"
                } `}
              ></i>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
