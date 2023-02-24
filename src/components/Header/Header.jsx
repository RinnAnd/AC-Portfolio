import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./logo.svg";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import resume from '../../assets/Andrés Casas CV.pdf'
import { Link } from "react-scroll";

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

  useEffect(() => {
    setEnter(true);
  }, []);

  return (
    <div className="header_box">
      <nav className="nav_bar">
        <CSSTransition in={enter} timeout={5000} classNames="fadein">
          <img
            className="logo_img"
            style={{ transitionDelay: "100ms" }}
            src={logo}
            onClick={() => navigate("/")}
          />
        </CSSTransition>
        <div className="links_box">
          <CSSTransition in={enter} timeout={5000} classNames="fadein">
            <div style={{ transitionDelay: "200ms" }}>
            <a href='#about' className="links" >
              about;
            </a>
            </div>
          </CSSTransition>
          <CSSTransition in={enter} timeout={5000} classNames="fadein">
            <div style={{ transitionDelay: "300ms" }}>
            <a href='#experience' className="links">
              experience;
            </a>
            </div>
          </CSSTransition>
          <CSSTransition in={enter} timeout={5000} classNames="fadein">
            <div style={{ transitionDelay: "400ms" }}>
            <a href='#contact' className="links">
              contact;
            </a>
            </div>
          </CSSTransition>
          <CSSTransition in={enter} timeout={5000} classNames="fadein">
            <div style={{ transitionDelay: "500ms" }}>
            <a className="cv_link" href={resume} download='AC-CV'>
              myCV;
            </a>
            </div>
          </CSSTransition>
          <CSSTransition in={enter} timeout={5000} classNames="fadein">
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
