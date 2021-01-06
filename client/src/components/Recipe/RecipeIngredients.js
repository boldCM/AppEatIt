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
  if (Ingredients.length > 0) {
    const index = Ingredients.findIndex((item) => {
      return item.Quantity === 0;
    });
    console.log(index);
    if (index > 0) {
      const newObject = Object.assign((Ingredients[index].Quantity = "etwas"));
      console.log(newObject);
    }
  }

  return (
    <>
      <h2>Zutaten</h2>
      <Ingredient>
        {Ingredients?.map((ingredient) => (
          <li key={ingredient.Grocery}>
            {ingredient.Quantity +
              " " +
              ingredient.Unit +
              " " +
              ingredient.Grocery}
          </li>
        ))}
      </Ingredient>
    </>
  );
};

RecipeIngredients.propTypes = {
  Ingredients: PropTypes.array,
};

export default RecipeIngredients;
