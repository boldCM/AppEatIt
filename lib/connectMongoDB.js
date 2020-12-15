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

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
