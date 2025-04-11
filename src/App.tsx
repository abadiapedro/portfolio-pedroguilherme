import { About } from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <main className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors relative">
      <Navbar />
      <div className="pt-20">
        <About />
        <Projects />
        <Experiences />
        <Education />
        <Skills />
      </div>
      <Footer />
      <ScrollTop />
    </main>
  );
}

export default App;
