export async function getRecipies() {
  const response = await fetch("api/recipes");
  const recipeList = await response.json();
  console.log(recipeList);
  return recipeList;
}

export async function getRecipeByRecipeName(RecipeName) {
  const response = await fetch(`api/recipes?RecipeName=${RecipeName}`);
  const recipe = await response.json();
  return recipe;
}
