import { useCv } from "../../CvContext";

function FormSummary({ id, title, placeholder, children }) {
  const { dispatch } = useCv();

  return (
    <div className="closed-form">
      <div>
        <h4>{!title ? `[${placeholder}]` : title}</h4>
        <p>{children}</p>
      </div>

      <button
        type="button"
        onClick={() => dispatch({ type: "edit_form", payload: id })}
      >
        Edit
      </button>
    </div>
  );
}

export default FormSummary;
