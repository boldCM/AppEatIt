import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Header } from "../../components/Header";
import RecipeList from "../../components/RecipeList/RecipeList";
import {
  Layout,
  WeekListContainer,
} from "../../components/styledComponents/LayoutPages";

const RecipeListPage = () => {
  return (
    <Layout>
      <Header title="Rezepte" />
      <WeekListContainer>
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
      </WeekListContainer>
    </Layout>
  );
};
export default RecipeListPage;
