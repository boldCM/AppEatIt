const { collection } = require("./database");

async function getRecipiesMongo() {
  const response = await collection("recipes");
  return response.json();
}

exports.getRecipiesMongo = getRecipiesMongo;
