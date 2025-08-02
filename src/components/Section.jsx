import { cloneElement } from "react";
import { useCv } from "../CvContext";

function Section({ name, children }) {
  const { state, dispatch } = useCv();

  const show = state.activeSection === name;

  function handleToggle() {
    dispatch({ type: "toggle", payload: name });
  }

  return (
    <div className="section">
      <h3>
        {cloneElement(children[0], { show })}

        <button onClick={handleToggle}>{show ? "Close" : "Open"}</button>
      </h3>

      {show && children[1]}
    </div>
  );
}

export default Section;
