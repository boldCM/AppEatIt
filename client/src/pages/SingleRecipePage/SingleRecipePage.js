import React, { useEffect, useState } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Header } from "../../components/Header";
import RecipeIngredients from "../../components/Recipe/RecipeIngredients";
import RecipePreparation from "../../components/Recipe/RecipePreparation";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { getRecipeByRecipeName } from "../../api/connectJSON";

const RecipeLayout = styled(ContentContainer)`
  padding-left: 20px;
`;

const SingleRecipe = ({ RecipeName }) => {
  const [singleRecipe, setSingleRecipe] = useState({});

  useEffect(() => {
    async function fetchData() {
      // const getSingleRecipe = await getRecipeByRecipeName("Geschnetzeltes");
      const { id, Ingredients, Instructions } = await getRecipeByRecipeName(
        RecipeName
      );
      // const getSingleRecipe = await getRecipeByRecipeName(RecipeName);
      // setSingleRecipe(getSingleRecipe);
      setSingleRecipe({ id, Ingredients, Instructions });
      return id, Ingredients, Instructions;
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Header title={RecipeName} />
      <RecipeLayout>
        <RecipeIngredients
          Ingredients={singleRecipe.Ingredients}
          id={singleRecipe.id}
        />
        <RecipePreparation instructions={singleRecipe.Instructions} />
      </RecipeLayout>
      <BottomNav />
    </Layout>
  );
};

SingleRecipe.propTypes = {
  RecipeName: PropTypes.string,
};
export default SingleRecipe;
