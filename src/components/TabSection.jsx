import { useState } from 'react';

function TabSection() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="tab-section">
      <div className="container">
        <h2 className="section-title">💼 Professional Background</h2>

        <div className="tabs" role="tablist">
          <button
            id="experience-tab"
            role="tab"
            aria-selected={activeTab === 'experience'}
            aria-controls="experience-panel"
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            id="education-tab"
            role="tab"
            aria-selected={activeTab === 'education'}
            aria-controls="education-panel"
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'experience' && (
            <div
              id="experience-panel"
              role="tabpanel"
              aria-labelledby="experience-tab"
              className="tab-panel"
            >
              <p>
                I have nearly six years of experience in the healthcare industry,
                spending half of my career at each of two great companies. At{' '}
                <strong>Allergan</strong>, I strengthened my negotiation and sales skills,
                increasing regional sales by almost 3×. At{' '}<strong>Sinclair</strong>, I developed
                a strong sense of customer insight through a national product
                survey and helped launch a new product that achieved $15M in its
                first year—a major milestone for me. These experiences shaped me
                into someone creative, curious, and business-minded as I move into
                the tech field.
              </p>
            </div>
          )}

          {activeTab === 'education' && (
            <div
              id="education-panel"
              role="tabpanel"
              aria-labelledby="education-tab"
              className="tab-panel"
            >
              <div className="education-item">
                <h3 className="education-school">Northeastern University</h3>
                <p className="education-degree">
                  Master of Science in Information Systems
                </p>
                <p className="education-date">Sep 2025 - May 2027 (Expected)</p>
                <p className="education-focus">
                  <strong>Focus:</strong> Full-stack development, database
                  management, and software engineering principles.
                </p>
                <div className="education-courses">
                  <strong>Relevant Coursework:</strong>
                  <ul>
                    <li>INFO6150 Web Design/User Experience</li>
                    <li>INFO5100 Application Engineer & Dev</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TabSection;