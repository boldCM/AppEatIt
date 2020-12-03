import React from "react";

import GroceryList from "./GroceryList";

export default {
  title: "Components",
  component: GroceryList,
};

export const groceryList = (args) => <GroceryList {...args} />;
