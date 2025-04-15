import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaDocker, FaFigma, FaJs } from 'react-icons/fa';
import { SiPostgresql, SiTypescript, SiLaravel, SiJirasoftware, SiTrello } from 'react-icons/si';
import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = [
    { name: "ReactJS", icon: <FaReact size={40} /> },
    { name: "NodeJS", icon: <FaNodeJs size={40} /> },
    { name: "PHP", icon: <FaPhp size={40} /> },
    { name: "Laravel", icon: <SiLaravel size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Banco de Dados", icon: <FaDatabase size={40} /> },
    { name: "Jira", icon: <SiJirasoftware size={40} /> },
    { name: "Trello", icon: <SiTrello size={40} /> },
    { name: "Figma", icon: <FaFigma size={40} /> },
  ];

  return (
    <section 
    id="skills" 
     className="w-full flex flex-col justify-start pt-4 items-center px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors"
    >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors"
    >

      {/* <div className="max-w-6xl w-full bg-gray-200 dark:bg-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors"> */}
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Algumas das principais tecnologias e ferramentas que domino.
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
              <div className="text-lg font-semibold text-center">{skill.name}</div>
            </div>
          ))}
        </div>

      {/* </div> */}
      </motion.div>
    </section>
  );
};

export default Skills;
