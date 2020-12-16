const express = require("express");
const path = require("path");
require("dotenv").config();
const { connect } = require("./lib/database");

// JSON-Server brauche ich später nicht mehr:
// const jsonServer = require("json-server");
const {
  getRecipiesMongo,
  getRecipeByNameMongo,
  insertRecipeInWeekMongo,
  getRecipeByNameWeekMongo,
  deleteRecipeInWeekMongo,
  getWeekMongo,
  updateRecipeInWeekMongo,
} = require("./lib/connectMongoDB");
// const { response } = require("express");
// const router = jsonServer.router("db.json");
// const middleware = jsonServer.defaults();
// JSON-Server Ende

const port = process.env.PORT || 3001;
const app = express();
// neu: vermutlich damit ich json format lesen kann: ja!
app.use(express.json());

// hier ist Platz für meine req/res Anfragen und ihre Middlewarefunctions:
app.get("/api/recipes/:RecipeName", async (req, res) => {
  const RecipeName = req.params["RecipeName"];
  try {
    const getName = await getRecipeByNameMongo(RecipeName);
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

app.get("/api/week/Recipe/:RecipeName", async (req, res) => {
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

app.delete("/api/week/Recipe/:RecipeName", async (req, res) => {
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

app.patch(`/api/week/:Id`, async (req, res) => {
  const Id = req.params["Id"];
  const date = req.body;
  try {
    await updateRecipeInWeekMongo(date, Id);
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

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// JSON-Server Middleware brauche ich später nicht mehr
// app.use(middleware);
// app.use("/api", router);
// JSON-Srver Middlerware Ende

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
