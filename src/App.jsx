import Navbar from "./component.jsx/Navbar";
import Home from "./component.jsx/Home";
import About from "./component.jsx/About";
import Skills from "./component.jsx/Skills";
import Projects from "./component.jsx/Projects";
import Experience from "./component.jsx/Experience";
function App()
{
    return(
        <>
        <div className="app-shell">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        </div>
        </>
    );
}
export default App;
