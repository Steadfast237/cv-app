function FormProject({
  project,
  setProject,
  handleActiveForm,
  handleChange,
  handleDelete,
}) {
  return (
    <form>
      <div className="field name">
        <label htmlFor="name">Project name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={project.name}
          onChange={(e) => handleChange(e, project.id, setProject)}
        />
      </div>

      <div className="field tools">
        <label htmlFor="tools">Tools</label>
        <input
          type="text"
          id="tools"
          name="tools"
          value={project.tools}
          onChange={(e) => handleChange(e, project.id, setProject)}
        />
      </div>

      <div className="field">
        <label htmlFor={'startDate' + project.id}>Start date</label>
        <input
          type="text"
          id={'startDate' + project.id}
          name="startDate"
          value={project.startDate}
          onChange={(e) => handleChange(e, project.id, setProject)}
        />
      </div>

      <div className="field">
        <label htmlFor={'endDate' + project.id}>End date</label>
        <input
          type="text"
          id={'endDate' + project.id}
          name="endDate"
          value={project.endDate}
          onChange={(e) => handleChange(e, project.id, setProject)}
        />
      </div>

      <div className="field description">
        <label htmlFor={'description' + project.id}>Description</label>
        <textarea
          id={'description' + project.id}
          name="description"
          value={project.description}
          onChange={(e) => handleChange(e, project.id, setProject)}
        ></textarea>
      </div>

      <div className="actions">
        <button
          type="button"
          onClick={() => handleDelete(project.id, setProject)}
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

export default FormProject;
