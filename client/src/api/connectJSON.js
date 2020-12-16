export async function getRecipies() {
  const response = await fetch("/api/recipes");
  const recipeList = response.json();
  return recipeList;
}

export async function getRecipeByRecipeName(RecipeName) {
  const response = await fetch(`/api/recipes/${RecipeName}`);
  const recipe = await response.json();
  return recipe;
}

export async function getWeek() {
  const response = await fetch(`/api/week`);
  const week = await response.json();
  return week;
}

// Ganze Woche fetchen und dann prüfen.
export async function isRecipeInWeek(RecipeName) {
  const weekResponse = await fetch(`/api/week/Recipe/${RecipeName}`);
  const recipeStatus = await weekResponse.json();
  if (recipeStatus) {
    return true;
  }
  return false;
}

// 1. id hier noch randomiseren, da sie momentan mit RecipeId gleichgesetzt wird (damit ich im Json-Server unten die deleteFunction ausühren kann)
// später nur ein Object in die Klammer
// RecipeName rausnehmen, dafür muss die isRecipeInWeek() angepasst werden
export async function putRecipeInWeek(WholeRecipe) {
  const newWeekItem = {
    ...WholeRecipe,
    // WeekId: RecipeId,
  };
  const url = `/api/week`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newWeekItem),
  });
}

// mit MongoDB kann ich hoffentlich tief genestete Sachen besser erreichen.
export async function deleteRecipeFromWeek(RecipeName) {
  await fetch(`/api/week/Recipe/${RecipeName}`, {
    method: "DELETE",
  });
}

export async function updateWeekByDate(date, Id) {
  const saveDate = { date };
  await fetch(`/api/week/${Id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(saveDate),
  });
}
