import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CmsInstitucional from "../../assets/cmsInstitucional.jpg";
import CmsHotsite from "../../assets/cmsHotsite.jpg";
import AgendaEletronica from "../../assets/agendaEletronica.jpg";
import InternatoMedicina from "../../assets/internatoMedicina.jpg";


export const Projects = () => {
  const projects = [
    {
      title: "Plataforma CMS Institucional",
      description: "Sistema de controle de conteúdo para sites institucionais usando PHP, Laravel e MySQL.",
      image: CmsInstitucional,
      link: "#",
    },
    {
      title: "Plataforma de Hotsites",
      description: "Gerenciamento de hotsites utilizando ReactJS, NodeJS e Strapi CMS.",
      image: CmsHotsite,
      link: "#",
    },
    {
      title: "Sistema de Agendamento de Laboratórios",
      description: "Sistema para agendamento de equipamentos laboratoriais com ReactJS e SQL Server.",
      image: AgendaEletronica,
      link: "#",
    },
    {
      title: "Sistema de Controle do Internato de Medicina",
      description: "Gestão de frequência e atividades para alunos de medicina, usando ReactJS e NodeJS.",
      image: InternatoMedicina,
      link: "#",
    },
  ];


  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-gray-300 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors"
      >
        <div className="max-w-6xl w-full bg-gray-300 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors">

          {/* Título e descrição */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-gray-400">
              Veja alguns dos principais projetos que desenvolvi utilizando tecnologias modernas e boas práticas de desenvolvimento.
            </p>
          </div>

          {/* Carrossel */}
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            navigation={true}
            slidesPerView={1}
            className="w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                  />
                  <div className="p-8 flex flex-col flex-1 items-center">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{project.description}</p>
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Ver projeto
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => window.open("/projetos", "_blank")}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver mais projetos
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
