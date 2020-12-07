import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { connectDB } from "../../api/ConnectJSON";
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
      const getRecipes = await connectDB();
      setRecipes(getRecipes);
    }
    fetchData();
    console.log(recipes + " hallo");
  }, [recipes]);
  console.log(recipes + " hallo");
  return (
    <ListContainer>
      {recipes?.map((recipes) => (
        <RecipeListItem key={recipes.id} RecipeName={recipes.RecipeName} />
      ))}
      {/* <RecipeListItem RecipeName="Lasagne" /> */}
    </ListContainer>
  );
};

export default RecipeList;
