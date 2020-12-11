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

export async function isRecipeInWeek(RecipeName) {
  const weekResponse = await fetch(`/api/week?RecipeName=${RecipeName}`);
  const weeks = await weekResponse.json();
  if (weeks.length > 0) {
    return true;
  }
  return false;
}

export async function putRecipeInWeek(RecipeName, Id) {
  const newWeekItem = { RecipeName: RecipeName, id: Id };
  const url = `/api/week`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newWeekItem),
  });
}

export async function deleteRecipeFromWeek(Id) {
  await fetch(`/api/week/${Id}`, {
    method: "DELETE",
  });
}

export async function updateWeekByDate(date, Id) {
  const saveDate = { date: date };
  await fetch(`/api/week/${Id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(saveDate),
  });
}
