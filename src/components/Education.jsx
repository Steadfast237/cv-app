import FormEducation from './forms/FormEducation';

function Education({
  showForm,
  activeForm,
  education,
  setEducation,
  handleActiveSection,
  handleActiveForm,
  handleChange,
  handleAdd,
  handleDelete,
}) {
  return (
    <div>
      <div className="headLine">
        <h3>Education</h3>

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
              handleActiveSection('education');
              handleActiveForm('');
            }}
          >
            Show
          </button>
        )}
      </div>

      {showForm && (
        <div className="educ-container">
          {education.map((education) => {
            if (education.id === activeForm) {
              return (
                <FormEducation
                  key={education.id}
                  education={education}
                  setEducation={setEducation}
                  handleChange={handleChange}
                  handleDelete={handleDelete}
                  handleActiveForm={handleActiveForm}
                />
              );
            }

            return (
              <div className="educ" key={education.id}>
                <div>
                  <h4>{education.degree ? education.degree : `[Education]`}</h4>
                  <p>
                    {education.school && education.school}
                    {education.school && education.city && ', '}
                    {education.city && education.city}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleActiveForm(education.id)}
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
                school: '',
                degree: '',
                city: '',
                startDate: '',
                endDate: '',
              },
              setEducation
            )
          }
        >
          Add education
        </button>
      )}
    </div>
  );
}

export default Education;
