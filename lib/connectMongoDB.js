const { collection } = require("./database");

async function getRecipiesMongo() {
  const response = await collection("recipes").find({}).toArray();
  return response;
}

exports.getRecipiesMongo = getRecipiesMongo;
