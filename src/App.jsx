import Home from "./Home";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
     <div id="home">
        <Home />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
