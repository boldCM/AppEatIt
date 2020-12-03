import React, { useState } from "react";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import Checkbox from "../../assets/checkbox.svg";
import CheckboxChecked from "../../assets/checkboxChecked.svg";
import PropTypes from "prop-types";

const ListItem = styled.p`
  display: inline-flex;
  margin: 0.4rem 0;
  button {
    margin: 1px 5px 0 0;
  }
`;

const GroceryListItem = ({ Grocery }) => {
  const [ischecked, setIsChecked] = useState(false);

  const CheckboxSrc = ischecked ? Checkbox : CheckboxChecked;

  return (
    <ListItem>
      <IconButton
        iconSrc={CheckboxSrc}
        iconAlt="Checkbox"
        onClick={() => setIsChecked(!ischecked)}
      />
      {Grocery}
    </ListItem>
  );
};

GroceryListItem.propTypes = {
  Grocery: PropTypes.string,
};

export default GroceryListItem;
