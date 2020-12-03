import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Header } from "../../components/Header";
import RecipeList from "../../components/RecipeList/RecipeList";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";

const RecipeListPage = () => {
  return (
    <Layout>
      <Header title="Rezepte" />
      <ContentContainer>
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <RecipeList />
        <BottomNav />
      </ContentContainer>
    </Layout>
  );
};
export default RecipeListPage;
