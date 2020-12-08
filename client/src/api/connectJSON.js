export async function getRecipies() {
  const response = await fetch("http://localhost:8080/recipes");
  const recipeList = await response.json();
  console.log(recipeList);
  return recipeList;
}

export async function getRecipeByRecipeName(RecipeName) {
  const response = await fetch(`http://localhost:8080/recipes/${RecipeName}`);
  const recipe = await response.json();
  return recipe;
}
