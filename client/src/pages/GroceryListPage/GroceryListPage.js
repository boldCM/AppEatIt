import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import GroceryList from "../../components/GroceryList/GroceryList";

import { Header } from "../../components/Header";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";

const GroceryListPage = () => {
  return (
    <Layout>
      <Header title="Einkaufsliste" />
      <ContentContainer>
        <GroceryList />
        <BottomNav />
      </ContentContainer>
    </Layout>
  );
};

export default GroceryListPage;
