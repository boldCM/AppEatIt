import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import GroceryList from "../../components/GroceryList/GroceryList";

import { Header } from "../../components/Header";
import {
  Layout,
  WeekListContainer,
} from "../../components/styledComponents/LayoutPages";

const GroceryListPage = () => {
  return (
    <Layout>
      <Header title="Einkaufsliste" />
      <WeekListContainer>
        <GroceryList />
        <BottomNav />
      </WeekListContainer>
    </Layout>
  );
};

export default GroceryListPage;
