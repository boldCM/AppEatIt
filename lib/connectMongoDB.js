const { collection } = require("./database");
const {
  deleteOneElement,
  findOneElement,
  findAndSort,
} = require("./helpFunctions");

// async function getRecipiesMongo() {
//   return findAndSort("recipes", { RecipeName: 1 });
// }

// async function getRecipeByNameMongo(recipeName) {
//   return findOneElement("recipes", { RecipeName: recipeName });
// }

// async function insertRecipeInWeekMongo(wholeRecipe) {
//   await collection("week").insertOne({
//     ...wholeRecipe,
//   });
// }

async function getRecipeByNameWeekMongo(recipeName) {
  return await findOneElement("week", { RecipeName: recipeName });
}

async function deleteRecipeInWeekMongo(recipeName) {
  return await deleteOneElement("week", { RecipeName: recipeName });
}

async function getWeekMongo() {
  return findAndSort("week", { date: 1 });
}

async function updateRecipeInWeekMongo(date, id) {
  await collection("week").updateOne({ _id: id }, { $set: date });
}

async function deleteWholeWeekMongo() {
  return await collection("week").deleteMany({});
}

async function getShoppingListMongo() {
  return await collection("shoppingList").find({}).toArray();
}

async function insertShoppingItemsMongo(ingredients) {
  ingredients.forEach(async (object) => {
    await collection("shoppingList").findOneAndUpdate(
      // query:
      { Grocery: object.Grocery },
      // update: []=> symbolisieren Pipeline:
      [
        // als erstes brauche ich einen operator für mein update:
        {
          $set: {
            // dann möchte ich die Quantity addieren, falls es sie schon gibt.
            Quantity: { $add: [object.Quantity, "$Quantity"] },
          },
        },
        {
          $set: {
            Quantity: { $ifNull: ["$Quantity", object.Quantity] },
          },
        },
        { $set: { Unit: object.Unit } },
      ],
      { upsert: true },
      { returnNewDocument: true }
    );
  });
}

async function deleteShoppingListMongo() {
  return await collection("shoppingList").deleteMany({});
}

async function deleteShoppingItemMongo(shoppingItem) {
  return await deleteOneElement("shoppingList", { Grocery: shoppingItem });
}

// exports.getRecipiesMongo = getRecipiesMongo;
// exports.getRecipeByNameMongo = getRecipeByNameMongo;
// exports.insertRecipeInWeekMongo = insertRecipeInWeekMongo;
exports.getRecipeByNameWeekMongo = getRecipeByNameWeekMongo;
exports.deleteRecipeInWeekMongo = deleteRecipeInWeekMongo;
exports.getWeekMongo = getWeekMongo;
exports.updateRecipeInWeekMongo = updateRecipeInWeekMongo;
exports.deleteWholeWeekMongo = deleteWholeWeekMongo;
exports.getShoppingListMongo = getShoppingListMongo;
exports.insertShoppingItemsMongo = insertShoppingItemsMongo;
exports.deleteShoppingListMongo = deleteShoppingListMongo;
exports.deleteShoppingItemMongo = deleteShoppingItemMongo;
