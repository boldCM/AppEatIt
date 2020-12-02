import React from "react";

import SingleRecipe from "./SingleRecipePage";

export default {
  title: "Page",
  component: SingleRecipe,
};

export const singleRecipe = (args) => <SingleRecipe {...args} />;
