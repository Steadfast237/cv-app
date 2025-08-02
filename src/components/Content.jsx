import { useCv } from "../CvContext";

import Sections from "./Sections";
import Section from "./Section";
import Preview from "./Preview";

import FormPersonal from "./forms/FormPersonal";
import FormEducation from "./forms/FormEducation";
import FormExperience from "./forms/FormExperience";
import FormProject from "./forms/FormProject";
import FormTechnical from "./forms/FormTechnical";
import SectionTitle from "../ui/SectionTitle";

function Content() {
  const { dispatch, state } = useCv();

  function handleDownload() {
    window.print();
  }

  function handleSave() {
    localStorage.setItem("cv", JSON.stringify(state));
    alert("saved");
  }

  return (
    <main>
      <Sections>
        <div className="section-nav">
          <button type="click" onClick={() => dispatch({ type: "load" })}>
            Example
          </button>
          <button type="click" onClick={() => dispatch({ type: "clear" })}>
            Clear Forms
          </button>
          <button type="click" onClick={handleSave}>
            Save
          </button>
          <button type="click" onClick={handleDownload}>
            Download
          </button>
        </div>

        <Section name={"personal"}>
          <SectionTitle defaultTitle="Personal details" />
          <FormPersonal />
        </Section>

        <Section name={"education"}>
          <SectionTitle defaultTitle="Educations" />
          <FormEducation />
        </Section>

        <Section name={"experience"}>
          <SectionTitle defaultTitle="Experiences" />
          <FormExperience />
        </Section>

        <Section name={"project"}>
          <SectionTitle defaultTitle="Projects" />
          <FormProject />
        </Section>

        <Section name={"technical"}>
          <SectionTitle defaultTitle="Technical skills" />
          <FormTechnical />
        </Section>
      </Sections>

      <Preview />
    </main>
  );
}

export default Content;
