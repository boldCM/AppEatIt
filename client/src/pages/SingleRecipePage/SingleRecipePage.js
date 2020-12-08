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
  const [singleRecipeId, setSingleRecipeId] = useState(Number);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    async function fetchData() {
      // const getSingleRecipe = await getRecipeByRecipeName("Geschnetzeltes");
      const result = await getRecipeByRecipeName(RecipeName);

      const { id, Ingredients, Instructions } = result[0];
      // const getSingleRecipe = await getRecipeByRecipeName(RecipeName);
      // setSingleRecipe(getSingleRecipe);
      console.log(Ingredients);
      setSingleRecipeId(id);
      setIngredients(Ingredients);
      setInstructions(Instructions);
      // return id, Ingredients, Instructions;
    }
    fetchData();
  }, [RecipeName]);
  console.log(ingredients);
  return (
    <Layout>
      <Header title={RecipeName} />
      <RecipeLayout>
        <RecipeIngredients Ingredients={ingredients} id={singleRecipeId} />
        <RecipePreparation Instructions={instructions} />
      </RecipeLayout>
      <BottomNav />
    </Layout>
  );
};

SingleRecipe.propTypes = {
  RecipeName: PropTypes.string,
};
export default SingleRecipe;
