import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { OverlayLine, UnderlineHeaderOverlay } from "../styledComponents/Lines";
import IconButton from "../BottomNav/IconButton";
import DeleteIcon from "../../assets/deleteIcon.svg";
import GroceryIcon from "../../assets/grocerieIcon.svg";
import { deleteWholeWeek, deleteShoppingList } from "../../api/connectJSON";
import InputField from "../InputField/InputField";
import RecipeIcon from "../../assets/recipeIcon.svg";

const ContainerOverlayItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--gradient-color);
  background-repeat: no-repeat;
  height: 100%;
  justify-content: center;
  margin-bottom: 50px;
  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  button {
    margin: 0.5rem 0;
    display: flex;
    align-items: right;
    justify-content: flex-end;
  }
`;

const OverlayItem = () => {
  const history = useHistory();
  const { title } = useParams();
  const [grocery, setGrocery] = useState(false);

  const handleWeekDelete = async () => {
    await deleteWholeWeek();
    if (!title === "/") {
      history.push("/");
    } else {
      window.location.reload();
    }
  };

  const handleShoppingListDelete = async () => {
    await deleteShoppingList();
    if (!title === "/Home") {
      history.push("/Home");
    } else {
      window.location.reload();
    }
  };

  return (
    <ContainerOverlayItems>
      <h2>Übersicht</h2>
      <UnderlineHeaderOverlay />
      <IconButton
        iconSrc={GroceryIcon}
        iconAlt="GroceryIcon"
        onClick={() => setGrocery(!grocery)}
        content="Etwas zur Einkaufsliste hinzufügen"
      />
      {grocery && <InputField />}
      <OverlayLine />
      <IconButton
        iconSrc={DeleteIcon}
        iconAlt="DeleteIcon"
        // onClick={() => handleWeekDelete()}
        content="Einzelne Zeile  löschen"
      />
      <OverlayLine />
      <IconButton
        iconSrc={DeleteIcon}
        iconAlt="DeleteIcon"
        onClick={() => handleShoppingListDelete()}
        content="Einkaufsliste leeren"
      />

      <OverlayLine />
      <IconButton
        iconSrc={DeleteIcon}
        iconAlt="DeleteIcon"
        onClick={() => handleWeekDelete()}
        content="Wochenübersicht löschen"
      />

      <OverlayLine />
      <IconButton
        iconSrc={RecipeIcon}
        iconAlt="RecipeIcon"
        // onClick={() => handleWeekDelete()}
        content="Neues Rezept erstellen"
      />
      <OverlayLine />
    </ContainerOverlayItems>
  );
};

export default OverlayItem;
