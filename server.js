const express = require("express");
const path = require("path");
require("dotenv").config();
const { connect } = require("./lib/database");

// JSON-Server brauche ich später nicht mehr:
const jsonServer = require("json-server");
const { getRecipiesMongo } = require("./lib/connectMongoDB");
const { response } = require("express");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
// JSON-Server Ende

const port = process.env.PORT || 3001;
const app = express();
// neu: vermutlich damit ich json format lesen kann: ja!
app.use(express.json());

// hier ist Platz für meine req/res Anfragen und ihre Middlewarefunctions:
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
// muss ich mir für jede get Route eine Http-anfrage hier schreiben?
// Oder das wie oben verallgemeinern?
//

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// JSON-Server Middleware brauche ich später nicht mehr
app.use(middleware);
app.use("/api", router);
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
