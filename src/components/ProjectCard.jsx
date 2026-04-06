import { useState } from 'react';

function ProjectCard({ project }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <article className="project-card">
        <div 
          className="project-image-wrapper"
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              openLightbox();
            }
          }}
        >
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="project-image"
          />
          <div className="image-overlay">
            <span className="overlay-text">Click to enlarge</span>
          </div>
        </div>

        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Website
          </a>
        </div>
      </article>

      {isLightboxOpen && (
        <div 
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <img src="/icons/close.svg" alt="Close" />
          </button>
          <img
            src={project.image}
            alt={`Full size screenshot of ${project.title}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default ProjectCard;