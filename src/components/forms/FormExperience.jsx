function FormExperience({
  experience,
  setExperience,
  handleChange,
  handleDelete,
  handleActiveForm,
}) {
  return (
    <form>
      <div className="field position">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          value={experience.position}
          onChange={(e) => handleChange(e, experience.id, setExperience)}
        />
      </div>

      <div className="field">
        <label htmlFor="employer">Employer</label>
        <input
          type="text"
          id="employer"
          name="employer"
          value={experience.employer}
          onChange={(e) => handleChange(e, experience.id, setExperience)}
        />
      </div>

      <div className="field">
        <label htmlFor={'city' + experience.id}>City</label>
        <input
          type="text"
          id={'city' + experience.id}
          name="city"
          value={experience.city}
          onChange={(e) => handleChange(e, experience.id, setExperience)}
        />
      </div>

      <div className="field">
        <label htmlFor={'startDate' + experience.id}>Start date</label>
        <input
          type="text"
          id={'startDate' + experience.id}
          name="startDate"
          value={experience.startDate}
          onChange={(e) => handleChange(e, experience.id, setExperience)}
        />
      </div>

      <div className="field">
        <label htmlFor={'endDate' + experience.id}>End date</label>
        <input
          type="text"
          id={'endDate' + experience.id}
          name="endDate"
          value={experience.endDate}
          onChange={(e) => handleChange(e, experience.id, setExperience)}
        />
      </div>

      <div className="field description">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={experience.description}
          onChange={(e) => handleChange(e, experience.id, setExperience)}
        ></textarea>
      </div>

      <div className="actions">
        <button
          type="button"
          onClick={() => handleDelete(experience.id, setExperience)}
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

export default FormExperience;
