import React from "react";

const Footer = ({ Dark, show }) => {
  return (
    <div>
      <footer className=" relative text-center py-10">
        <div
          className={`  sm:right-24 sm:bottom-24 text-5xl p-[2px] cursor-pointer 
        bottom-5 right-5 z-50  group rounded-full 
          ${show > 200 ? "fixed" : "hidden"}
          `}
          onClick={() => window.scrollTo(0, 0)}
        >
          <i
            className={`fa-solid fa-circle-up p-1 rounded-full
          ${
            !Dark
              ? "sm:text-white text-blue-600 hover:text-teal-400 group-hover:shadow-slate-700 group-hover:shadow-[0px_0px_1rem_1px]  "
              : "text-black hover:text-teal-800 group-hover:shadow-black group-hover:shadow-[0px_0px_1rem_1px] "
          }
          `}
          ></i>
        </div>
        <p>
          Developed By{" "}
          <span
            className=" text-blue-600 cursor-pointer"
            onClick={() => window.open("https://www.LinkedIn.com", "_blank")}
          >
            Sooraj
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
