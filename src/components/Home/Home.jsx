import "./Home.css";
import { Tooltip } from "@chakra-ui/react";
import react from "../../assets/React_Logo.png";
import mysql from "../../assets/MySQL_Logo.png";
import node from "../../assets/Node_Logo.png";
import typescript from "../../assets/TS_Logo.png";
import mongo from "../../assets/Mongo_Logo.png";
import graph from "../../assets/graphQL_Logo.png";

const Home = () => {
  return (
    <div className="home_main">
      <div className="information_home">
        <div className="information_left">
          <p>Hi, my name is</p>
          <h1>Andrés Casas</h1>
          <h5>
            I'm a full stack developer specializing in back-end development. I
            love bulding and designing great digital experiences. Currently I am
            engaged in software development at{" "}
            <a href="https://therocketcode.com/" target="_blank">
              Rocket Code.
            </a>
          </h5>
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
          <Tooltip label="React" bg="gray.300" aria-label="A tooltip">
            <img src={react} alt="reactlogo" width={70} />
          </Tooltip>
          <Tooltip label="MySQL" bg="gray.300" aria-label="A tooltip">
            <img src={mysql} alt="reduxlogo" width={70} />
          </Tooltip>
          <Tooltip label="Node.js" bg="gray.300" aria-label="A tooltip">
            <img src={node} alt="nodelogo" width={70} />
          </Tooltip>
          <Tooltip label="TypeScript" bg="gray.300" aria-label="A tooltip">
            <img src={typescript} alt="tslogo" width={70} />
          </Tooltip>
          <Tooltip label="MongoDB" bg="gray.300" aria-label="A tooltip">
            <img src={mongo} alt="muilogo" width={70} />
          </Tooltip>
          <Tooltip label="GraphQL" bg="gray.300" aria-label="A tooltip">
            <img src={graph} alt="socketlogo" width={70} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Home;
