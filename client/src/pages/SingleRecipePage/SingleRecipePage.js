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
import { useParams } from "react-router-dom";

const RecipeLayout = styled(ContentContainer)`
  padding-left: 20px;
`;

const SingleRecipe = () => {
  const { RecipeName } = useParams();

  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await getRecipeByRecipeName(RecipeName);
      const { Ingredients, Instructions } = result;
      setIngredients(Ingredients);
      setInstructions(Instructions);
    }
    fetchData();
  }, [RecipeName]);

  return (
    <Layout>
      <Header title={RecipeName} />
      <RecipeLayout>
        <RecipeIngredients Ingredients={ingredients} />
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
