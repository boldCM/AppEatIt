import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GroceryListItem from "./GroceryListItem";
import { getWeek } from "../../api/connectJSON";

const ContainerGroceries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

// 3. filtern nach doubled Groceries
// 4. addiere doubled Groceries
// 5. exlcude unneccessary groceries
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

  // if das grocery ist gleich einem anderen grocery,
  //  dann addiere die quantitys dieser beiden  objekte
  // und stecke das Ergebnis in einen neuen string/number

  // reduce benutzen
  // useEffect(() => {
  var holder = {};
  oneShoppingListArray.forEach(function (object) {
    if (Object.hasOwnProperty.call(holder, object.Grocery)) {
      holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
    } else {
      holder[object.Grocery] = object.Quantity;
    }
  });
  console.log(holder);

  var calculatedArray = [];

  for (var prop in holder) {
    calculatedArray.push({
      Grocery: prop,
      Quantity: holder[prop],
    });
  }

  console.log(calculatedArray);

  // return calculatedArray;
  // }, []);

  // var holder = {};
  // oneShoppingListArray.forEach(function (object) {
  //   if (holder.hasOwnProperty(object.Grocery)) {
  //     holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
  //   } else {
  //     holder[object.Grocery] = object.Quantity;
  //   }
  // });
  // console.log(holder);

  // var calculatedArray = [];

  // for (var prop in holder) {
  //   calculatedArray.push({
  //     Grocery: prop,
  //     Quantity: holder[prop],
  //   });
  // }

  // console.log(calculatedArray);

  return (
    <ContainerGroceries>
      {calculatedArray?.map((object) => (
        <GroceryListItem
          key={object.Grocery}
          // Grocery={object.Quantity + " " + object.Unit + " " + object.Grocery}
          Grocery={object.Quantity + " " + object.Grocery}
        />
      ))}
    </ContainerGroceries>
  );
};

export default GroceryList;
