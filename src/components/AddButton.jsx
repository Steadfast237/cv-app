import { useCv } from "../CvContext";

function AddButton({ model, children }) {
  const { dispatch } = useCv();

  return (
    <button
      onClick={() =>
        dispatch({
          type: "add_form",
          payload: model,
        })
      }
      className="add"
    >
      {children}
    </button>
  );
}

export default AddButton;
