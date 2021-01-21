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

// für get und delete könne ich noch nen forEach loop schreiben...

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

app
  .route("/api/week/recipe/:RecipeName")
  .get(async (req, res) => {
    const { RecipeName } = req.params;
    try {
      const getName = await getRecipeByNameWeekMongo(RecipeName);
      if (getName === null) {
        res.send(false);
        return;
      }
      res.send(true);
    } catch (error) {
      console.error(error);
      res.status(500).send("An internal sever error occured");
    }
  })
  .delete(async (req, res) => {
    const { RecipeName } = req.params;
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

app
  .route("/api/week")
  .get(async (req, res) => {
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
  })
  .post(async (req, res) => {
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
  })
  .delete(async (req, res) => {
    try {
      await deleteWholeWeekMongo();
      res.send("successfully deleted weekly overview");
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

app
  .route("/api/shoppingItems")
  .get(async (req, res) => {
    try {
      const shoppingItems = await getShoppingListMongo();
      if (!shoppingItems) {
        res.status(404).send("Could not find any shoppingItems");
        return;
      }
      res.send(shoppingItems);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("An internal server error occured. Please try again later");
    }
  })
  .post(async (req, res) => {
    try {
      const newShopppingItems = Array.isArray(req.body) ? req.body : [req.body];
      await insertShoppingItemsMongo(newShopppingItems);
      res.send(`Successfully inserted shopping items`);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("An unexpected error occured. Please try again later!");
    }
  })
  .delete(async (req, res) => {
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
