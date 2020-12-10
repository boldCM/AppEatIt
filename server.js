const express = require("express");
const path = require("path");
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const port = process.env.PORT || 3001;
const app = express();

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use(middleware);
app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
