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

export async function isRecipeInWeek(RecipeName) {
  const weekResponse = await fetch(`/api/week/Recipe/${RecipeName}`);
  const recipeStatus = await weekResponse.json();
  if (recipeStatus) {
    return true;
  }
  return false;
}

export async function putRecipeInWeek(WholeRecipe) {
  const newWeekItem = {
    ...WholeRecipe,
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

export async function deleteWholeWeek() {
  await fetch(`/api/week/`, {
    method: "DELETE",
  });
}
