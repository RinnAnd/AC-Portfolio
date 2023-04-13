import "./Home.css";
import react from "../../assets/React_Logo.png";
import redux from "../../assets/Redux_Logo.png";
import node from "../../assets/Node_Logo.png";
import typescript from "../../assets/TS_Logo.png";
import mui from "../../assets/MUI_logo.png";
import socket from "../../assets/Socket_logo.png";

const Home = () => {
  return (
    <div className="home_main">
      <div className="information_home">
        <div className="information_left">
          <h1>Fullstack JavaScript Developer</h1>
          <h4>
            Hi! I'm Andrés Casas, a very passionate developer located in
            Colombia
          </h4>
        </div>
        <div className="information_right">
          <div className="image"></div>
        </div>
      </div>
      <div className="stack_box">
        <div className="tech_stack">
          <h3>Tech Stack</h3>
        </div>
        <div className="stack_imgs">
          <img src={react} alt="reactlogo" width={70} />
          <img src={redux} alt="reduxlogo" width={70} />
          <img src={node} alt="nodelogo" width={70} />
          <img src={typescript} alt="tslogo" width={70} />
          <img src={mui} alt="muilogo" width={70} />
          <img src={socket} alt="socketlogo" width={70} />
        </div>
      </div>
    </div>
  );
};

export default Home;
