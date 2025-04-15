import Navbar from '../../components/Navbar';
import Profile from '../../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope, FaWhatsapp, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { BsFillBriefcaseFill, BsFillPersonFill, BsFillBookFill, BsGlobe2 } from 'react-icons/bs';
import Footer from "../../components/Footer";
import ScrollTop from '../../components/ScrollTop';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

type Experience = {
  company: string;
  roles: {
    title: string;
    period: string;
    description: string;
  }[];
};


export const Resume = () => {
  const { t } = useTranslation();

  const educationList = t("resume.education.list", { returnObjects: true }) as string[];

  const techSkills = [
    { name: 'nodejs', level: '85%' },
    { name: 'reactjs', level: '90%' },
    { name: 'php', level: '75%' },
    { name: 'laravel', level: '75%' },
    { name: 'postgresql', level: '80%' },
    { name: 'docker', level: '70%' },
  ];

  const softSkills = ['lideranca', 'comunicacao', 'gestao', 'trabalho'];

  const experiences = t("resume.experience.list", { returnObjects: true }) as Experience[];


  return (
    <>
      <Navbar />
      <section
        id="resume"
        className="w-full min-h-screen flex flex-col justify-start pt-20 items-center px-4 md:px-8 py-8 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors"
      >
        <div className="w-full max-w-6xl mb-6">
          <a
            href="/"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            <FaArrowLeft className="mr-2" /> {t("resume.backHome")}
          </a>
        </div>
        <motion.div
  className="max-w-6xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>

          <div className="flex flex-col items-center mb-12">
            <img src={Profile} alt="Pedro Guilherme" className="w-32 h-32 rounded-full border-4 border-white mb-4 object-cover" />
            <h1 className="text-3xl font-bold mb-1">Pedro Guilherme Guimarães Abadia</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Analista de Sistemas | Gestor de Projetos | Desenvolvedor</p>
            <div className="flex gap-6 mt-4 text-2xl text-blue-600 dark:text-blue-400">
              <a href="https://wa.me/5562981535567" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/in/pedro-guilherme-ga" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/abadiapedro" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://gitlab.com/abadiapedro" target="_blank" rel="noopener noreferrer"><FaGitlab /></a>
              <a href="mailto:abadiapedro98@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsFillPersonFill /> {t("resume.about.title")}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("resume.about.description")}
                </p>
              </div>
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsFillBriefcaseFill /> {t("resume.experience.title")}
                </h2>
                <div className="space-y-10">
                  {experiences.map((exp, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{exp.company}</h3>
                      <div className="flex flex-col gap-6 pl-4 border-l-2 border-blue-400 dark:border-blue-300 mt-4">
                        {exp.roles.map((role, idx) => (
                          <div key={idx}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="text-lg font-semibold">{role.title}</h4>
                              <span className="text-sm text-gray-500 dark:text-gray-300">{role.period}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{role.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-12 border-l border-gray-400 dark:border-gray-600 pl-6">
              <div>
                <h2 className="text-xl font-bold mb-4">{t("resume.tech.title")}</h2>
                <div className="space-y-2">
                  {techSkills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{t(`resume.tech.list.${skill.name.toLowerCase()}`)}</span>
                      </div>
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: skill.level }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">{t("resume.soft.title")}</h2>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300">
                      {t(`resume.soft.list.${skill}`)}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsFillBookFill /> {t("resume.education.title")}
                </h2>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {educationList.map((item, index) => (
  <li key={index}>{item}</li>
))}

                </ul>
              </div>
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsGlobe2 /> {t("resume.languages.title")}
                </h2>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>{t("resume.languages.list.portuguese")}</li>
                  <li>{t("resume.languages.list.english")}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/PedroGuilherme.pdf"
              download
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
            >
              <FaDownload className="inline mb-1 mr-2" />
              {t("resume.download")}
            </a>
          </div>
        </motion.div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Resume;