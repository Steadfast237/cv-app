import { useCv } from "../CvContext";
import { Detail } from "./Detail";
import { Details } from "./Details";
import { Link } from "./Link";

function Preview() {
  const { state } = useCv();
  const { personal, education, experience, project, technical } = state;

  return (
    <div className="preview">
      <div className="page">
        <div className="box-personal">
          <h1>
            {personal.firstName} {personal.lastName}
          </h1>

          <ul>
            <li>{personal.phoneNumber}</li>
            <Link text={personal.email} />
            <Link text={personal.linkedin} />
            <Link text={personal.github} />
          </ul>
        </div>

        {education.length > 0 && (
          <Details title={"education"}>
            {education.map((education) => (
              <Detail
                key={education.id}
                section={{
                  primaryText: [education.school, education.city],
                  secondaryText: [
                    education.degree,

                    education.startDate && education.endDate
                      ? `${education.startDate} - ${education.endDate}`
                      : `${education.startDate}`,
                  ],
                }}
              />
            ))}
          </Details>
        )}

        {experience.length > 0 && (
          <Details title={"experience"}>
            {experience.map((experience) => (
              <Detail
                key={experience.id}
                section={{
                  primaryText: [
                    experience.position,
                    experience.startDate && experience.endDate
                      ? `${experience.startDate} - ${experience.endDate}`
                      : `${experience.startDate}`,
                  ],

                  secondaryText: [experience.employer, experience.city],
                  list: experience.description.split("\n"),
                }}
              />
            ))}
          </Details>
        )}

        {project.length > 0 && (
          <Details title={"projects"}>
            {project.map((project) => (
              <Detail
                key={project.id}
                section={{
                  primaryText: [
                    project.name + ` | ${project.tools}`,
                    project.startDate && project.endDate
                      ? `${project.startDate} - ${project.endDate}`
                      : `${project.startDate}`,
                  ],
                  list: project.description.split("\n"),
                }}
              />
            ))}
          </Details>
        )}

        {(technical.languages ||
          technical.devTools ||
          technical.frameworks ||
          technical.libraries) && (
          <Details title={"technical skills"}>
            <div>
              {technical.languages && (
                <p className="placed-left">
                  <strong>Languages:</strong> {technical.languages}
                </p>
              )}

              {technical.frameworks && (
                <p className="placed-left">
                  <strong>Frameworks:</strong> {technical.frameworks}
                </p>
              )}

              {technical.devTools && (
                <p className="placed-left">
                  <strong>Developer Tools:</strong> {technical.devTools}
                </p>
              )}

              {technical.libraries && (
                <p className="placed-left">
                  <strong>Libraries:</strong> {technical.libraries}
                </p>
              )}
            </div>
          </Details>
        )}
      </div>
    </div>
  );
}

export default Preview;
