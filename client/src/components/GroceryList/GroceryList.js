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
// dabei noch den String zur Number convertieren, durch +(Zahl) oder durch Number(Zahl)
// ebenfalls kann mir parseInt eine ganze Zahl wiedergeben, obwohl Buchstaben drankleben wir bei 300gr und parseFloat gibt meine eine Komma-Zahl wieder 12.5g --> 12.5
// 5. exlcude unneccessary groceries
// vllt noch in Klammern zu welchem Rezept die Groceries gehören? (also RecipeName mitgeben)

const GroceryList = () => {
  const [recipeObject, setRecipeObject] = useState([]);
  const [grocery, setGrocery] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

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

  // const iterator1 = oneShoppingListArray.entries();

  // console.log(iterator1.next().value);

  // const iteratedArray= oneShoppingListArray.map((object)=>{
  // const bla = (oneShoppingListArray) => {
  // for (let i = 0; i < oneShoppingListArray.length; i++) {
  //   const element = oneShoppingListArray[i];
  //   for (const [key, value] of Object.entries(element)) {
  //     console.log(`${key}: ${value}`);
  //     return `${key}: ${value}`;
  //   }
  // }
  // console.log(bla(oneShoppingListArray));
  // ich will von jeder Stelle im Array, also von jedem Objekt erstmal das Value vom Grocery-Key haben.
  // console.log(oneShoppingListArray[0]);
  // const { Grocery, Unit, Quantity } = oneShoppingListArray[0];
  // console.log(Grocery);
  // console.log(Unit);
  // console.log(Quantity);
  // wenn ich für jede Stelle im Array destructere und dann rendere?
  // kann ich für jede Stelle einen useState einsetzen?
  // das heißt oneShoppingListArray mappen...?

  // const iteratedArray = oneShoppingListArray.map((object) => {
  //   const { Grocery, Unit, Quantity } = object;
  //   setUnit(Unit);
  //   setGrocery(Grocery);
  //   setQuantity(Quantity);
  //   return Grocery;
  // });
  // console.log(iteratedArray);

  // Object.is() vergleich Objekte!!!

  // console.log(iteratedArray)

  // zahlen parsen

  // console.log(parseInt(oneShoppingListArray));

  // console.log(oneShoppingListArray.valueOf());

  // gibt mir alle Zahlen wieder:
  // const Numbers = oneShoppingListArray?.map((ingredient) => parseInt(ingredient));

  // und den rest slicen, stellen im array gleich lassen und addieren?-->aber dann ist die Stelle vom alten Mehl gekürzt

  return (
    <ContainerGroceries>
      {/* {oneShoppingListArray?.map((ingredient) => (
        <GroceryListItem key={ingredient} Grocery={ingredient} />
      ))} */}

      {oneShoppingListArray?.map((object) => (
        <GroceryListItem
          key={object.Grocery}
          Grocery={object.Quantity + " " + object.Unit + " " + object.Grocery}
        />
      ))}
    </ContainerGroceries>
  );
};

export default GroceryList;
