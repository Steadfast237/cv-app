import FormExperience from './forms/FormExperience';

function Experience({
  showForm,
  activeForm,
  experience,
  setExperience,
  handleActiveSection,
  handleActiveForm,
  handleChange,
  handleAdd,
  handleDelete,
}) {
  return (
    <div>
      <div className="headLine">
        <h3>Experience</h3>

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
              handleActiveSection('experience');
              handleActiveForm('');
            }}
          >
            Show
          </button>
        )}
      </div>

      {showForm && (
        <div className="educ-container">
          {experience.map((experience) => {
            if (experience.id === activeForm) {
              return (
                <FormExperience
                  key={experience.id}
                  experience={experience}
                  setExperience={setExperience}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                  handleActiveForm={handleActiveForm}
                />
              );
            }

            return (
              <div className="educ" key={experience.id}>
                <div>
                  <h4>
                    {experience.position ? experience.position : `[Experience]`}
                  </h4>
                  <p>
                    {experience.employer && experience.employer}
                    {experience.employer && experience.city && ', '}
                    {experience.city && experience.city}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleActiveForm(experience.id)}
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
                position: '',
                employer: '',
                city: '',
                startDate: '',
                endDate: '',
                description: '',
              },
              setExperience
            )
          }
        >
          Add experience
        </button>
      )}
    </div>
  );
}

export default Experience;
