const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const formatRoutes = require("./routes/formatRoutes.ejs");
const seasonRoutes = require("./routes/seasonRoutes.ejs");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/", formatRoutes);
app.use("/season", seasonRoutes);

// Read JSON file
const rawDataLifetime = fs.readFileSync(
  path.join(__dirname, "data/lifetimedata.json")
);
const jsonDataLifetime = JSON.parse(rawDataLifetime);

const rawDataLifetime20 = fs.readFileSync(
  path.join(__dirname, "data/lifetimedata20.json")
);
const jsonDataLifetime20 = JSON.parse(rawDataLifetime20);

const rawData = fs.readFileSync(path.join(__dirname, "data/data.json"));
const jsonData = JSON.parse(rawData);

const rawGauntlet = fs.readFileSync(path.join(__dirname, "data/gauntlet.json"));
const jsonGauntlet = JSON.parse(rawGauntlet);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    tableData: jsonData.tableData,
    gauntletData: jsonGauntlet.tableData,
  });
});

app.get("/lifetime", (req, res) => {
  res.render("lifetime", {
    title: "Lifetime",
    id: req.params.id,
    tableData: jsonDataLifetime.tableData,
  });
});

app.get("/lifetime20", (req, res) => {
  res.render("lifetime20", {
    title: "Lifetime Min 20",
    id: req.params.id,
    tableData: jsonDataLifetime20.tableData,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
