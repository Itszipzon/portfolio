import "./css/Home.css";
import HomeLeft from "../elements/home-left";
import HomeRight from "../elements/home-right";
import githubIcon from "../assets/logos/github.svg"
import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  let projects = require("../projects.json");

  const mouseDownAboutProject = (e) => {
    if (!e.target.closest(".about-project")) {
      setSelectedProject(null);
      setCurrentImageIndex(0);
    }
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (!selectedProject || !selectedProject.images) return;
    
    const totalImages = selectedProject.images.length;
    
    if (currentImageIndex === totalImages + 1) {
      setCurrentImageIndex(1);
    } else if (currentImageIndex === 0) {
      setCurrentImageIndex(totalImages);
    }
    
    setIsTransitioning(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(1);
    setIsTransitioning(false);
  };

  const getCurrentImageNumber = () => {
    if (!selectedProject || !selectedProject.images || selectedProject.images.length <= 1) {
      return 1;
    }
    
    let realIndex = currentImageIndex;
    
    if (currentImageIndex === 0) {
      realIndex = selectedProject.images.length;
    } else if (currentImageIndex === selectedProject.images.length + 1) {
      realIndex = 1;
    }
    
    return realIndex;
  };

  const getCarouselImages = () => {
    if (!selectedProject || !selectedProject.images || selectedProject.images.length <= 1) {
      return selectedProject?.images || [];
    }
    
    const images = selectedProject.images;
    return [images[images.length - 1], ...images, images[0]];
  };
  return (
    <div className="home-container">

      <div className={`about-project-container ${selectedProject !== null ? "active" : ""}`} onMouseDown={mouseDownAboutProject}>
        <div className='about-project'>
          <div className='close-button-container'>
            <button onClick={() => setSelectedProject(null)}>X</button>
          </div>
          <div className='message-container'>
            <div className="project-header">
              <h2>{selectedProject ? selectedProject.name : ""}</h2>
            </div>
            <div className="slideshow-container">
              {selectedProject && selectedProject.images && selectedProject.images.length > 0 ? (
                selectedProject.images.length === 1 ? (
                  <div className="single-image">
                    <img 
                      src={`${selectedProject.img_location}${selectedProject.images[0]}.png`} 
                      alt={`${selectedProject.name}`} 
                    />
                  </div>
                ) : (
                  <>
                    <button className="slideshow-arrow left-arrow" onClick={prevImage}>
                      ‹
                    </button>
                    <div className="image-slider">
                      <div 
                        className={`image-track ${isTransitioning ? '' : 'no-transition'}`}
                        style={{
                          transform: `translateX(-${(currentImageIndex * 100) / getCarouselImages().length}%)`,
                          width: `${getCarouselImages().length * 100}%`
                        }}
                        onTransitionEnd={handleTransitionEnd}
                      >
                        {getCarouselImages().map((image, index) => (
                          <div key={`${image}-${index}`} className="slide">
                            <img 
                              src={`${selectedProject.img_location}${image}.png`} 
                              alt={`${selectedProject.name}`} 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="slideshow-arrow right-arrow" onClick={nextImage}>
                      ›
                    </button>
                    <div className="image-counter">
                      {getCurrentImageNumber()} / {selectedProject.images.length}
                    </div>
                  </>
                )
              ) : (
                <div className="no-images">
                  <p>No images available for this project</p>
                </div>
              )}
            </div>
            <div className="project-info">
              <div className="project-description">
                <p>{selectedProject && selectedProject.description ? selectedProject.description : "No description available for this project."}</p>
              </div>
              {selectedProject && selectedProject.Github && (
                <div className="project-links">
                  <a href={selectedProject.Github} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="github-icon" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <HomeLeft />
      <HomeRight projects={projects.projects} setSelectedProject={handleProjectSelect} />
    </div>
  );
}