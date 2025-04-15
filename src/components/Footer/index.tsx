import { FaLinkedin, FaGithub, FaEnvelope, FaGitlab } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-6 bg-white dark:bg-gray-900 text-center text-gray-600 dark:text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">

        {/* Ícones de Contato */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/pedro-guilherme-ga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/abadiapedro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.gitlab.com/abadiapedro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaGitlab />
          </a>
          <a
            href="mailto: abadiapedro98@gmail.com"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Texto final */}
        <div>
          © {new Date().getFullYear()} Pedro Guilherme. {t("footer.rights")}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
