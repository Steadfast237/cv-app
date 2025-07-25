/* eslint-disable react/prop-types */
export function Link({ text }) {
  return (
    text && (
      <li>
        <a href="#">{text}</a>
      </li>
    )
  );
}
