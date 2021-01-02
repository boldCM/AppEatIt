import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

// const StyledInputField = styled.textarea`
const StyledInputField = styled.input`
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

const InputField = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} type="submit">
      <label htmlFor="textarea">
        <StyledInputField
          placeholder="Füge etwas der Einkaufsliste hinzu"
          type="text"
        />
      </label>
    </form>
  );
};

InputField.propTypes = {
  handleSubmit: PropTypes.any,
};

export default InputField;
