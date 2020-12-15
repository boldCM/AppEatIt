import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Ingredient = styled.ul`
  margin-bottom: 25px;
  li {
    padding: 0.3rem 0;
    margin-left: -38px;
  }
`;

const RecipeIngredients = ({ Ingredients }) => {
  return (
    <>
      <h2>Zutaten</h2>
      <Ingredient>
        {Ingredients?.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </Ingredient>
    </>
  );
};

RecipeIngredients.propTypes = {
  Ingredients: PropTypes.array,
  // id: PropTypes.any,
};

export default RecipeIngredients;
