const express = require("express");
const path = require("path");
require("dotenv").config();
const { connect } = require("./lib/database");
const {
  getRecipiesMongo,
  getRecipeByNameMongo,
  insertRecipeInWeekMongo,
} = require("./lib/connectRecipes");
const {
  getRecipeByNameWeekMongo,
  deleteRecipeInWeekMongo,
  getWeekMongo,
  updateRecipeInWeekMongo,
  deleteWholeWeekMongo,
} = require("./lib/connectWeek");
const {
  getShoppingListMongo,
  insertShoppingItemsMongo,
  deleteShoppingListMongo,
  deleteShoppingItemMongo,
} = require("./lib/connectShoppingList");

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.get("/api/recipes/:recipeName", async (req, res) => {
  const recipeName = req.params["recipeName"];
  try {
    const getName = await getRecipeByNameMongo(recipeName);
    if (!getName) {
      res.status(404).send("Recipe is not in Database");
      return;
    }
    res.send(getName);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

app.get("/api/recipes", async (req, res) => {
  try {
    const recipeList = await getRecipiesMongo();
    if (!recipeList) {
      res.status(404).send("Could not find any recipies");
      return;
    }
    res.send(recipeList);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

app.get("/api/week/recipe/:RecipeName", async (req, res) => {
  const RecipeName = req.params["RecipeName"];
  try {
    const getName = await getRecipeByNameWeekMongo(RecipeName);
    if (getName === null) {
      res.send(false);
      return;
    }
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

app.delete("/api/week/recipe/:RecipeName", async (req, res) => {
  const RecipeName = req.params["RecipeName"];
  try {
    await deleteRecipeInWeekMongo(RecipeName);
    res.send(`Successfully deleted ${RecipeName} from week`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.post("/api/week", async (req, res) => {
  const recipe = req.body;
  try {
    await insertRecipeInWeekMongo(recipe);
    res.send(`Successfully inserted ${recipe}`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.patch("/api/week/:id", async (req, res) => {
  const id = req.params["id"];
  const date = req.body;
  try {
    await updateRecipeInWeekMongo(date, id);
    res.send(`Successfully updated ${date}`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.get("/api/week", async (req, res) => {
  try {
    const weekList = await getWeekMongo();

    if (!weekList) {
      res.status(404).send("Could not find any recipies");
      return;
    }
    res.send(weekList);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

app.delete("/api/week/", async (req, res) => {
  try {
    await deleteWholeWeekMongo();
    res.send("Successfully deleted weekly overview");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.get("/api/shoppingList", async (req, res) => {
  try {
    const groceryList = await getShoppingListMongo();
    if (!groceryList) {
      res.status(404).send("Could not find any groceries");
      return;
    }
    res.send(groceryList);
  } catch (error) {
    console.error(error);
    res.status(500).send("An internal server error occured");
  }
});

app.post("/api/shoppingItems", async (req, res) => {
  try {
    const newShopppingItems = Array.isArray(req.body) ? req.body : [req.body];
    const inserted = await insertShoppingItemsMongo(newShopppingItems);
    res.send(`Successfully inserted ${inserted} shopping items`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.delete("/api/shoppingItems/:item", async (req, res) => {
  const shoppingItem = req.params["item"];
  try {
    await deleteShoppingItemMongo(shoppingItem);
    res.send("Successfully deleted Shopping Item");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.delete("/api/shoppingItems", async (req, res) => {
  try {
    await deleteShoppingListMongo();
    res.send("Successfully deleted Shoppinglist");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connecting to Database...");
  await connect(process.env.DB_URI, process.env.DB_DBNAME);
  console.log("Connected to database🎄");

  app.listen(port, () => {
    console.log(`Appeatit API listening at http://localhost:${port}`);
  });
}
run();
