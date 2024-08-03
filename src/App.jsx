import { useState } from 'react';

import example from './data';
import { loadData, saveData } from './utils';

import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Technical from './components/Technical';

function App() {
  const data = loadData();
  const [activeSection, setActiveSection] = useState('personal');

  const [activeForm, setActiveForm] = useState('');

  const [personal, setPersonal] = useState(
    data
      ? data.personal
      : {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          linkedin: '',
          github: '',
        }
  );

  const [education, setEducation] = useState(data ? data.education : []);

  const [experience, setExperience] = useState(data ? data.experience : []);

  const [project, setProject] = useState(data ? data.project : []);

  const [technical, setTechnical] = useState(
    data
      ? data.technical
      : {
          languages: '',
          frameworks: '',
          devTools: '',
          libraries: '',
        }
  );

  const handleActiveSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  const handleActiveForm = (id) => {
    setActiveForm(id);
  };

  const handlePersonal = (e, setFunction) => {
    const property = e.target.name;
    const value = e.target.value;

    setFunction((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const handleChange = (e, id, setFunction) => {
    const property = e.target.name;
    const value = e.target.value;

    setFunction((prev) => {
      return prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [property]: value };
        }
        return obj;
      });
    });
  };

  const handleAdd = (init, setFunction) => {
    const id = crypto.randomUUID();

    init.id = id;

    setFunction((prev) => [...prev, init]);
    handleActiveForm(id);
  };

  const handleDelete = (id, setFunction) => {
    setFunction((prev) => prev.filter((education) => education.id !== id));
  };

  const loadExample = () => {
    setPersonal(example.personal);
    setEducation(example.eduction);
    setExperience(example.experience);
    setProject(example.projects);
    setTechnical(example.technical);
  };

  const clearExample = () => {
    setPersonal({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      github: '',
    });
    setEducation([]);
    setExperience([]);
    setProject([]);
    setTechnical({
      languages: '',
      frameworks: '',
      devTools: '',
      libraries: '',
    });
  };

  return (
    <>
      <header>
        <h1>Cv Creator</h1>
        <div>
          <button
            type="button"
            onClick={() =>
              saveData({ personal, education, experience, project, technical })
            }
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => alert('Not yet implemented, feeling lazy')}
          >
            Download
          </button>
          <button type="button" onClick={() => loadExample()}>
            Cv example
          </button>
          <button type="button" onClick={() => clearExample()}>
            Clear example
          </button>
        </div>
      </header>

      <main>
        <div className="forms">
          <Personal
            showForm={activeSection === 'personal'}
            personal={personal}
            handleActiveSection={handleActiveSection}
            handlePersonal={handlePersonal}
            setPersonal={setPersonal}
          />

          <Education
            showForm={activeSection === 'education'}
            handleActiveSection={handleActiveSection}
            activeForm={activeForm}
            handleActiveForm={handleActiveForm}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            education={education}
            setEducation={setEducation}
          />

          <Experience
            showForm={activeSection === 'experience'}
            handleActiveSection={handleActiveSection}
            activeForm={activeForm}
            handleActiveForm={handleActiveForm}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            experience={experience}
            setExperience={setExperience}
          />

          <Project
            showForm={activeSection === 'projects'}
            handleActiveSection={handleActiveSection}
            activeForm={activeForm}
            handleActiveForm={handleActiveForm}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            project={project}
            setProject={setProject}
          />

          <Technical
            showForm={activeSection === 'technical'}
            technical={technical}
            handleActiveSection={handleActiveSection}
            handlePersonal={handlePersonal}
            setTechnical={setTechnical}
          />
        </div>

        <div className="preview">
          <div className="cv">
            <section className="section-personal">
              <h1>{personal.firstName + ' ' + personal.lastName}</h1>
              <ul>
                <li>{personal.phoneNumber}</li>
                <li>
                  <a href="#">{personal.email}</a>
                </li>
                <li>
                  <a href="#">{personal.linkedin}</a>
                </li>
                <li>
                  <a href="#">{personal.github}</a>
                </li>
              </ul>
            </section>

            <section
              className={education.length > 0 ? 'section-education' : ''}
            >
              <h3>{education.length > 0 && 'EDUCATION'}</h3>
              <ul>
                {education.map((education, index) => (
                  <li key={index}>
                    <div>
                      <p>
                        <strong>{education.school}</strong>
                      </p>
                      <p>{education.city}</p>
                    </div>

                    <div>
                      <p>
                        <em>{education.degree}</em>
                      </p>
                      <p>
                        <em>
                          {education.startDate && education.startDate + ' - '}
                          {education.endDate}
                        </em>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className={experience.length > 0 ? 'section-experience' : ''}
            >
              <h3>{experience.length > 0 && 'EXPERIENCE'}</h3>
              <ul>
                {experience.map((experience, index) => (
                  <li key={index}>
                    <div>
                      <p>
                        <strong>{experience.position}</strong>
                      </p>
                      <p>
                        {experience.startDate && experience.startDate + ' - '}
                        {experience.endDate}
                      </p>
                    </div>

                    <div>
                      <p>
                        <em>{experience.employer}</em>
                      </p>
                      <p>
                        <em>{experience.city}</em>
                      </p>
                    </div>

                    <div>
                      <ul>
                        {experience.description
                          .split('\n')
                          .map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className={project.length > 0 ? 'section-project' : ''}>
              <h3>{project.length > 0 && 'PROJECTS'}</h3>
              <ul>
                {project.map((project, index) => (
                  <li key={index}>
                    <div>
                      <p>
                        <strong>{project.name}</strong>
                        <span>{project.tools}</span>
                      </p>
                      <p>
                        {project.startDate && project.startDate + ' - '}
                        {project.endDate}
                      </p>
                    </div>

                    <div>
                      <ul>
                        {project.description.split('\n').map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {(technical.languages ||
              technical.frameworks ||
              technical.libraries ||
              technical.devTools) && (
              <section className="section-technical">
                <h3>TECHNICAL SKILLS</h3>

                <div>
                  <p>
                    <strong>Languages: </strong> {technical.languages}
                  </p>
                  <p>
                    <strong>Frameworks: </strong> {technical.frameworks}
                  </p>
                  <p>
                    <strong>Developer Tools: </strong> {technical.devTools}
                  </p>
                  <p>
                    <strong>Libraries: </strong> {technical.libraries}
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <footer>
        Created by Silidje Moket.
        <a href="#" target="_blank">
          View Code on GitHub
        </a>
      </footer>
    </>
  );
}

export default App;
