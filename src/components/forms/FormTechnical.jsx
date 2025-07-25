import { useCv } from "../../CvContext";
import FormField from "./FormField";

function FormTechnical() {
  const { state, dispatch } = useCv();

  return (
    <form>
      <FormField className="two-col" id="languages" name="Languages">
        <input
          type="text"
          id="languages"
          name="languages"
          value={state.technical.languages}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="frameworks" name="Frameworks">
        <input
          type="text"
          id="frameworks"
          name="frameworks"
          value={state.technical.frameworks}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="devTools" name="Dev tools">
        <input
          type="text"
          id="devTools"
          name="devTools"
          value={state.technical.devTools}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="libraries" name="Libraries">
        <input
          type="text"
          id="libraries"
          name="libraries"
          value={state.technical.libraries}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>
    </form>
  );
}

export default FormTechnical;
