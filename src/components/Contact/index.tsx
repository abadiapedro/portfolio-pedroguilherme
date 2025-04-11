// src/components/Contact/index.tsx
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-2xl bg-[#161B22] rounded-2xl shadow-lg p-8 text-center">
        {/* Título */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Contato
        </h2>

        {/* Descrição */}
        <p className="text-gray-400 mb-6">
          Interessado em trabalhar junto ou trocar uma ideia? Me mande uma mensagem!
        </p>

        {/* E-mail */}
        <a
          href="mailto:abadiapedro98@gmail.com"
          className="inline-block text-blue-500 hover:underline mb-6"
        >
          abadiapedro98@gmail.com
        </a>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://linkedin.com/in/pedro-guilherme-ga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/abadiapedro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://gitlab.com/abadiapedro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition"
          >
            <FaGitlab size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
