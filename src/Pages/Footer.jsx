import React from "react";

const Footer = ({ Dark, show }) => {
  return (
    <div>
      <footer className=" relative text-center py-10">
        <div
          className={`  sm:right-24 sm:bottom-24 text-5xl cursor-pointer
        bottom-5 right-5 z-50 
          ${show > 200 ? "fixed" : "hidden"}
          `}
          onClick={() => window.scrollTo(0, 0)}
        >
          <i
            className={`fa-solid fa-circle-up
          ${!Dark ? "sm:text-white text-blue-600 hover:text-teal-400 " : "text-black hover:text-teal-800"}
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
