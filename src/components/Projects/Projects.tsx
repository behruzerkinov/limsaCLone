import { useTranslation } from "react-i18next";
import "./Projects.css";

const projects = [
   {
      id: 1,
      titleKey: "projects.items.construction",
      imageUrl: "https://www.limsa.uz/assets/abBuild-8oz2AIO7.jpg",
      link: "https://www.ataevbahodirbuild.uz/",
   },
   {
      id: 2,
      titleKey: "projects.items.carRental",
      imageUrl: "https://www.limsa.uz/assets/avtozoomWebsite-DCWc1c07.jpg",
      link: "https://www.ataevbahodirbuild.uz/",
   },
   {
      id: 3,
      titleKey: "projects.items.dezinfection",
      imageUrl: "https://www.limsa.uz/assets/noits-_qO1VZLh.jpg",
      link: "https://www.dezinfeksiyatashkent.uz/",
   },
   {
      id: 4,
      titleKey: "projects.items.homeKit",
      imageUrl: "https://www.limsa.uz/assets/homekit-DQ2XClzR.jpg",
      link: "https://www.https//www.homekit.uz/",
   },
   {
      id: 5,
      titleKey: "projects.items.itEducation",
      imageUrl: "https://www.limsa.uz/assets/itTime-CWYJEWwi.jpg",
      link: "https://www.it-time-academy.uz/",
   },
   {
      id: 6,
      titleKey: "projects.items.humanitarian",
      imageUrl: "https://www.limsa.uz/assets/loyalWebsite-BlOw_Q7N.jpg",
      link: "https://www.uzloyal.uz/",
   },
   {
      id: 7,
      titleKey: "projects.items.tourism",
      imageUrl: "https://www.limsa.uz/assets/propartnyor-CgoDPuRp.jpg",
      link: "https://www.propartnyor.uz/",
   },
   {
      id: 8,
      titleKey: "projects.items.tourism",
      imageUrl: "https://www.limsa.uz/assets/zamonTour-W0hbPX7f.jpg",
      link: "https://www.zamontour.uz/",
   },
];

function Projects() {
   const { t } = useTranslation();

   return (
      <div className="projectsContainer" id="projects">
         <div className="projectsTitle" data-aos="fade-up">
            <h2>{t('projects.title')}</h2>
            <p>{t('projects.subtitle')}</p>
         </div>

         <div className="projectsGrid">
            {projects.map((project, index) => (
               <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="websiteImgContainer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
               >
                  <img src={project.imageUrl} alt={t(project.titleKey)} />
                  <div className="websiteOverlay">
                     <h3>{t(project.titleKey)}</h3>
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
}

export default Projects;
