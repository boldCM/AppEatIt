const { collection } = require("./database");

async function findAndSort(collectionName, argument) {
  return await collection(collectionName).find({}).sort(argument).toArray();
}

async function findOneElement(collectionName, argument) {
  return await collection(collectionName).findOne(argument);
}

async function deleteOneElement(collectionName, argument) {
  return await collection(collectionName).deleteOne(argument);
}

exports.findOneElement = findOneElement;
exports.findAndSort = findAndSort;
exports.deleteOneElement = deleteOneElement;
