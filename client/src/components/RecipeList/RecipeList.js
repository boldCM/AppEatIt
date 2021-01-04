import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getRecipies } from "../../api/connectJSON";
import RecipeListItem from "./RecipeListItem";
import { ContentContainer } from "../styledComponents/LayoutPages";

const ListContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 56px;
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

  return (
    <ListContainer>
      {recipes?.map((recipes) => (
        <RecipeListItem key={recipes._id} WholeRecipe={recipes} />
      ))}
    </ListContainer>
  );
};

export default RecipeList;
