import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cube.css";

const Cube = () => {
  return (
    <div className="container">
      <div className=" cube-animate m-auto ">
        <div className="cube ">
          <div className="face front html d-flex flex-column">
            <h2 className="">HTML</h2>
            <FontAwesomeIcon icon={faHtml5} />
            
          </div>
          <div className="face back css d-flex flex-column">
            <h2 className="">CSS</h2>
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div className="face right js d-flex flex-column">
            <h2 className="">Js</h2>
            <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="face left react d-flex flex-column">
            <h2 className="">React</h2>
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="face top bootstrap d-flex flex-column">
            <h2 className="">Bootstrap</h2>
            <FontAwesomeIcon icon={faBootstrap} />
          </div>
          <div className="face bottom git d-flex flex-column">
            <h2 className="">Git</h2>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cube;
