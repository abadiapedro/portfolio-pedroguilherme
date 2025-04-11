import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ProfilePic from '../../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaGitlab, FaSun, FaMoon } from 'react-icons/fa';

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <aside className="w-60 h-screen bg-white dark:bg-gray-900 fixed top-0 left-0 flex flex-col items-center justify-between py-10 shadow-md">
      
      {/* Topo: Foto, Nome e Links Sociais */}
      <div className="flex flex-col items-center space-y-4">
        
        {/* Foto */}
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={ProfilePic}
            alt="Pedro Guilherme"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Nome */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white text-center">
          Pedro Guilherme
        </h1>

        {/* Subtítulo */}
        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
          Desenvolvedor de Software
        </p>

        {/* Ícones sociais */}
        <div className="flex space-x-3 mt-2">
          <a href="https://linkedin.com/in/pedro-guilherme-ga" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-blue-500">
            <FaLinkedin size={16} />
          </a>
          <a href="https://github.com/abadiapedro" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-gray-400">
            <FaGithub size={16} />
          </a>
          <a href="https://gitlab.com/abadiapedro" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-300 hover:text-red-500">
            <FaGitlab size={16} />
          </a>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col items-center space-y-4 mt-8 text-sm">
          <Link
            to="about"
            smooth
            spy
            activeClass="text-blue-500"
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Sobre
          </Link>
          <Link
            to="skills"
            smooth
            spy
            activeClass="text-blue-500"
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth
            spy
            activeClass="text-blue-500"
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Projetos
          </Link>
          <Link
            to="experience"
            smooth
            spy
            activeClass="text-blue-500"
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Experiência
          </Link>
          <Link
            to="education"
            smooth
            spy
            activeClass="text-blue-500"
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Educação
          </Link>
          <Link
            to="contact"
            smooth
            spy
            activeClass="text-blue-500"
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Contato
          </Link>
        </nav>
      </div>

      {/* Rodapé: Botão de Tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 border rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </aside>
  );
}
