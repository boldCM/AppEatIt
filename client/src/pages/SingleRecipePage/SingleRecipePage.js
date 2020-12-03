import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Header } from "../../components/Header";
import RecipeIngredients from "../../components/Recipe/RecipeIngredients";
import RecipePreparation from "../../components/Recipe/RecipePreparation";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";
import styled from "styled-components/macro";

const RecipeLayout = styled(ContentContainer)`
  padding-left: 20px;
`;

const SingleRecipe = () => {
  return (
    <Layout>
      <Header title="Rezept" />
      <RecipeLayout>
        <RecipeIngredients />
        <RecipePreparation />
      </RecipeLayout>
      <BottomNav />
    </Layout>
  );
};

export default SingleRecipe;
