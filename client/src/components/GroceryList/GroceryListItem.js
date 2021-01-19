import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import Checkbox from "../../assets/checkbox.svg";
import CheckboxChecked from "../../assets/checkboxChecked.svg";
import PropTypes from "prop-types";
import DeleteIcon from "../../assets/deleteIcon.svg";
import { deleteItemFromShoppingList } from "../../api/connectJSON";

const ListItem = styled.p`
  display: inline-flex;
  align-items:center;
  margin: 0.6rem 0;
  button {
    margin: 1px 5px 0 0;
  }
  button:last-child{
    position: fixed;
    right: 5px;
  }
  }
`;

const GroceryListItem = ({ splittedGrocery, Grocery }) => {
  const history = useHistory();
  const { title } = useParams();
  const [ischecked, setIsChecked] = useState(false);

  const CheckboxSrc = !ischecked ? Checkbox : CheckboxChecked;

  const CheckboxAlt = !ischecked ? "Checkbox" : "Checkbox is ticked";

  const handleShoppingItemDelete = async () => {
    await deleteItemFromShoppingList(Grocery);
    console.log(typeof Grocery);
    console.log(Grocery);
    if (!title === "/Einkaufsliste") {
      history.push("/Einkaufsliste");
    } else {
      window.location.reload();
    }
  };

  return (
    <ListItem>
      <IconButton
        iconSrc={CheckboxSrc}
        iconAlt={CheckboxAlt}
        onClick={() => setIsChecked(!ischecked)}
      />
      {splittedGrocery}
      <IconButton
        iconSrc={DeleteIcon}
        iconAlt="DeleteIcon"
        onClick={() => handleShoppingItemDelete(Grocery)}
      />
    </ListItem>
  );
};

GroceryListItem.propTypes = {
  splittedGrocery: PropTypes.string,
  Grocery: PropTypes.string,
};

export default GroceryListItem;
