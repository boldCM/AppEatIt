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

const RecipeIngredients = ({ Ingredients, id }) => {
  console.log(Ingredients);
  return (
    <>
      <h2>Zutaten</h2>
      <Ingredient>
        {Ingredients?.map((ingredient) => (
          <li key={id}>{ingredient}</li>
        ))}
      </Ingredient>
    </>
  );
};

RecipeIngredients.propTypes = {
  Ingredients: PropTypes.array,
  id: PropTypes.number,
};

export default RecipeIngredients;
