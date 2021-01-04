const { collection } = require("./database");

async function getRecipiesMongo() {
  const response = await collection("recipes")
    .find({})
    .sort({ RecipeName: 1 })
    .toArray();
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
    // Recipe: {...WholeRecipe}
    ...WholeRecipe,
  });
}

async function getRecipeByNameWeekMongo(RecipeName) {
  const response = await collection("week").findOne({
    RecipeName,
  });
  return response;
}

async function deleteRecipeInWeekMongo(RecipeName) {
  const response = await collection("week").deleteOne({
    RecipeName,
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
  await collection("week").updateOne({ _id: Id }, { $set: date });
}

async function deleteWholeWeekMongo() {
  const response = await collection("week").remove({});
  return response;
}

// async function postShoppingListMongo() {
//   const response = await collection("week")
//     .aggregate([
//       { $unwind: "$Ingredients" },
//       { $project: { _id: 0, RecipeName: 0, Instructions: 0, date: 0 } },
//       // {
//       //   $group: {
//       //     _id: null,
//       //     "Ingredients.Grocery": "Mehl",
//       //     Quantity: { $sum: "$Quantity" },
//       //   },
//       // },
//       { $out: "shoppingList" },
//     ])
//     .toArray();
//   // das übrschreibt mir momentan die gesamte Collection
//   return response;
// }

async function getShoppingListMongo() {
  const response = await collection("shoppingList").find({}).toArray();
  return response;
}

async function addShoppingItemMongo(shoppingItem) {
  await collection("shoppingList").insertOne({
    ...shoppingItem,
  });
}

async function insertIngredientsToShoppingMongo(Ingredients) {
  await collection("shoppingList").insertMany([...Ingredients]);
}

exports.getRecipiesMongo = getRecipiesMongo;
exports.getRecipeByNameMongo = getRecipeByNameMongo;
exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
exports.getRecipeByNameWeekMongo = getRecipeByNameWeekMongo;
exports.deleteRecipeInWeekMongo = deleteRecipeInWeekMongo;
exports.getWeekMongo = getWeekMongo;
exports.updateRecipeInWeekMongo = updateRecipeInWeekMongo;
exports.deleteWholeWeekMongo = deleteWholeWeekMongo;
// exports.postShoppingListMongo = postShoppingListMongo;
exports.getShoppingListMongo = getShoppingListMongo;
exports.addShoppingItemMongo = addShoppingItemMongo;
exports.insertIngredientsToShoppingMongo = insertIngredientsToShoppingMongo;
