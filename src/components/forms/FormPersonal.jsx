import { useCv } from "../../CvContext";
import FormField from "./FormField";

function FormPersonal() {
  const { state, dispatch } = useCv();

  return (
    <form>
      <FormField id="fname" name="First name">
        <input
          type="text"
          id="fname"
          name="firstName"
          value={state.personal.firstName}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField id="lname" name="Last name">
        <input
          type="text"
          id="lname"
          name="lastName"
          value={state.personal.lastName}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="pnumber" name="Phone number">
        <input
          type="text"
          id="pnumber"
          name="phoneNumber"
          value={state.personal.phoneNumber}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="email" name="Email">
        <input
          type="email"
          id="email"
          name="email"
          value={state.personal.email}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="linkedin" name="Linkedin">
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={state.personal.linkedin}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>

      <FormField className="two-col" id="github" name="Github">
        <input
          type="url"
          id="github"
          name="github"
          value={state.personal.github}
          onChange={(e) => dispatch({ type: "typing", payload: e })}
        />
      </FormField>
    </form>
  );
}

export default FormPersonal;
