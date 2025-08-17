import "./css/Home.css";
import HomeLeft from "../elements/home-left";
import HomeRight from "../elements/home-right";
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  let projects = require("../projects.json");

  const mouseDownAboutProject = (e) => {
    if (!e.target.closest(".about-project")) {
      setSelectedProject(null);
    }
  };
  return (
    <div className="home-container">

      <div className={`about-project-container ${selectedProject !== null ? "active" : ""}`} onMouseDown={mouseDownAboutProject}>
        <div className='about-project'>
          <div className='close-button-container'>
            <button onClick={() => setSelectedProject(null)}>X</button>
          </div>
          <div className='message-container'>
            <p>Not yet implemented</p>
            <p>{selectedProject ? `${selectedProject.name}` : ""}</p>
          </div>
        </div>
      </div>
      <HomeLeft />
      <HomeRight projects={projects.projects} setSelectedProject={setSelectedProject} />
    </div>
  );
}