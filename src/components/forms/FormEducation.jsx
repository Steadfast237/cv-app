function FormEducation({
  education,
  handleActiveForm,
  handleDelete,
  setEducation,
  handleChange,
}) {
  return (
    <form>
      <div className="field degree">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={education.degree}
          onChange={(e) => handleChange(e, education.id, setEducation)}
        />
      </div>

      <div className="field">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          value={education.school}
          onChange={(e) => handleChange(e, education.id, setEducation)}
        />
      </div>

      <div className="field">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={education.city}
          onChange={(e) => handleChange(e, education.id, setEducation)}
        />
      </div>

      <div className="field">
        <label htmlFor="startDate">Start date</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          value={education.startDate}
          onChange={(e) => handleChange(e, education.id, setEducation)}
        />
      </div>

      <div className="field">
        <label htmlFor="endDate">End date</label>
        <input
          type="text"
          id="endDate"
          name="endDate"
          value={education.endDate}
          onChange={(e) => handleChange(e, education.id, setEducation)}
        />
      </div>

      <div className="actions">
        <button
          type="button"
          onClick={() => handleDelete(education.id, setEducation)}
        >
          Delete
        </button>
        <button type="button" onClick={() => handleActiveForm('')}>
          Done
        </button>
      </div>
    </form>
  );
}

export default FormEducation;
