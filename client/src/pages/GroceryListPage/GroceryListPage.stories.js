import React from "react";

import GroceryListPage from "./GroceryListPage";

export default {
  title: "Page",
  component: GroceryListPage,
};

export const groceryListPage = (args) => <GroceryListPage {...args} />;
