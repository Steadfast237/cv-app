import FormProject from './forms/FormProject';

function Project({
  showForm,
  activeForm,
  project,
  setProject,
  handleActiveForm,
  handleActiveSection,
  handleChange,
  handleAdd,
  handleDelete,
}) {
  return (
    <div>
      <div className="headLine">
        <h3>Projects</h3>

        {showForm ? (
          <button
            type="button"
            onClick={() => {
              handleActiveSection('');
              handleActiveForm('');
            }}
          >
            Hide
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              handleActiveSection('projects');
              handleActiveForm('');
            }}
          >
            Show
          </button>
        )}
      </div>

      {showForm && (
        <div className="educ-container">
          {project.map((project) => {
            if (project.id === activeForm) {
              return (
                <FormProject
                  key={project.id}
                  project={project}
                  setProject={setProject}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                  handleActiveForm={handleActiveForm}
                />
              );
            }

            return (
              <div className="educ" key={project.id}>
                <div>
                  <h4>{project.name ? project.name : `[Project]`}</h4>
                  <p>{project.tools && project.tools}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleActiveForm(project.id)}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      )}

      {showForm && (
        <button
          type="button"
          onClick={() =>
            handleAdd(
              {
                name: '',
                tools: '',
                startDate: '',
                endDate: '',
                description: '',
              },
              setProject
            )
          }
        >
          Add project
        </button>
      )}
    </div>
  );
}

export default Project;
