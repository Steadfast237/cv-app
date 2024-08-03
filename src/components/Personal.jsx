import FormPersonal from './forms/FormPersonal';

function Personal({
  showForm,
  personal,
  handleActiveSection,
  handlePersonal,
  setPersonal,
}) {
  return (
    <div>
      <div className="headLine">
        <h3>Personal details</h3>
        {showForm ? (
          <button type="button" onClick={() => handleActiveSection('')}>
            Hide
          </button>
        ) : (
          <button type="button" onClick={() => handleActiveSection('personal')}>
            Show
          </button>
        )}
      </div>

      {showForm && (
        <FormPersonal
          personal={personal}
          handlePersonal={handlePersonal}
          setPersonal={setPersonal}
        />
      )}
    </div>
  );
}

export default Personal;
