import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCodeMerge, faCloud, faProjectDiagram, faCubes, faLanguage, faMobileAlt, faServer, faCogs, faC } from '@fortawesome/free-solid-svg-icons';
import './css/home-right.css';
import { faDartLang, faJava, faJs, faLinux, faPython, faRust, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

function HomeRight() {

  const [showNotImplemented, setShowNotImplemented] = useState(false);
  const [selectedProject, setSelectedProject] = useState(-1);

  useEffect(() => {
    console.log("Selected project:", selectedProject);
  }, [selectedProject]);

  let projects = require("../projects.json");

  return (
    <div className="home-right">
      <div className={`about-project-container ${showNotImplemented ? "active" : ""}`}>
        <div className='about-project'>
          <div className='close-button-container'>
            <button onClick={() => setShowNotImplemented(false)}>X</button>
          </div>
          <div className='message-container'>
            Not yet implemented
          </div>
        </div>
      </div>
      <div className='home-right-top'>
        <div className='about-me home-right-top-container'>
          <h2>About Me</h2>
          <p>
            I am a data engineer and software developer with a bachelor's degree from the Norwegian University of Science and Technology (NTNU, 2025).
            I specialize in both front-end and back-end development, with experience in modern frameworks and technologies including React, Vue.js, Spring Boot, Docker, Kubernetes, and cloud platforms such as AWS, Azure, and GCP.
          </p>
          <p>
            My work focuses on creating efficient, scalable, and maintainable applications. I have experience with web and mobile development, cloud infrastructure, DevOps practices, and secure system design.
            I enjoy solving complex problems, learning new technologies, and delivering high-quality solutions that make a tangible impact.
          </p>
        </div>
        <div className='highlighted-projects-container home-right-top-container'>
          <h2>Highlighted Projects:</h2>
          <div className='highlighted-projects'>
            {projects.projects.map((p, i) => {
              return <div onClick={() => {setShowNotImplemented(true); setSelectedProject(p.id)}} key={i}><h3>{p.name}</h3></div>
            })}
          </div>
        </div>
      </div>
      <div className='home-right-bottom'>
        <div className='home-right-bottom-container'>
          <div className='home-right-bottom-list'>
            <div className='home-right-bottom-list-headers'>
              <div><h2>Skills</h2></div>
              <div><h2>Programming</h2></div>
              <div><h2>Frameworks</h2></div>
            </div>
            <div className='home-right-bottom-lists-lists'>

              <ul>
                <li><FontAwesomeIcon icon={faCodeMerge} />Version control (GitHub/GitLab)</li>
                <li><FontAwesomeIcon icon={faLinux} />Linux</li>
                <li><FontAwesomeIcon icon={faCubes} />Docker</li>
                <li><FontAwesomeIcon icon={faProjectDiagram} />Kubernetes</li>
                <li><FontAwesomeIcon icon={faCubes} />Openstack/Terraform</li>
                <li><FontAwesomeIcon icon={faProjectDiagram} />CI/CD Pipelines</li>
                <li><FontAwesomeIcon icon={faCloud} />Cloud Infrastructure (AWS/Azure/GCP)</li>
                <li><FontAwesomeIcon icon={faLanguage} />Fluent in Norwegian and English</li>
                <li><FontAwesomeIcon icon={faCogs} />Familiar with Agile Methods</li>
                <li><FontAwesomeIcon icon={faMobileAlt} />Mobile Development</li>
                <li><FontAwesomeIcon icon={faCode} />Front-end Programming</li>
                <li><FontAwesomeIcon icon={faServer} />Back-end Programming</li>
              </ul>

              <ul>
                <li className='fav'><FontAwesomeIcon icon={faRust} />Rust</li>
                <li className='fav'><FontAwesomeIcon icon={faJava} />Java</li>
                <li><FontAwesomeIcon icon={faJs} />JavaScript</li>
                <li className='fav'><FontAwesomeIcon icon={faCode} />Typescript</li>
                <li><FontAwesomeIcon icon={faVuejs} />Vue.js</li>
                <li><FontAwesomeIcon icon={faPython} />Python</li>
                <li className='fav'><FontAwesomeIcon icon={faDartLang} />Dart</li>
                <li className='fav'><FontAwesomeIcon icon={faC} />C++</li>
                <li><FontAwesomeIcon icon={faC} />C#</li>
                <li><FontAwesomeIcon icon={faC} />C</li>
                <li className='fav'><FontAwesomeIcon icon={faDatabase} />MySQL</li>
                <li className='fav'><FontAwesomeIcon icon={faDatabase} />PostgreSQL</li>
              </ul>
              <ul>
                <li className='fav'><FontAwesomeIcon icon={faJava} />Spring-boot</li>
                <li className='fav'><FontAwesomeIcon icon={faJs} />React</li>
                <li><FontAwesomeIcon icon={faVuejs} />Vue.js</li>
                <li className='fav'><FontAwesomeIcon icon={faDartLang} />Flutter</li>
                <li><FontAwesomeIcon icon={faJava} />JavaFX</li>
                <li className='fav'><FontAwesomeIcon icon={faRust} />Egui</li>
              </ul>

            </div>

          </div>
          <div className='home-right-bottom-note'>
            <p>Note: The skills I am most proficient in are highlighted.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
