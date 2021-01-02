import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GroceryListItem from "./GroceryListItem";
import { postGroceryList, checkShoppingList } from "../../api/connectJSON";
import { HandleData } from "./HandleData";

const ContainerGroceries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

// die gemappte und gefilterte Liste in die shoppingList collection posten
// die shopping liste generell aus der collection bekommen (evtl online filtern?)
// einzelne Items posten oder deleten und updaten können.

const GroceryList = () => {
  const [recipeObject, setRecipeObject] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const checkList = await checkShoppingList();
      setRecipeObject(checkList);
      if (checkList) {
        await postGroceryList();
        return;
      }
      return;
    }
    doFetch();
  }, []);

  const calculatedArray = HandleData(recipeObject);

  return (
    <ContainerGroceries>
      {calculatedArray?.map((object) => (
        <GroceryListItem
          key={object.Grocery}
          Grocery={object.Quantity + " " + object.Unit + " " + object.Grocery}
        />
      ))}
    </ContainerGroceries>
  );
};

export default GroceryList;
