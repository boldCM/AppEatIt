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
  // const [groceries, setGroceries] = useState([]);
  const [recipeObject, setRecipeObject] = useState([]);

  useEffect(() => {
    async function getRecipesInWeek() {
      const getRecipeObjects = await getWeek();
      console.log(getRecipeObjects);
      setRecipeObject(getRecipeObjects);
    }
    getRecipesInWeek();
  }, []);

  console.log(recipeObject);

  const groceryArrays = recipeObject?.map((ingredient) => {
    return ingredient.Recipe.Ingredients;
  });

  const oneGroceryArray = [].concat.apply([], groceryArrays);

  console.log(oneGroceryArray);

  return (
    <ContainerGroceries>
      {oneGroceryArray?.map((ingredient) => (
        <GroceryListItem key={ingredient} Grocery={ingredient} />
      ))}
    </ContainerGroceries>
  );
};

export default GroceryList;
