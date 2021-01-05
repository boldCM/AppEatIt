const { collection } = require("./database");

async function getRecipiesMongo() {
  const response = await collection("recipes")
    .find({})
    .sort({ RecipeName: 1 })
    .toArray();
  return response;
}

async function getRecipeByNameMongo(recipeName) {
  const response = await collection("recipes").findOne({
    RecipeName: recipeName,
  });
  return response;
}

async function insertRecipeInWeekMongo(wholeRecipe) {
  await collection("week").insertOne({
    ...wholeRecipe,
  });
}

async function getRecipeByNameWeekMongo(recipeName) {
  const response = await collection("week").findOne({
    RecipeName: recipeName,
  });
  return response;
}

async function deleteRecipeInWeekMongo(recipeName) {
  const response = await collection("week").deleteOne({
    RecipeName: recipeName,
  });
  return response;
}

async function getWeekMongo() {
  const response = await collection("week")
    .find({})
    .sort({ date: 1 })
    .toArray();
  return response;
}

async function updateRecipeInWeekMongo(date, id) {
  await collection("week").updateOne({ _id: id }, { $set: date });
}

async function deleteWholeWeekMongo() {
  // const response = await collection("week").remove({});
  const response = await collection("week").deleteMany({});
  return response;
}

async function getShoppingListMongo() {
  const response = await collection("shoppingList").find({}).toArray();
  return response;
}

async function insertShoppingItemsMongo(ingredients) {
  await collection("shoppingList").insertMany([...ingredients]);
}

async function deleteShoppingItemMongo() {
  const response = await collection("shoppingList").deleteMany({});
  return response;
}

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
exports.getRecipeByNameWeekMongo = getRecipeByNameWeekMongo;
exports.deleteRecipeInWeekMongo = deleteRecipeInWeekMongo;
exports.getWeekMongo = getWeekMongo;
exports.updateRecipeInWeekMongo = updateRecipeInWeekMongo;
exports.deleteWholeWeekMongo = deleteWholeWeekMongo;
exports.getShoppingListMongo = getShoppingListMongo;
exports.insertShoppingItemsMongo = insertShoppingItemsMongo;
exports.deleteShoppingItemMongo = deleteShoppingItemMongo;
