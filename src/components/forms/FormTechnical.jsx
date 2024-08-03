function FormTechnical({ technical, handlePersonal, setTechnical }) {
  return (
    <form>
      <div className="field languages">
        <label htmlFor="languages">Languages</label>
        <input
          type="text"
          id="languages"
          name="languages"
          value={technical.languages}
          onChange={(e) => handlePersonal(e, setTechnical)}
        />
      </div>

      <div className="field frameworks">
        <label htmlFor="frameworks">Frameworks</label>
        <input
          type="text"
          id="frameworks"
          name="frameworks"
          value={technical.frameworks}
          onChange={(e) => handlePersonal(e, setTechnical)}
        />
      </div>

      <div className="field devTools">
        <label htmlFor="devTools">Dev tools</label>
        <input
          type="text"
          id="devTools"
          name="devTools"
          value={technical.devTools}
          onChange={(e) => handlePersonal(e, setTechnical)}
        />
      </div>

      <div className="field libraries">
        <label htmlFor="libraries">Libraries</label>
        <input
          type="text"
          id="libraries"
          name="libraries"
          value={technical.libraries}
          onChange={(e) => handlePersonal(e, setTechnical)}
        />
      </div>
    </form>
  );
}

export default FormTechnical;
