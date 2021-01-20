const { collection } = require("./database");
const {
  deleteOneElement,
  findOneElement,
  findAndSort,
} = require("./helpFunctions");

async function getRecipiesMongo() {
  return findAndSort("recipes", { RecipeName: 1 });
}

async function getRecipeByNameMongo(recipeName) {
  return findOneElement("recipes", { RecipeName: recipeName });
}

async function insertRecipeInWeekMongo(wholeRecipe) {
  await collection("week").insertOne({
    ...wholeRecipe,
  });
}

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
