import About from "../../components/About";
import Education from "../../components/Education";
import Experiences from "../../components/Experience";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import ScrollTop from "../../components/ScrollTop";
import Skills from "../../components/Skills";


export const Home = () => {
    return (
        <main className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors relative">
      <Navbar />
      <div className="pt-20">
        <About />
        <Projects />
        {/* <Experiences /> */}
        <Education />
        <Skills />
      </div>
      <Footer />
      <ScrollTop />
    </main>
    );
    }