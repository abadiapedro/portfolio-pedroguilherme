import Navbar from '../../components/Navbar';
import Profile from '../../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaGitlab, FaEnvelope, FaWhatsapp, FaDownload } from 'react-icons/fa';
import { BsFillBriefcaseFill, BsFillPersonFill, BsFillBookFill, BsGlobe2 } from 'react-icons/bs';
import Footer from "../../components/Footer";

export const Resume = () => {
  const techSkills = [
    { name: 'NodeJS', level: '85%' },
    { name: 'ReactJS', level: '90%' },
    { name: 'PHP', level: '75%' },
    { name: 'Laravel', level: '75%' },
    { name: 'PostgreSQL', level: '80%' },
    { name: 'Docker', level: '70%' },
  ];

  const softSkills = ['Liderança', 'Comunicação', 'Gestão de Projetos', 'Trabalho em Equipe'];

  const experiences = [
    {
      company: "UniEVANGÉLICA - Universidade Evangélica de Goiás",
      roles: [
        {
          title: "Analista de Sistemas Nível II",
          period: "Março 2025 - Atual",
          description: "Desenvolvimento e manutenção de sistemas web utilizando PHP, Laravel, JavaScript, NodeJS e ReactJS. Atuação em plataformas CMS, sistemas de agendamento e controle acadêmico, além de criação de hotsites institucionais.",
        },
        {
          title: "Analista de Sistemas Nível I",
          period: "Setembro 2023 - Março 2025",
          description: "Desenvolvimento de sistemas internos e apoio no levantamento de requisitos e modelagem de processos, utilizando tecnologias como ReactJS, NodeJS, Strapi, Prisma e SQL Server.",
        },
      ],
    },
    {
      company: "Pedro Guilherme Guimarães Abadia Consultoria em TI",
      roles: [
        {
          title: "Gerente de Projetos de TI",
          period: "Abril 2023 - Agosto 2023",
          description: "Gestão de projetos de TI com metodologias ágeis e ferramentas como Jira, Confluence e Hubstaff. Coordenação de equipes de desenvolvimento de software.",
        },
      ],
    },
    {
      company: "Unika Sistemas",
      roles: [
        {
          title: "Analista de Suporte Júnior",
          period: "Janeiro 2023 - Abril 2023",
          description: "Suporte técnico a sistemas ERP e PDV, instalação e configuração de sistemas Android e Desktop. Atuação também como analista de testes (QA) em aplicações Java e Android.",
        },
        {
          title: "Estagiário de Suporte de TI",
          period: "Maio 2022 - Dezembro 2022",
          description: "Atendimento ao cliente e suporte técnico a sistemas de gestão. Implantação de metodologia ágil (Scrum) e documentação de fluxos de atividades.",
        },
      ],
    },
    {
      company: "Salutar Informática (Certifica Anápolis)",
      roles: [
        {
          title: "Agente de Registro",
          period: "Setembro 2019 - Janeiro 2020",
          description: "Atuação no processo de emissão de certificados digitais e validação de documentos junto a clientes.",
        },
      ],
    },
    {
      company: "Prefeitura Municipal de Goianésia",
      roles: [
        {
          title: "Estagiário de TI",
          period: "Janeiro 2019 - Julho 2019",
          description: "Manutenção de computadores e impressoras, suporte aos usuários e acompanhamento de atividades do SysAdmin.",
        },
        {
          title: "Estagiário de Eletrotécnica",
          period: "Março 2017 - Dezembro 2018",
          description: "Elaboração de projetos elétricos, planilhas orçamentárias e acompanhamento de obras de infraestrutura.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="resume"
        className="w-full min-h-screen flex flex-col justify-start pt-24 items-center px-4 md:px-8 py-8 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors"
      >
        <div className="max-w-6xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors">

          {/* Top Profile */}
          <div className="flex flex-col items-center mb-12">
            <img
              src={Profile}
              alt="Pedro Guilherme"
              className="w-32 h-32 rounded-full border-4 border-white mb-4 object-cover"
            />
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
            {/* Left Side - About Me + Work Experience */}
            <div className="md:col-span-2 space-y-12">

              {/* About Me */}
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsFillPersonFill /> Sobre Mim
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Sou profissional de Tecnologia da Informação com experiência em gestão de projetos, desenvolvimento de sistemas e suporte técnico. Tenho formação em Sistemas de Informação e curso técnico em Eletrotécnica. Durante minha trajetória, atuei como agente de registro, analista de suporte, gerente de projetos de TI e desenvolvedor web. Tenho habilidades em certificação digital, suporte a sistemas ERP/PDV, levantamento de requisitos, modelagem de processos e liderança de equipes.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsFillBriefcaseFill /> Experiência Profissional
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

            {/* Right Side - Tech Stack, Soft Skills, Education, Languages */}
            <div className="space-y-12">

              {/* Tech Stack */}
              <div>
                <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
                <div className="space-y-2">
                  {techSkills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: skill.level }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h2 className="text-xl font-bold mb-4">Soft Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsFillBookFill /> Educação
                </h2>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>MBA Gestão de Projetos - IPOG (2023 - 2024)</li>
                  <li>Bacharelado Sistemas de Informação - UEG (2017 - 2023)</li>
                  <li>Técnico em Eletrotécnica - SESI/SENAI (2014 - 2016)</li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h2 className="flex items-center text-xl font-bold mb-4 gap-2">
                  <BsGlobe2 /> Idiomas
                </h2>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Português - Nativo</li>
                  <li>Inglês - B1</li>
                </ul>
              </div>

            </div>
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="/PedroGuilherme.pdf"
              download
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
            ><FaDownload className="inline mb-1 mr-2" />
              Baixar Currículo (PDF)
            </a>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resume;
