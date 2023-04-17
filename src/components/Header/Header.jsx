import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header_main">
      <nav className="header_nav">
        <a href="">
          <svg
            id="logo"
            width="49"
            height="53"
            viewBox="0 0 57 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.4023 47H24.5713V32.8643H17.7842V47H15.9531V20.0957C15.9531 19.2819 15.9857 18.4518 16.0508 17.6055C16.1159 16.7591 16.3438 15.9941 16.7344 15.3105C17.1413 14.627 17.7679 14.0736 18.6143 13.6504C19.4769 13.2109 20.6976 12.9912 22.2764 12.9912H26.4023V47ZM22.8379 14.627C21.959 14.627 21.2021 14.7002 20.5674 14.8467C19.9326 14.9932 19.4036 15.2454 18.9805 15.6035C18.5736 15.9453 18.2725 16.4173 18.0771 17.0195C17.8818 17.6217 17.7842 18.3786 17.7842 19.29V31.2285H24.5713V14.627H22.8379ZM39.293 22.8057V14.6025H37.1689C36.29 14.6025 35.5332 14.6758 34.8984 14.8223C34.2637 14.9525 33.7428 15.1966 33.3359 15.5547C32.929 15.8965 32.6279 16.3685 32.4326 16.9707C32.2373 17.5729 32.1396 18.3298 32.1396 19.2412V41.0674C32.1396 41.751 32.2048 42.3857 32.335 42.9717C32.4814 43.5413 32.7012 44.0459 32.9941 44.4854C33.3034 44.9085 33.694 45.2422 34.166 45.4863C34.6543 45.7305 35.2402 45.8525 35.9238 45.8525C37.0469 45.8525 37.8851 45.527 38.4385 44.876C39.0081 44.2249 39.293 43.2891 39.293 42.0684V37.6494H41.124V42.0928C41.124 43.7692 40.6927 45.0876 39.8301 46.0479C38.9674 47.0081 37.6816 47.4883 35.9727 47.4883C34.9473 47.4883 34.0684 47.3174 33.3359 46.9756C32.6198 46.6338 32.0339 46.1781 31.5781 45.6084C31.1387 45.0225 30.8132 44.3389 30.6016 43.5576C30.4062 42.7764 30.3086 41.9463 30.3086 41.0674V20.0713C30.3086 19.5342 30.3167 18.9889 30.333 18.4355C30.3493 17.8659 30.4144 17.3206 30.5283 16.7998C30.6585 16.2627 30.8457 15.7663 31.0898 15.3105C31.3503 14.8385 31.7083 14.4316 32.1641 14.0898C32.6361 13.748 33.2301 13.4795 33.9463 13.2842C34.6787 13.0726 35.5658 12.9668 36.6074 12.9668H41.124V22.8057H39.293Z"
              fill="white"
            />
            <path
              d="M11.7898 6.66842L28.5 1.05492L45.2102 6.66843L55.5562 21.3912V39.6088L45.2102 54.3316L28.5 59.9451L11.7898 54.3316L1.44383 39.6088V21.3912L11.7898 6.66842Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </a>
        <button className="toggle_button" onClick={() => setToggle(!toggle)}>
          {toggle ? <CgClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
        {toggle ? (
          <div className="toggle_menu">
            <Link
              onClick={() => setToggle(false)}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
            >
              About
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to="experience"
              spy={true}
              smooth={true}
              duration={900}
              offset={-80}
            >
              Experience
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to="contact"
              spy={true}
              smooth={true}
              duration={1100}
              offset={50}
            >
              Contact
            </Link>
          </div>
        ) : (
          <></>
        )}
        <div className="refs">
          <Link to="about" spy={true} smooth={true} duration={500} offset={50}>
            About
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={900}
            offset={-80}
          >
            Experience
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1100}
            offset={50}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
