import React, { useEffect, useState } from "react";
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
  const [ingredients, setIngredients] = useState([]);

  setIngredients(Ingredients);

  // useEffect(()=> {
  //   async function fetchDate() {
  //     const getIngredients = await
  //   }
  // })
  console.log(ingredients);
  return (
    <>
      <h2>Zutaten</h2>
      <Ingredient>
        {ingredients?.map((ingredient) => (
          <li key={id}>{ingredient}</li>
        ))}
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

RecipeIngredients.propTypes = {
  Ingredients: PropTypes.array,
  id: PropTypes.number,
};

export default RecipeIngredients;
