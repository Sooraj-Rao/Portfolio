import React, { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import "./style.css";
import "./mediaqueries.css";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Experiance from "./Pages/Experiance";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const App = () => {
  const [Dark, setDark] = useState(true);
  const [show, setshow] = useState(null);
  
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
    <div className={`${!Dark ? "Dark" : "Light"} duration-500`}>
      <Navbar Dark={Dark} setDark={setDark} />
      <Profile Dark={Dark} />
      {/* <About Dark={Dark} /> */}
      <Experiance Dark={Dark} />
      <Project Dark={Dark} />
      <Contact Dark={Dark} />
      <Footer Dark={Dark} show={show} />
    </div>
  );
};

export default App;
