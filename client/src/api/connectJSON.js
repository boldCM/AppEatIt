export async function getRecipies() {
  const response = await fetch("api/recipes");
  const recipeList = await response.json();
  return recipeList;
}

export async function getRecipeByRecipeName(RecipeName) {
  const response = await fetch(`api/recipes?RecipeName=${RecipeName}`);
  const recipe = await response.json();
  return recipe;
}

export async function getWeek() {
  const response = await fetch(`api/week`);
  const week = await response.json();
  return week;
}
