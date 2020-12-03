import React from "react";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import Checkbox from "../../assets/checkbox.svg";
import CheckboxChecked from "../../assets/checkboxChecked.svg";

const ListItem = styled.p`
  display: inline-flex;
  margin: 0;
`;

const GroceryListItem = () => {
  return (
    <ListItem>
      <IconButton iconSrc={Checkbox} iconAlt="Checkbox" />
      Kaffee
    </ListItem>
  );
};

export default GroceryListItem;
