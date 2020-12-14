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

// Ganze Woche fetchen und dann prüfen.
export async function isRecipeInWeek(RecipeName) {
  const weekResponse = await fetch(`/api/week?RecipeName=${RecipeName}`);
  const weeks = await weekResponse.json();
  if (weeks.length > 0) {
    return true;
  }
  return false;
}

// achtung id nun random!
export async function putRecipeInWeek(RecipeName, RecipeId, WholeRecipe) {
  const newWeekItem = {
    RecipeName: RecipeName,
    Recipe: WholeRecipe,
    id: RecipeId,
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

export async function deleteRecipeFromWeek(RecipeId) {
  await fetch(`/api/week/${RecipeId}`, {
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
