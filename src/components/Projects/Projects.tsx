import "./Projects.css";

const projects = [
   {
      id: 1,
      title: "Atayev Bahodir Build Construction company",
      imageUrl: "https://www.limsa.uz/assets/abBuild-8oz2AIO7.jpg",
      link: "https://www.ataevbahodirbuild.uz/",
   },
   {
      id: 2,
      title: "Car Rental Company in Tashkent",
      imageUrl: "https://www.limsa.uz/assets/avtozoomWebsite-DCWc1c07.jpg",
      link: "https://www.ataevbahodirbuild.uz/",
   },
   {
      id: 3,
      title: "Dezinfection Service",
      imageUrl: "https://www.limsa.uz/assets/noits-_qO1VZLh.jpg",
      link: "https://www.dezinfeksiyatashkent.uz/",
   },
   {
      id: 4,
      title: "Home Kit App for Smart Home",
      imageUrl: "https://www.limsa.uz/assets/homekit-DQ2XClzR.jpg",
      link: "https://www.https//www.homekit.uz/",
   },
   {
      id: 5,
      title: "Online IT Education Platform",
      imageUrl: "https://www.limsa.uz/assets/itTime-CWYJEWwi.jpg",
      link: "https://www.it-time-academy.uz/",
   },
   {
      id: 6,
      title: "Humanitarian Help Service",
      imageUrl: "https://www.limsa.uz/assets/loyalWebsite-BlOw_Q7N.jpg",
      link: "https://www.uzloyal.uz/",
   },
   {
      id: 7,
      title: "Tourism Tour Firm",
      imageUrl: "https://www.limsa.uz/assets/propartnyor-CgoDPuRp.jpg",
      link: "https://www.propartnyor.uz/",
   },
   {
      id: 8,
      title: "Tourism Tour Firm",
      imageUrl: "https://www.limsa.uz/assets/zamonTour-W0hbPX7f.jpg",
      link: "https://www.zamontour.uz/",
   },
];

function Projects() {
   return (
      <div className="projectsContainer">
         <div className="projectsTitle" data-aos="fade-up">
            <h2>Bizning loyihalar</h2>
            <p>Biz bilan hamkorlik qilgan kompaniyalar</p>
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
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="websiteOverlay">
                     <h3>{project.title}</h3>
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
}

export default Projects;
