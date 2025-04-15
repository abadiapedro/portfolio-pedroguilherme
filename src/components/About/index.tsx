import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Profile from '../../assets/profile.jpg';

export const About = () => {

  const navigate = useNavigate();


  return (
    <section
      id="about"
      className="w-full flex flex-col justify-start pt-4 items-center px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors"
    >
      <motion.div
        className="max-w-6xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Foto */}
        <img
          src={Profile}
          alt="Foto de Pedro Guilherme"
          className="w-32 h-32 rounded-full border-4 border-white mb-6 object-cover"
        />

        {/* Título e Texto */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg leading-relaxed mb-4">
            Sou <strong>Pedro Guilherme Guimarães Abadia</strong>, profissional de Tecnologia da Informação com experiência em gestão de projetos, suporte técnico e desenvolvimento de sistemas.
          </p>

          <button
            onClick={() => navigate('/resume')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver Currículo
          </button>

          {/* Ícones de Contato */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://linkedin.com/in/pedroguimaraesabadia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pedroguilhermeabadia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:pedroabadia19@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-3xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
