import React from "react";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/Contact/Contact";
import "./Andres.css";

const Andres = () => {
  return (
    <>
      <div className="all">
        <Header />
        <Intro />
        <About />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default Andres;
