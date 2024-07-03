import Cube from "../../Component/Animation/Cube";
import HeaderSection from "../../Component/HeaderSection";
import Skill from "../../Component/Skill";
import image1 from "../../assest/TroyLap.png";
import image2 from "../../assest/X-O_GAME.png";
import image3 from "../../assest/portffolio1-1.png";
import image4 from "../../assest/portfoli1.png"

import("./Home.css");

function Home() {
  const serveices = [
    {
      name: "Dynamic User Interfaces and SPAs",
      subject:
        "I build high-performance user interfaces and single-page applications (SPAs) using React.js to provide a seamless user experience.",
    },
    {
      name: "Reusable Components",
      subject:
        "I create reusable components to streamline development and ensure consistency across the project, making future updates and maintenance easier.",
    },
    {
      name: "Responsive Design",
      subject:
        "I create responsive designs that adapt to any screen size, ensuring a seamless user experience. I use flexible grids, fluid images, and media queries to achieve this. My mobile-first approach guarantees optimal functionality on smaller devices. This enha",
    },
    {
      name: "API Integrating",
      subject:
        "I integrate APIs to enable smooth communication between the front end and back end, ensuring a cohesive and responsive user experience.",
    },
  ];
  return (
    <div className="home-page-container">
      <div className="section home-section   d-flex  align-items-center justify-content-center  ">
        <div className="row flex-column-reverse flex-md-row  jutstify-content-center align-items-center w-100   p-md-2">
          <div className="col-12 col-md-7 pt-4 text-warning d-flex flex-column justify-content-md-center  align-items-center">
            <h1 className="p-2 pt-2 ">Mohamed Ahmed</h1>
            <h2 className="p-2 ">Front End Developer (React JS)</h2>
            <button className="btn btn-success">Download CV</button>
          </div>
          <div className="image mt-2 pt-2 col-12 col-md-5 d-flex justify-content-md-center align-items-center">
            {/* <img src={image1} alt=""   className=" w-100 h-auto rounded-circle border border-light border-2"/> */}
            <Cube />
          </div>
        </div>
      </div>
      {/* About section */}
      <div className="section about-section">
      <HeaderSection title="ABOUT" subTitle="Who I Am" />
        <div className="flex flex-column">
          <p>
            Highly skilled and motivated React full-stack developer designing,
            developing, and deploying web applications. Possessing a strong
            background in front-end and back-end development . Refined their
            skills through the completion of a React Nanodegree by Udacity.
            Committed to delivering high-quality, scalable, and user-centric
            solutions, I am eager to tackle complex challenges and drive
            innovation in web development.
          </p>
          <p>
            A React Developer with 4 years of experience, skilled in HTML, CSS,
            JS and React. Recognized for delivering robust software solutions,
            applying analytical skills, and working efficiently in agile teams.
            Committed to continuous learning and adhering to best coding
            practices.
          </p>
          <p></p>
        </div>
      </div>
      <div className="clear-flex"></div>
      <div className="section services-section pt-4">
        <HeaderSection title="SERVECES" subTitle="can I serve you" />
        <div className="row p-3">
          {serveices.map((serveice) => (
            <div className="card  bg-transparent   col-12 col-md-6  col-xl-3 text-center text-white ">
              <div className=" card-body  bg-gradient text-info ">
                <h3 className=" ">{serveice.name}</h3>
                <p>{serveice.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* skills section */}
      <div className="section skills-section ">
        <HeaderSection title="SKILLS" subTitle="I Can" />
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <ul className="p-0">
              <li className="">
                <Skill skill="HTML5" percent="85" />
              </li>
              <li>
                <Skill skill="CSS3" percent="80" />
              </li>
              <li>
                <Skill skill="JavaScript" percent="75" />
              </li>
              <li>
                <Skill skill="React JS" percent="70" />
              </li>
              <li>
                <Skill skill="GIT" percent="80" />
              </li>
              <li>
                <Skill skill="Next JS" percent="60" />
              </li>
              <li>
                <Skill skill="TypeScript" percent="80" />
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6">
            <img className="w-100" src={image4} alt="one" />
          </div>
        </div>
        <button className="btn btn-success">Read More</button>
      </div>
      <div className="projects-section ">
        <HeaderSection title="PROJECTS" subTitle="I'am able" />

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <button className="btn btn-success">Read More . . . .</button>
      </div>
      <div className="Eduction-section">
        <h4>Education</h4>
        <p className="text-center">
          Bachloer's science mejor mathmatics at Al-Azhar University in 2012
        </p>
      </div>
      <div className="experiance-section">
        <h4> Experience </h4>
      </div>
      div.
    </div>
  );
}

export default Home;
