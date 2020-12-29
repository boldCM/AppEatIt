import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import { Header } from "../../components/Header";
import RecipeList from "../../components/RecipeList/RecipeList";
import { Layout } from "../../components/styledComponents/LayoutPages";

const RecipeListPage = () => {
  return (
    <Layout>
      <Header title="Rezepte" />
      <RecipeList />
      <BottomNav />
    </Layout>
  );
};
export default RecipeListPage;
