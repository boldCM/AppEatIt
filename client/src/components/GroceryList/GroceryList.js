import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import GroceryListItem from "./GroceryListItem";
import { getRecipies, getWeek } from "../../api/connectJSON";

const ContainerGroceries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

// 1. Get Groceries
// 2. Map each Groceries
// 3. filtern nach doubled Groceries
// 4. addiere doubled Groceries
// dabei noch den String zur Number convertieren, durch +(Zahl) oder durch Number(Zahl)
// ebenfalls kann mir parseInt eine ganze Zahl wiedergeben, obwohl Buchstaben drankleben wir bei 300gr und parseFloat gibt meine eine Komma-Zahl wieder 12.5g --> 12.5
// 5. exlcude unneccessary groceries
// vllt noch in Klammern zu welchem Rezept die Groceries gehören? (also RecipeName mitgeben)

const GroceryList = () => {
  // um später über jedes einzelne Grocerie zu mappen möchte ich den State nutzen
  // const [groceries, setGroceries] = useState([]);
  // ersmal das Object speichern:
  const [recipeObject, setRecipeObject] = useState([]);

  // getGroceries from week:
  useEffect(() => {
    async function getRecipesInWeek() {
      const getRecipeObjects = await getWeek();
      setRecipeObject(getRecipeObjects);
    }
    getRecipesInWeek();
  }, []);

  // gibt mir beide Recipe-Objekte:
  const filterRecipe = recipeObject.filter((item) => item.Recipe);
  console.log(filterRecipe);

  // das ertse Objekt allein, das matched:
  const findIngredients = filterRecipe.find((item) => item.Recipe.Ingredients);
  console.log(findIngredients);

  // destructuring funktioniert:
  // const { RecipeName } = findIngredients;
  // console.log(RecipeName);

  // ich kann mir alle sachen zu dem einen Recipe geben lassen:
  const Tschüss = findIngredients.Recipe;
  console.log(Tschüss);

  const Bla = Tschüss.Ingredients;
  console.log(Bla);

  // gibt mir zwei undefined Arrays
  // const anotherArray = filterRecipe.map((recipe) => recipe.findIngredients);
  // console.log(anotherArray);

  console.log(recipeObject.length);

  return (
    <ContainerGroceries>
      {Bla?.map((ingredient) => (
        <GroceryListItem key={ingredient} Grocery={ingredient} />
      ))}
      <GroceryListItem Grocery="Olivenöl" />
      <GroceryListItem Grocery="Olivenöl" />
      <GroceryListItem Grocery="Olivenöl" />
      <GroceryListItem Grocery="Olivenöl" />
    </ContainerGroceries>
  );
};

export default GroceryList;
