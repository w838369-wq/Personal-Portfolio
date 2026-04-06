import Hero from '../components/Hero';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

function Home() {

  return (
    <>
      <Hero />
      
      <section id="projects" className="section section-gray">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;