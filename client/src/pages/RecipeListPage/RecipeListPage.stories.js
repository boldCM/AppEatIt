import React from "react";

import RecipeListPage from "./RecipeListPage";

export default {
  title: "Page",
  component: RecipeListPage,
};

export const recipeListPage = (args) => <RecipeListPage {...args} />;
