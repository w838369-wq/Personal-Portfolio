function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Hi, I'm Wendi Chen</h1>
        <p className="hero-tagline">Full-Stack Developer | Business + Tech</p>
        <button onClick={scrollToProjects} className="btn-primary">
          View My Work ↓
        </button>
      </div>
    </section>
  );
}

export default Hero;