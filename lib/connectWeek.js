const { collection } = require("./database");
const {
  deleteOneElement,
  findOneElement,
  findAndSort,
} = require("./helpFunctions");

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

exports.getRecipeByNameWeekMongo = getRecipeByNameWeekMongo;
exports.deleteRecipeInWeekMongo = deleteRecipeInWeekMongo;
exports.getWeekMongo = getWeekMongo;
exports.updateRecipeInWeekMongo = updateRecipeInWeekMongo;
exports.deleteWholeWeekMongo = deleteWholeWeekMongo;
