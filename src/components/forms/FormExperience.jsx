import { useCv } from "../../CvContext";
import AddButton from "../AddButton";
import FormField from "./FormField";
import FormSummary from "./FormSummary";

function FormExperience() {
  const { state, dispatch } = useCv();

  return (
    <>
      {state.experience.map((experience) => {
        if (experience.id === state.activeForm) {
          return (
            <form key={experience.id}>
              <FormField id="position" name="Position" className="two-col">
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={experience.position}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="employer" name="Employer">
                <input
                  type="text"
                  id="employer"
                  name="employer"
                  value={experience.employer}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="city" name="City">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={experience.city}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="startDate" name="Start date">
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField id="endDate" name="End date">
                <input
                  type="text"
                  id="endDate"
                  name="endDate"
                  value={experience.endDate}
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
                  value={experience.description}
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
          <FormSummary
            key={experience.id}
            id={experience.id}
            placeholder="Experience"
            title={experience.position}
          >
            {experience.employer}
            {experience.city ? `, ${experience.city}` : ""}
          </FormSummary>
        );
      })}

      <AddButton
        model={{
          position: "",
          employer: "",
          city: "",
          startDate: "",
          endDate: "",
          description: "",
          id: crypto.randomUUID(),
        }}
      >
        Add experience
      </AddButton>
    </>
  );
}

export default FormExperience;
