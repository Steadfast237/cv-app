import FormTechnical from './forms/FormTechnical';

function Technical({
  showForm,
  technical,
  setTechnical,
  handleActiveSection,
  handlePersonal,
}) {
  return (
    <div>
      <div className="headLine">
        <h3>Technical skills</h3>
        {showForm ? (
          <button type="button" onClick={() => handleActiveSection('')}>
            Hide
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleActiveSection('technical')}
          >
            Show
          </button>
        )}
      </div>

      {showForm && (
        <FormTechnical
          technical={technical}
          handlePersonal={handlePersonal}
          setTechnical={setTechnical}
        />
      )}
    </div>
  );
}

export default Technical;
