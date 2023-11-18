import React from "react";

const Footer = ({ show }) => {
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
              text-teal-950  shadow-black shadow-[0px_0px_.6rem_1px] 
               group-hover:text-teal-900  
               bg-white 
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
