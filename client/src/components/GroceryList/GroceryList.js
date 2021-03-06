import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GroceryListItem from "./GroceryListItem";
import { checkShoppingList } from "../../api/connectJSON";
import { HandleData } from "./HandleData";

const ContainerGroceries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const GroceryList = () => {
  const [recipeObject, setRecipeObject] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const checkList = await checkShoppingList();
      setRecipeObject(checkList);
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
          splittedGrocery={
            object.Quantity + " " + object.Unit + " " + object.Grocery
          }
          Grocery={object.Grocery}
        />
      ))}
    </ContainerGroceries>
  );
};

export default GroceryList;
