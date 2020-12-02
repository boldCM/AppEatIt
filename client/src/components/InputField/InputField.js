import React from "react";
import styled from "styled-components/macro";

const StyledInputField = styled.textarea`
  border: 1px solid var(--active-color);
  background-color: var(--primary-color);

  font-family: "Encode Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 300;
  padding: 0.5rem;
  outline: none;
  resize: none;
  ::placeholder {
    text-align: center;
  }
`;

const InputField = () => {
  return <StyledInputField placeholder="Füge etwas der Einkaufsliste hinzu" />;
};

export default InputField;
