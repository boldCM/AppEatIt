import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GroceryListItem from "./GroceryListItem";
import { getWeek } from "../../api/connectJSON";

const ContainerGroceries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

// 5. exlcude unneccessary groceries (Salz, Pfeffer)
// vllt noch in Klammern zu welchem Rezept die Groceries gehören? (also RecipeName mitgeben)

const GroceryList = () => {
  const [recipeObject, setRecipeObject] = useState([]);

  useEffect(() => {
    async function getRecipesInWeek() {
      const getRecipeObjects = await getWeek();
      setRecipeObject(getRecipeObjects);
    }
    getRecipesInWeek();
  }, []);

  const oneShoppingListArray = recipeObject.flatMap((ingredient) => {
    return ingredient.Recipe.Ingredients;
  });

  var holder = {};
  oneShoppingListArray.forEach(function (object) {
    if (Object.hasOwnProperty.call(holder, object.Grocery)) {
      holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
    } else {
      holder[object.Grocery] = object.Quantity;
    }
  });

  const calculatedArray = [];

  const holderUnit = {};
  oneShoppingListArray.forEach(function (object) {
    if (Object.hasOwnProperty.call(holderUnit, object.Grocery)) {
      holderUnit[object.Grocery] = object.Unit;
    } else {
      holderUnit[object.Grocery] = object.Unit;
    }
  });

  for (const prop in holder && holderUnit) {
    if (Object.hasOwnProperty.call(holderUnit, prop))
      calculatedArray.push({
        Grocery: prop,
        Quantity: holder[prop],
        Unit: holderUnit[prop],
      });
  }

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
