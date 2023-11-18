import React, { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import "./style.css";
import "./mediaqueries.css";
import Profile from "./Pages/Profile";
import Experiance from "./Pages/Experiance";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
  const [show, setshow] = useState(null);
  const [menu, setmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setshow(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Light">
      <Navbar menu={menu} setmenu={setmenu} />
      <div className={`${menu && "Filter"}`}>
        <Profile />
        <Experiance />
        <Project />
        <Contact />
        <Footer show={show} />
      </div>
    </div>
  );
};

export default App;
