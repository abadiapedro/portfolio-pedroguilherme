import { motion } from "framer-motion";


export const Education = () => {
  const education = [
    {
      course: "Bacharelado em Sistemas de Informação",
      institution: "Universidade Evangélica de Goiás - UniEVANGÉLICA",
      period: "2021 - 2025 (Em andamento)",
      description: "Formação focada em desenvolvimento de software, banco de dados, redes de computadores e gestão de tecnologia da informação.",
    },
    {
      course: "Técnico em Eletrotécnica",
      institution: "Instituto Federal de Goiás - IFG",
      period: "2016 - 2018",
      description: "Formação técnica voltada para projetos elétricos, automação e manutenção de sistemas elétricos e eletrônicos.",
    },
  ];

  return (
    <section id="education" className="w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-gray-300 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors"
      >
        <div className="max-w-6xl w-full bg-gray-300 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors">

          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Formação Acadêmica</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Um resumo da minha trajetória acadêmica nas áreas de Tecnologia e Engenharia.
            </p>
          </div>

          {/* Lista de formações */}
          <div className="w-full flex flex-col gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-1">{edu.course}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-300 mb-3">
                  <span>{edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Education;
