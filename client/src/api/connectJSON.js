export async function getRecipies() {
  const response = await fetch("/api/recipes");
  const recipeList = await response.json();
  return recipeList;
}

export async function getRecipeByRecipeName(RecipeName) {
  const response = await fetch(`/api/recipes?RecipeName=${RecipeName}`);
  const recipe = await response.json();
  return recipe;
}

export async function getWeek() {
  const response = await fetch(`/api/week`);
  const week = await response.json();
  return week;
}

export async function updateWeekByRecipeName(RecipeName) {
  const weekResponse = await fetch(`/api/week?RecipeName=${RecipeName}`);
  const weeks = await weekResponse.json();
  if (weeks.length > 0) {
    console.log("Write an error message");
    return;
  }
  const newWeekItem = { RecipeName: RecipeName };
  const url = `/api/week`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newWeekItem),
  });
}
