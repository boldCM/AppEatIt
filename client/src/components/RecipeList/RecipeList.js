import React from "react";
import styled from "styled-components/macro";
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
  return (
    <ListContainer>
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
      <RecipeListItem RecipeName="Lasagne" />
    </ListContainer>
  );
};

export default RecipeList;
