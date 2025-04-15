import About from "../../components/About";
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
        <Skills />
      </div>
      <Footer />
      <ScrollTop />
    </main>
    );
    }