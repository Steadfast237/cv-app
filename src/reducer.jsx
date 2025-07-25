import template from "./data";

const initialState = {
  activeForm: "",
  activeSection: "personal",
  // selectedTemplate: "classic",

  education: [],
  experience: [],
  project: [],
  personal: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedin: "",
    github: "",
  },
  technical: {
    languages: "",
    frameworks: "",
    devTools: "",
    libraries: "",
  },
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "toggle": {
      const section = state.activeSection === payload ? "" : payload;

      return {
        ...state,
        activeSection: section,
        activeForm: "",
        // activeForm: !section ? "" : state.activeForm,
      };
    }

    case "add_form": {
      return {
        ...state,
        activeForm: payload.id,
        [state.activeSection]: [...state[state.activeSection], payload],
      };
    }

    case "edit_form": {
      return { ...state, activeForm: payload };
    }

    case "delete_form": {
      return {
        ...state,
        [state.activeSection]: state[state.activeSection].filter(
          (element) => element.id !== state.activeForm
        ),
      };
    }

    case "submit_form": {
      return { ...state, activeForm: "" };
    }

    case "typing": {
      const key = payload.target.name;
      const value = payload.target.value;

      return {
        ...state,
        [state.activeSection]: !Array.isArray(state[state.activeSection])
          ? { ...state[state.activeSection], [key]: value }
          : state[state.activeSection].map((element) => {
              if (element.id === state.activeForm) {
                return { ...element, [key]: value };
              }

              return element;
            }),
      };
    }

    case "load": {
      return {
        ...state,
        personal: template.personal,
        education: template.eduction,
        experience: template.experience,
        project: template.projects,
        technical: template.technical,
      };
    }

    case "clear": {
      return {
        ...initialState,
        activeSection: state.activeSection,
      };
    }

    default: {
      throw new Error("unknown action: " + type);
    }
  }
}

export { reducer, initialState };
