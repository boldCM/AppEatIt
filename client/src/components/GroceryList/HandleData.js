import React, { useEffect, useState } from "react";
import { getWeek, postGroceryList } from "../../api/connectJSON";

const HandleData = () => {
  const [recipeObject, setRecipeObject] = useState([]);

  useEffect(() => {
    async function getRecipesInWeek() {
      const getRecipeObjects = await getWeek();
      setRecipeObject(getRecipeObjects);
    }
    getRecipesInWeek();
  }, []);

  const oneShoppingListArray = recipeObject.flatMap((ingredient) => {
    return ingredient.Ingredients;
  });

  const filteredArray = oneShoppingListArray.filter((object) => {
    return (
      object.Grocery !== "Salz" &&
      object.Grocery !== "Wasser" &&
      object.Grocery !== "Olivenöl" &&
      object.Grocery !== "Öl" &&
      object.Grocery !== "Pfeffer"
    );
  });

  console.log(filteredArray);

  const holder = {};
  filteredArray.forEach(function (object) {
    if (Object.hasOwnProperty.call(holder, object.Grocery)) {
      holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
    } else {
      holder[object.Grocery] = object.Quantity;
    }
  });

  const calculatedArray = [];

  const holderUnit = {};
  filteredArray.forEach(function (object) {
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
  console.log(calculatedArray);
  return calculatedArray;
};

const PostData = (calculatedArray) => {
  //   const calculatedArray = HandleData();

  const saveShoppingList = async (calculatedArray) => {
    await postGroceryList(calculatedArray);
  };
  saveShoppingList(calculatedArray);
  return;
};

// PostData()

export { HandleData, PostData };
