import React, { useEffect, useState } from "react";
import "./Project.css";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

const Project = ({ project }) => {
  const { name, demonstration, code, description } = project;

  const { ref: newRef, inView: isVisible } = useInView({
    triggerOnce: true,
  });
  const [projectVis, setProjectVis] = useState(false);

  useEffect(() => {
    setProjectVis(isVisible);
  });

  return (
    <div className="project_box">
      <CSSTransition in={projectVis} timeout={5000} classNames="slideinX">
        <div className="information" ref={newRef}>
          <div className="name_div">
            <h2 className="project_name">{name}</h2>
          </div>
          <div className="demo_div">
            <a
              href={demonstration}
              target="_blank"
              className="project_links first"
            >
              Demo
            </a>
            <a href={code} target="_blank" className="project_links first">
              Code
            </a>
          </div>
          <div className="desc_div_dropdown">
            <p className="hoverme">learn more »</p>
            <div className="menu">
              <p className="description_text">{description}</p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Project;
