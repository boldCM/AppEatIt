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
  console.log(oneShoppingListArray);

  var holder = {};
  oneShoppingListArray.forEach(function (object) {
    if (Object.hasOwnProperty.call(holder, object.Grocery)) {
      holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
      //  zweites Obkject für unit und anschließend zusammen führen...
    } else {
      holder[object.Grocery] = object.Quantity;
    }
  });

  console.log(holder);

  const calculatedArray = [];

  // for (const prop in holder) {
  //   calculatedArray.push({
  //     Grocery: prop,
  //     Quantity: holder[prop],
  //   });
  // }

  console.log(calculatedArray);

  // zweites Object für Unit:
  const holderUnit = {};
  oneShoppingListArray.forEach(function (object) {
    if (Object.hasOwnProperty.call(holderUnit, object.Grocery)) {
      // aber was ist mit zwei unterschiedlichen units?
      holderUnit[object.Grocery] = object.Unit;
      //  zweites Obkject für unit und anschließend zusammen führen...
    } else {
      holderUnit[object.Grocery] = object.Unit;
    }
  });

  console.log(holderUnit);

  for (const prop in holder && holderUnit) {
    if (Object.hasOwnProperty.call(holderUnit, prop))
      calculatedArray.push({
        Grocery: prop,
        Quantity: holder[prop],
        Unit: holderUnit[prop],
      });
  }

  // füge jedem Object, dass den gleichen Namen hat noch ein key:valu pair hinzu...

  console.log(calculatedArray);

  // const ArrayUnit = [""];
  // console.log(ArrayUnit);

  // for (const units in holderUnit) {
  //   ArrayUnit.push({
  //     Grocery: units,
  //     Unit: holderUnit[units],
  //   });
  // }
  // console.log(ArrayUnit);

  // const ShoppingList = Object.assign(ArrayUnit, ...calculatedArray);

  // console.log(ShoppingList);

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
