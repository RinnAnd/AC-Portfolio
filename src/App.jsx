import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  const left = clientX - document.body.scrollLeft;
  const top = clientY - document.body.scrollTop;

  blob.animate({
    left: `${left}px`,
    top: `${top}px`
  }, {duration: 2000, fill: "forwards"})
};

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
