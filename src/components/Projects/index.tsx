import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";

import CmsHotsite from "../../assets/cmsHotsite.jpg";
import AgendaEletronica from "../../assets/agendaEletronica.jpg";
import InternatoMedicina from "../../assets/internatoMedicina.jpg";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.hotsite.title"),
      description: t("projects.hotsite.description"),
      image: CmsHotsite,
      link: "https://vest.unievangelica.edu.br/medicina",
    },
    {
      title: t("projects.agenda.title"),
      description: t("projects.agenda.description"),
      image: AgendaEletronica,
      link: "https://centralanalitica.unievangelica.edu.br/",
    },
    {
      title: t("projects.internato.title"),
      description: t("projects.internato.description"),
      image: InternatoMedicina,
      link: "https://internato.unievangelica.edu.br/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center mt-10 mb-10 px-4 md:px-8 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-colors"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("projects.title")}</h2>
        </div>

        <Swiper
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          pagination={{ clickable: true }}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={10}
          navigation={true}
          slidesPerView={1}
          className="w-full rounded-lg"
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
                    {t("projects.button")}
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
          {t("projects.more")}
        </button>
      </motion.div>
    </section>
  );
};

export default Projects;
