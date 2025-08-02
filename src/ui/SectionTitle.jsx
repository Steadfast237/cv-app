import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  font-family: inherit;
  font-weight: 600;
  font-style: normal;
  font-size: 1.17em;
  border: none;
  outline: none;

  field-sizing: content;
  width: fit-content;

  &:hover,
  &:focus {
    box-shadow: 0 1px 0 0 black;
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }

  &::placeholder {
    color: black;
  }

  &:focus::placeholder {
    color: revert;
  }

  &:disabled::placeholder {
    color: revert;
  }
`;

function capitaliseFirstLetter(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function SectionTitle({ defaultTitle, show }) {
  const [title, setTitle] = useState("");

  defaultTitle = capitaliseFirstLetter(defaultTitle);

  function handleChange(e) {
    setTitle(
      e.target.value === ""
        ? e.target.value
        : capitaliseFirstLetter(e.target.value)
    );
  }

  return (
    <Input
      type="text"
      value={title}
      onChange={handleChange}
      placeholder={defaultTitle}
      disabled={!show}
      name="title"
    />
  );
}

export default SectionTitle;
