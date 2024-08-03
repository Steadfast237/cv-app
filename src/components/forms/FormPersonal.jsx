function FormPersonal({ personal, handlePersonal, setPersonal }) {
  return (
    <form>
      <div className="field">
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          value={personal.firstName}
          onChange={(e) => handlePersonal(e, setPersonal)}
        />
      </div>

      <div className="field">
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          value={personal.lastName}
          onChange={(e) => handlePersonal(e, setPersonal)}
        />
      </div>

      <div className="field pnumber">
        <label htmlFor="pnumber">Phone number</label>
        <input
          type="text"
          id="pnumber"
          name="phoneNumber"
          value={personal.phoneNumber}
          onChange={(e) => handlePersonal(e, setPersonal)}
        />
      </div>

      <div className="field email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={personal.email}
          onChange={(e) => handlePersonal(e, setPersonal)}
        />
      </div>

      <div className="field linkedin">
        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={personal.linkedin}
          onChange={(e) => handlePersonal(e, setPersonal)}
        />
      </div>

      <div className="field github">
        <label htmlFor="github">Github</label>
        <input
          type="url"
          id="github"
          name="github"
          value={personal.github}
          onChange={(e) => handlePersonal(e, setPersonal)}
        />
      </div>
    </form>
  );
}

export default FormPersonal;
