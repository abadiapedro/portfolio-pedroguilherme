import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import ProfilePic from '../../assets/profile.jpg'; // Use o .JPG correto aqui

export default function Hero() {
  return (
    <section className="py-20 flex justify-center">
      <div className="w-full max-w-4xl bg-gray-800 dark:bg-[#161B22] rounded-2xl shadow-lg p-8 text-center">
        {/* Foto de Perfil */}
        <div className="flex justify-center">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg mb-6">
            <img
              src={ProfilePic}
              alt="Pedro Guilherme"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Nome */}
        <h1 className="text-4xl font-bold text-white mb-2">
          Pedro Guilherme
        </h1>

        {/* Descrição */}
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Desenvolvedor Web apaixonado por tecnologia, inovação e gestão de projetos digitais.
        </p>

        {/* Botão */}
        <a
          href="/curriculo.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
        >
          Ver Currículo
        </a>

        {/* Ícones Sociais */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://linkedin.com/in/pedro-guilherme-ga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/abadiapedro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://gitlab.com/abadiapedro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition">
            <FaGitlab size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

