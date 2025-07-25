function FormField({ id, name, className, children }) {
  return (
    <p className={className}>
      <label htmlFor={id}>{name}</label>
      {children}
    </p>
  );
}

export default FormField;
