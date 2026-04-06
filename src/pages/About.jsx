import { useState } from 'react';
import TabSection from '../components/TabSection';

function About() {
  const [isLearningOpen, setIsLearningOpen] = useState(true);

  const toggleLearning = () => {
    setIsLearningOpen(!isLearningOpen);
  };

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h1>About Me</h1>
          <p>
            Hi, I'm Wendi Chen. It's great to meet you online. I'm currently studying
            Information Systems at Northeastern University. With my previous business
            experience, I developed a strong interest in technology, and I hope to
            combine business insight with technical skills to solve real-world problems.
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 
            onClick={toggleLearning} 
            onKeyDown={(e) =>  {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleLearning();
              }
            }}
            className="accordion-header"
            role="button"
            tabIndex={0}
            aria-expanded={isLearningOpen}
          >
            📚 Currently Learning {isLearningOpen ? '▼' : '▶'}
          </h2>
          
          {isLearningOpen && (
            <div className="learning-content">
              <p>
                Right now, I'm learning Python and Java while developing my skills in
                full-stack development. I've built several projects showcased on my
                homepage. I'm also studying algorithms and data structures to strengthen
                my problem-solving abilities. Being able to build a project and see it
                come to life online is truly rewarding for me.
              </p>

              <h3>Courses:</h3>
              <ul>
                <li>INFO6150 Web Design/User Experience</li>
                <li>INFO5100 Application Engineer & Dev</li>
              </ul>

              <h3>Tech Stack:</h3>
              <div className="tech-tags">
                {['Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS', 'React', 'Node.js', 
                  'Express', 'FastAPI', 'SQLAlchemy', 'MongoDB', 'SQLite', 'PostgreSQL'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <TabSection />
    </div>
  );
}

export default About;