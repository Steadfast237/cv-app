/* eslint-disable react/prop-types */
export function Details({ title, children }) {
  return (
    <div className="details content-section ">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
