import { useCv } from "../CvContext";

function Section({ title, name, children }) {
  const { state, dispatch } = useCv();

  const show = state.activeSection === name;

  function handleToggle() {
    dispatch({ type: "toggle", payload: name });
  }

  return (
    <div className="section">
      <h3>
        <span>{title}</span>
        <button onClick={handleToggle}>{show ? "Close" : "Open"}</button>
      </h3>

      {show && children}
    </div>
  );
}

export default Section;
