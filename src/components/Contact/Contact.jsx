import React, { useEffect, useState } from "react";
import "./Contact.css";
import Github from "./Github";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import Whatsapp from "./Whatsapp";
import { CSSTransition } from "react-transition-group";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [linkVis, setLinkVis] = useState(false);

  const [appear, setAppear] = useState(false);

  const { ref: contRef, inView: visible } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setLinkVis(true);
    setAppear(visible);
  });

  return (
    <div id="contact">
      <div className="centered_box" ref={contRef}>
      <CSSTransition in={appear} timeout={5000} classNames="appear">
        <div className="contact_text">
          
            <h2 className="contact_heading">So if you've learned enough...</h2>
         
            <p className="contact_p">
              Feel free to write to me on any of my socials, my inbox is always
              open for any new oportunities in whatever shape they may come.
            </p>
          
            <p className="contact_p">
              Or any questions you may have. I really do love moving some code
              around.
            </p>
          
          <a
            href="mailto:andre.ksas@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
           
              <div className="inbox">
                <h3 className="contact_mee">contact me;</h3>
              </div>
          </a>
        </div>
        </CSSTransition>
        <CSSTransition in={linkVis} timeout={5000} classNames="fadein">
          <div className="contact_links" style={{ transitionDelay: "1000ms" }}>
            <a href="https://www.linkedin.com/in/andrescasas11" target="_blank">
              <Linkedin />
            </a>
            <a href="https://github.com/RinnAnd" target="_blank">
              <Github />
            </a>
            <a href="https://www.instagram.com/andres.jsx/" target="_blank">
              <Instagram />
            </a>
            <a href="https://wa.me/573195946602" target="_blank">
              <Whatsapp />
            </a>
            <div className="string"></div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Contact;
