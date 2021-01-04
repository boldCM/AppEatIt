import React, { useState } from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-end;
  input[type="number"] {
    width: 4.5rem;
    margin-right: 5px;
  }
  input[type="text"] {
    margin-left: 5px;
    width: 8rem;
  }
`;

const StyledSelect = styled.select`
  border: 1px solid var(--active-color);
  background-color: var(--primary-color);
  font-family: "Encode Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 300;
`;

const StyledInputField = styled.input`
  border: 1px solid var(--active-color);
  background-color: var(--primary-color);
  font-family: "Encode Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 300;
  padding: 0.5rem;

  ::placeholder {
    text-align: center;
  }
`;

const InputField = ({ handleSubmit }) => {
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [shoppingItem, setShoppingItem] = useState("");

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleShoppingItemChange = (event) => {
    setShoppingItem(event.target.value);
  };

  console.log(quantity);
  console.log(unit);
  console.log(shoppingItem);

  return (
    <StyledForm onSubmit={handleSubmit} type="submit">
      <label htmlFor="Menge">
        <StyledInputField
          placeholder="Menge"
          type="number"
          maxLength="3"
          size="3"
          onChange={handleQuantityChange}
        />
      </label>
      <label htmlFor="Menge"></label>
      <StyledSelect onChange={handleUnitChange}>
        <option value="">~</option>
        <option value="gr">gr</option>
        <option value="ml">ml</option>
        <option value="Pck">Pck</option>
        <option value="El">El</option>
        <option value="tl">tl</option>
      </StyledSelect>

      <label htmlFor="textarea">
        <StyledInputField
          placeholder="Einkaufsartikel"
          type="text"
          onChange={handleShoppingItemChange}
        />
      </label>
    </StyledForm>
  );
};

InputField.propTypes = {
  handleSubmit: PropTypes.any,
};

export default InputField;
