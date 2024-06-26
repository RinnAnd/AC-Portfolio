import { useState } from "react";
import "./App.css";
import Lightmode from "./components/Lightmode/Lightmode";
import Lumin from "./components/lumin/lumin";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Main from "./sections/main/Main";
import Projects from "./sections/projects/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  const [light, setLight] = useState(false);

  function showWarning() {
    setLight(true);
    setTimeout(() => {
      setLight(false);
    }, 4000);
  }

  return (
    <div className="main">
      <AnimatePresence>{light && <Lightmode />}</AnimatePresence>
      <Lumin />
      <div className="intro">
        <Main setLight={showWarning} />
      </div>
      <div className="content">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
