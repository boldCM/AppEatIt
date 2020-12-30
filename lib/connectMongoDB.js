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

async function getWeekMongo() {
  const response = await collection("week")
    .find({})
    .sort({ date: 1 })
    .toArray();
  return response;
}

async function updateRecipeInWeekMongo(date, Id) {
  await collection("week").updateOne({ "Recipe._id": Id }, { $set: date });
}

async function deleteWholeWeekMongo() {
  const response = await collection("week").remove({});
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
