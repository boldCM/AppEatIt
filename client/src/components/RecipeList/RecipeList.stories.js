import React from "react";

import RecipeList from "./RecipeList";

export default {
  title: "Components",
  component: RecipeList,
};

export const recipeList = (args) => <RecipeList {...args} />;
