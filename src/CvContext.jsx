import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const CvContext = createContext();

function CvContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("cv")) || initialState
  );

  return (
    <CvContext.Provider value={{ state, dispatch }}>
      {children}
    </CvContext.Provider>
  );
}

function useCv() {
  const context = useContext(CvContext);
  if (!context) {
    throw new Error("useCv must be used within a CvContextProvider");
  }
  return context;
}

export { CvContextProvider, useCv };
