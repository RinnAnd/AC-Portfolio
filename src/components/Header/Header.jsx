import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./logo.svg";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import resume from '../../assets/Andrés Casas CV.pdf'
import useTimeout from "../../Hooks/useTimeout";

const NavMenu = () => {
  return (
    <>
      <div className="nav_menu_box">
        <div className="nav_menu_links">
          <a href='#about' className="nav_menu_link">about;</a>
          <a href='#experience' className="nav_menu_link">experience;</a>
          <a href='#contact' className="nav_menu_link">contact;</a>
          <a download='AC-CV' href={resume} className="nav_menu_cv_link">myCV;</a>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const navigate = useNavigate();

  const [enter, setEnter] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    setEnter(true)
  },[])

  return (    
    <div className="header_box">
      <nav className="nav_bar">
        <CSSTransition in={enter} timeout={1100} classNames="fadein">
          <img
            className="logo_img"
            style={{ transitionDelay: "100ms" }}
            src={logo}
            onClick={() => navigate("/")}
          />
        </CSSTransition>
        <div className="links_box">
          <CSSTransition in={enter} timeout={1200} classNames="fadein">
            <a href='#about' className="links" style={{ transitionDelay: "200ms" }}>
              about;
            </a>
          </CSSTransition>
          <CSSTransition in={enter} timeout={1300} classNames="fadein">
            <a href='#experience' className="links" style={{ transitionDelay: "300ms" }}>
              experience;
            </a>
          </CSSTransition>
          <CSSTransition in={enter} timeout={1400} classNames="fadein">
            <a href='#contact' className="links" style={{ transitionDelay: "400ms" }}>
              contact;
            </a>
          </CSSTransition>
          <CSSTransition in={enter} timeout={1500} classNames="fadein">
            <a className="cv_link" href={resume} download='AC-CV' style={{ transitionDelay: "500ms" }}>
              myCV;
            </a>
          </CSSTransition>
          <CSSTransition in={enter} timeout={1200} classNames="fadein">
            <div className="nav_menu" style={{ transitionDelay: "200ms" }}>
              {toggle ? (
                <RiCloseLine
                  color="#fff"
                  size={32}
                  onClick={() => setToggle(false)}
                />
              ) : (
                <RiMenu3Line
                  color="#fff"
                  size={27}
                  onClick={() => setToggle(true)}
                />
              )}
              {toggle && (                
                <NavMenu />
              )}
            </div>
          </CSSTransition>
        </div>
      </nav>
    </div>
  );
};

export default Header;
