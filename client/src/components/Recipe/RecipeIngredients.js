import React from "react";
import styled from "styled-components/macro";

const Ingredient = styled.ul`
  list-style-type: none;
  margin-bottom: 25px;
  li {
    padding: 0.3rem 0;
    margin-left: -38px;
  }
`;

const RecipeIngredients = () => {
  return (
    <>
      <h2>Zutaten</h2>
      <Ingredient>
        <li>Mehl</li>
        <li>Wasser</li>
        <li>Salz</li>
        <li>Hefe</li>
        <li>Sack Kartoffeln</li>
        <li>Butter</li>
      </Ingredient>
    </>
  );
};

export default RecipeIngredients;
