import { useCv } from "../../CvContext";
import AddButton from "../AddButton";
import FormField from "./FormField";
import FormSummary from "./FormSummary";

function FormEducation() {
  const { state, dispatch } = useCv();

  return (
    <>
      {state.education.map((education) => {
        if (education.id === state.activeForm) {
          return (
            <form key={education.id}>
              <FormField className="two-col" name="Degree" id="degree">
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField name="School" id="school">
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={education.school}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField name="City" id="city">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={education.city}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField name="Start date" id="startdate">
                <input
                  type="text"
                  id="startdate"
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
              </FormField>

              <FormField name="End date" id="endate">
                <input
                  type="text"
                  id="endate"
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => dispatch({ type: "typing", payload: e })}
                />
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
            key={education.id}
            title={education.degree}
            placeholder="Education"
            id={education.id}
          >
            {education.city} {education.school}
          </FormSummary>
        );
      })}

      <AddButton
        model={{
          school: "",
          degree: "",
          city: "",
          startDate: "",
          endDate: "",
          id: crypto.randomUUID(),
        }}
      >
        Add education
      </AddButton>
    </>
  );
}

export default FormEducation;
