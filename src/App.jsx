import "./App.css";
import Lumin from "./components/lumin/lumin";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Main from "./sections/main/Main";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <div className="main">
      <Lumin />
      <div className="intro">
        <Main />
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
