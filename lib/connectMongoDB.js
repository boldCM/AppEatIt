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

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
// also findOne und
// insertOne
