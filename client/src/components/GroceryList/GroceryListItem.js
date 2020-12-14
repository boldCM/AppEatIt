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

// 1. Get Groceries
// 2. Map each Groceries
// 3. filtern nach doubled Groceries
// 4. addiere doubled Groceries
// dabei noch den String zur Number convertieren, durch +(Zahl) oder durch Number(Zahl)
// ebenfalls kann mir parseInt eine ganze Zahl wiedergeben, obwohl Buchstaben drankleben wir bei 300gr und parseFloat gibt meine eine Komma-Zahl wieder 12.5g --> 12.5
// 5. exlcude unneccessary groceries
// vllt noch in Klammern zu welchem Rezept die Groceries gehören? (also RecipeName mitgeben)

const GroceryListItem = ({ Grocery }) => {
  const [ischecked, setIsChecked] = useState(false);

  const CheckboxSrc = !ischecked ? Checkbox : CheckboxChecked;

  const CheckboxAlt = !ischecked ? "Checkbox" : "Checkbox is ticked";

  return (
    <ListItem>
      <IconButton
        iconSrc={CheckboxSrc}
        iconAlt={CheckboxAlt}
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
