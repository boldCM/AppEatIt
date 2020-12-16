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
  // RecipeName kommt an
  // aber ich bekomme hier null:
  const response = await collection("week").findOne({
    "Recipe.RecipeName": RecipeName,
  });

  // if (response === null) {
  //   return false;
  // }
  // return true;

  return response;
}

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
exports.getRecipeByNameWeekMongo = getRecipeByNameWeekMongo;
// also findOne und
