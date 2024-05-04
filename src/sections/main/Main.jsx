import { Github, Instagram, LinkedIn } from "../../components/Icons/Icons";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-section">
      <div>
        <h1>Andrés Casas</h1>
        <h3>Backend Developer</h3>
        <p>
          Fueling your apps and webistes. Working the magic behind the scenes.
        </p>
      </div>
      <div className="tags">
        <a href="#about-main">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="links">
        <a href="https://github.com/RinnAnd">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/andrescasas11/">
          <LinkedIn />
        </a>
        <a href="https://www.instagram.com/andres.jsx/">
          <Instagram />
        </a>
      </div>
    </div>
  );
};

export default Main;
