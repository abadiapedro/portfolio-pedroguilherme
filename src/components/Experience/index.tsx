import { motion } from "framer-motion";

export const Experiences = () => {
  const experiences = [
    {
      company: "UniEVANGÉLICA - Universidade Evangélica de Goiás",
      roles: [
        {
          title: "Analista de Sistemas Nível II",
          period: "Março 2025 - Atual",
          description:
            "Desenvolvimento e manutenção de sistemas web utilizando PHP, Laravel, JavaScript, NodeJS e ReactJS. Atuação em plataformas CMS, sistemas de agendamento e controle acadêmico, além de criação de hotsites institucionais.",
        },
        {
          title: "Analista de Sistemas Nível I",
          period: "Setembro 2023 - Março 2025",
          description:
            "Desenvolvimento de sistemas internos e apoio no levantamento de requisitos e modelagem de processos, utilizando tecnologias como ReactJS, NodeJS, Strapi, Prisma e SQL Server.",
        },
      ],
    },
    {
      company: "Pedro Guilherme Guimarães Abadia Consultoria em TI",
      roles: [
        {
          title: "Gerente de Projetos de TI",
          period: "Abril 2023 - Agosto 2023",
          description:
            "Gestão de projetos de TI com metodologias ágeis e ferramentas como Jira, Confluence e Hubstaff. Coordenação de equipes de desenvolvimento de software.",
        },
      ],
    },
    {
      company: "Unika Sistemas",
      roles: [
        {
          title: "Analista de Suporte Júnior",
          period: "Janeiro 2023 - Abril 2023",
          description:
            "Suporte técnico a sistemas ERP e PDV, instalação e configuração de sistemas Android e Desktop. Atuação também como analista de testes (QA) em aplicações Java e Android.",
        },
        {
          title: "Estagiário de Suporte de TI",
          period: "Maio 2022 - Dezembro 2022",
          description:
            "Atendimento ao cliente e suporte técnico a sistemas de gestão. Implantação de metodologia ágil (Scrum) e documentação de fluxos de atividades.",
        },
      ],
    },
    {
      company: "Salutar Informática (Certifica Anápolis)",
      roles: [
        {
          title: "Agente de Registro",
          period: "Setembro 2019 - Janeiro 2020",
          description:
            "Atuação no processo de emissão de certificados digitais e validação de documentos junto a clientes.",
        },
      ],
    },
    {
      company: "Prefeitura Municipal de Goianésia",
      roles: [
        {
          title: "Estagiário de TI",
          period: "Janeiro 2019 - Julho 2019",
          description:
            "Manutenção de computadores e impressoras, suporte aos usuários e acompanhamento de atividades do SysAdmin.",
        },
        {
          title: "Estagiário de Eletrotécnica",
          period: "Março 2017 - Dezembro 2018",
          description:
            "Elaboração de projetos elétricos, planilhas orçamentárias e acompanhamento de obras de infraestrutura.",
        },
      ],
    },
  ];

  return (
    <section id="experiences" className="w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
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
          <h2 className="text-4xl font-bold mb-4">Experiências Profissionais</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Um resumo da minha trajetória profissional na área de TI e Eletrotécnica.
          </p>
        </div>

        {/* Experiências Agrupadas */}
        <div className="w-full flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="w-full">

              {/* Nome da Empresa */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{exp.company}</h3>
              </div>

              {/* Cargos dentro da Empresa */}
              <div className="flex flex-col gap-6 pl-4 border-l-2 border-blue-400 dark:border-blue-300">
                {exp.roles.map((role, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-xl font-semibold">{role.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-300">{role.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{role.description}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
      </motion.div>
    </section>
  );
};

export default Experiences;
