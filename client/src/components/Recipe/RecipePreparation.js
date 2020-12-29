import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Preparation = styled.p`
  padding: 0 20px 30px 0;
  line-height: 1.5rem;
`;

const RecipePreparation = ({ Instructions }) => {
  return (
    <>
      <h2>Zubereitung</h2>
      <Preparation>{Instructions}</Preparation>
    </>
  );
};

RecipePreparation.propTypes = {
  Instructions: PropTypes.string,
};
export default RecipePreparation;
