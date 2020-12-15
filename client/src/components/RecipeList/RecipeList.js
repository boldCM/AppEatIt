import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getRecipies } from "../../api/connectJSON";
import RecipeListItem from "./RecipeListItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  hr {
    margin: 0;
  }
`;

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getRecipes = await getRecipies();
      setRecipes(getRecipes);
    }
    fetchData();
  }, []);
  // also ganzes Objekt holen und nicht in einen State speichern...?
  // ich will das ganze Objekt haben und in einer Constanten speichern und die übergeben...

  // und den rest der Infos getten...

  return (
    <ListContainer>
      {recipes?.map((recipes) => (
        <RecipeListItem
          key={recipes.id}
          RecipeName={recipes.RecipeName}
          RecipeId={recipes.id}
          WholeRecipe={recipes}
          // und denn Rest der Infos
        />
      ))}
    </ListContainer>
  );
};

export default RecipeList;
