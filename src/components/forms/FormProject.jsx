import { useCv } from "../../CvContext";
import AddButton from "../AddButton";
import FormField from "./FormField";
import FormSummary from "./FormSummary";

function FormProject() {
  const { state, dispatch } = useCv();

  return (
    <>
      {state.project.map((project) => {
        if (project.id === state.activeForm) {
          return (
            <form key={project.id}>
              <FormField id="name" name="Project name" className="two-col">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={project.name}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="tools" name="Tools" className="two-col">
                <input
                  type="text"
                  id="tools"
                  name="tools"
                  value={project.tools}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="startDate" name="Start date">
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={project.startDate}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="endDate" name="End date">
                <input
                  type="text"
                  id="endDate"
                  name="endDate"
                  value={project.endDate}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField
                id="description"
                name="Description"
                className="two-col"
              >
                <textarea
                  name="description"
                  id="description"
                  value={project.description}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                ></textarea>
              </FormField>

              <div className="actions">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "delete_form" })}
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "submit_form" })}
                >
                  Done
                </button>
              </div>
            </form>
          );
        }

        return (
          <FormSummary key={project.id} id={project.id} title={project.name}>
            {project.tools}
          </FormSummary>
        );
      })}

      <AddButton
        model={{
          name: "",
          tools: "",
          startDate: "",
          endDate: "",
          description: "",
          id: crypto.randomUUID(),
        }}
      >
        Add project
      </AddButton>
    </>
  );
}

export default FormProject;
