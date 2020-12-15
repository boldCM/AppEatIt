const express = require("express");
const path = require("path");
require("dotenv").config();
const { connect } = require("./lib/database");

// JSON-Server brauche ich später nicht mehr:
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
// JSON-Server Ende

const port = process.env.PORT || 3001;
const app = express();
// neu: vermutlich damit ich json format lesen kann:
app.use(express.json());

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
