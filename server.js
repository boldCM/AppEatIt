const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const port = process.env.PORT || 3001;
const app = express();

// app.use(express.static("public"));
// Hat Sina, brauche ich das?

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use(middleware);
// macht meinen Json-Server verfügbar und startet seine Standard-Prozesse?
app.use("/api", router);
// unter dem Pfad /api wird die Route zu meiner db.JSON gelegt und ausgeführt. ABer was führt sie denn aus?

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
// das obige müsste mein Proxy sein, dem mein Server zuhört für die Anfragen....
