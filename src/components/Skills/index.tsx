import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaDocker, FaFigma, FaJs } from 'react-icons/fa';
import { SiPostgresql, SiTypescript, SiLaravel, SiJirasoftware, SiTrello } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { key: "react", icon: <FaReact size={40} /> },
    { key: "node", icon: <FaNodeJs size={40} /> },
    { key: "php", icon: <FaPhp size={40} /> },
    { key: "laravel", icon: <SiLaravel size={40} /> },
    { key: "typescript", icon: <SiTypescript size={40} /> },
    { key: "javascript", icon: <FaJs size={40} /> },
    { key: "postgresql", icon: <SiPostgresql size={40} /> },
    { key: "docker", icon: <FaDocker size={40} /> },
    { key: "database", icon: <FaDatabase size={40} /> },
    { key: "jira", icon: <SiJirasoftware size={40} /> },
    { key: "trello", icon: <SiTrello size={40} /> },
    { key: "figma", icon: <FaFigma size={40} /> },
  ];

  return (
    <section 
      id="skills" 
      className="w-full flex flex-col justify-start mt-8 mb-8 items-center px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-4 flex flex-col items-center transition-colors"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-gray-700 dark:text-gray-200">
            {t("skills.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-2">
                {skill.icon}
              </div>
              <div className="text-lg font-semibold text-center">
                {t(`skills.list.${skill.key}`)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
