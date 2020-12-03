import React from "react";

import GroceryListItem from "./GroceryListItem";

export default {
  title: "Components",
  component: GroceryListItem,
};

export const groceryListItem = (args) => <GroceryListItem {...args} />;
