export async function getRecipies() {
  const response = await fetch("/api/recipes");
  const recipeList = response.json();
  return recipeList;
}

export async function getRecipeByRecipeName(recipeName) {
  const response = await fetch(`/api/recipes/${recipeName}`);
  const recipe = await response.json();
  return recipe;
}

export async function getWeek() {
  const response = await fetch("/api/week");
  const week = await response.json();
  return week;
}

export async function isRecipeInWeek(recipeName) {
  const weekResponse = await fetch(`/api/week/recipe/${recipeName}`);
  const recipeStatus = await weekResponse.json();
  if (recipeStatus) {
    return true;
  }
  return false;
}

export async function putRecipeInWeek(wholeRecipe) {
  await fetch("/api/week", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ ...wholeRecipe }),
  });
}

export async function deleteRecipeFromWeek(recipeName) {
  await fetch(`/api/week/recipe/${recipeName}`, {
    method: "DELETE",
  });
}

export async function updateWeekByDate(date, id) {
  // const saveDate = { date };
  await fetch(`/api/week/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ date }),
  });
}

export async function deleteWholeWeek() {
  await fetch("/api/week/", {
    method: "DELETE",
  });
}

export async function checkShoppingList() {
  const shoppingResponse = await fetch("/api/shoppingList");
  const listStatus = await shoppingResponse.json();
  if (listStatus) {
    return listStatus;
  }
  return false;
}

export async function addShoppingItem(quantity, unit, grocery) {
  await fetch("/api/shoppingItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ Quantity: quantity, Unit: unit, Grocery: grocery }),
  });
}

export async function addIngredients(ingredients) {
  await fetch("/api/shoppingItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(ingredients),
  });
}

export async function deleteShoppingList() {
  await fetch("/api/shoppingItems", {
    method: "DELETE",
  });
}

export async function deleteItemFromShoppingList(item) {
  console.log(item);
  await fetch(`/api/shoppingItems/${item}`, {
    method: "DELETE",
  });
}
