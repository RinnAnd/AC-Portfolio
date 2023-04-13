import "./Socials.css";
import { Github, Instagram, Gmail, Linkedin } from "./SocialSvgs";

const Socials = () => {
  return (
    <div className="socials_main">
      <a target="_blank" href="https://github.com/RinnAnd">
      <Github />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/andrescasas11/">
      <Linkedin />
      </a>
      <a target="_blank" href="mailto:andre.ksas@gmail.com">
      <Gmail />
      </a>
      <a target="_blank" href="https://www.instagram.com/andres.jsx/">
      <Instagram />
      </a>
      <div className="blob2"></div>
    </div>
  );
};

export default Socials;
