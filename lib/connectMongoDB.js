const { collection } = require("./database");

async function getRecipiesMongo() {
  const response = await collection("recipes").find({}).toArray();
  return response;
}

async function getRecipeByNameMongo(RecipeName) {
  const response = await collection("recipes").findOne({
    RecipeName: RecipeName,
  });
  return response;
}

async function insertRecipeInWeekMongo(WholeRecipe) {
  await collection("week").insertOne({
    Recipe: { ...WholeRecipe },
  });
}

async function getRecipeByNameWeekMongo(RecipeName) {
  const response = await collection("week").findOne({
    "Recipe.RecipeName": RecipeName,
  });
  return response;
}

async function deleteRecipeInWeekMongo(RecipeName) {
  const response = await collection("week").deleteOne({
    "Recipe.RecipeName": RecipeName,
  });
  return response;
}

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
exports.getRecipeByNameWeekMongo = getRecipeByNameWeekMongo;
exports.deleteRecipeInWeekMongo = deleteRecipeInWeekMongo;
