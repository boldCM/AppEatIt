const { collection } = require("./database");
const { deleteOneElement } = require("./helpFunctions");

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

async function deleteShoppingItemMongo(shoppingItem) {
  return await deleteOneElement("shoppingList", { Grocery: shoppingItem });
}

exports.getShoppingListMongo = getShoppingListMongo;
exports.insertShoppingItemsMongo = insertShoppingItemsMongo;
exports.deleteShoppingItemMongo = deleteShoppingItemMongo;
