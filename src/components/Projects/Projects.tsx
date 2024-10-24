import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Atayev Bahodir Build Construction company",
    imageUrl: "https://www.limsa.uz/_next/static/media/abBuild.d2530723.jpg",
    link: "https://www.ataevbahodirbuild.uz/",
  },
  {
    id: 2,
    title: "Car Rental Company in Tashkent",
    imageUrl:
      "https://www.limsa.uz/_next/static/media/avtozoomWebsite.6b6b2eb6.jpg",
    link: "https://www.ataevbahodirbuild.uz/",
  },
  {
    id: 3,
    title: "Dezinfection Service",
    imageUrl:
      "https://www.limsa.uz/_next/static/media/desinfection.c7e4b242.jpg",
    link: "https://www.dezinfeksiyatashkent.uz/",
  },
  {
    id: 4,
    title: "Home Kit App for Smart Home",
    imageUrl: "https://www.limsa.uz/_next/static/media/homekit.ca9f3410.jpg",
    link: "https://www.https//www.homekit.uz/",
  },
  {
    id: 5,
    title: "Online IT Education Platform",
    imageUrl: "https://www.limsa.uz/_next/static/media/itTime.c232d372.jpg",
    link: "https://www.it-time-academy.uz/",
  },
  {
    id: 6,
    title: "Humanitarian Help Service",
    imageUrl:
      "https://www.limsa.uz/_next/static/media/loyalWebsite.51aeda7e.jpg",
    link: "https://www.uzloyal.uz/",
  },
  {
    id: 7,
    title: "Namangan OITS Care Center",
    imageUrl: "https://www.limsa.uz/_next/static/media/noits.86138e41.jpg",
    link: "https://www.namanganoits.uz/",
  },
  {
    id: 8,
    title: "Tourism Tour Firm",
    imageUrl:
      "https://www.limsa.uz/_next/static/media/propartnyor.111fb9c6.jpg",
    link: "https://www.propartnyor.uz/",
  },
  {
    id: 9,
    title: "Tourism Tour Firm",
    imageUrl: "https://www.limsa.uz/_next/static/media/zamonTour.f06b838a.jpg",
    link: "https://www.zamontour.uz/",
  },
];

function Projects() {
  return (
    <div>
      <div className="projectsTitle">
        <p>Chiqarilgan loyihalar</p>
        <h2>Biz nima qildik?</h2>
      </div>
      <div className="projectsContainer">
        {projects.map((project) => {
          return (
            <div className="websiteImgContainer">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
