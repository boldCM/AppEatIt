import React from "react";

import RecipeListItem from "./RecipeListItem";

export default {
  title: "Components",
  component: RecipeListItem,
};

export const recipeListItem = (args) => <RecipeListItem {...args} />;
