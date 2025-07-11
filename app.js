const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const formatRoutes = require("./routes/formatRoutes.ejs");
const seasonRoutes = require("./routes/seasonRoutes.ejs");
const playerRoutes = require("./routes/playerRoutes.ejs");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/", formatRoutes);
app.use("/season", seasonRoutes);
app.use("/player", playerRoutes);

// Read JSON file
const rawDataLifetime = fs.readFileSync(
  path.join(__dirname, "data/lifetimedata.json")
);
const jsonDataLifetime = JSON.parse(rawDataLifetime);

const rawDataLifetime20 = fs.readFileSync(
  path.join(__dirname, "data/lifetimedata20.json")
);
const jsonDataLifetime20 = JSON.parse(rawDataLifetime20);

const rawDataLifetime40 = fs.readFileSync(
  path.join(__dirname, "data/lifetimedata40.json")
);
const jsonDataLifetime40 = JSON.parse(rawDataLifetime40);

const rawDataLifetimeChamps = fs.readFileSync(
  path.join(__dirname, "data/lifetimechamps.json")
);
const jsonDataLifetimeChamps = JSON.parse(rawDataLifetimeChamps);

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

app.get("/lifetime40", (req, res) => {
  res.render("lifetime40", {
    title: "Lifetime Min 40",
    id: req.params.id,
    tableData: jsonDataLifetime40.tableData,
  });
});

app.get("/lifetimechamps", (req, res) => {
  res.render("lifetimechamps", {
    title: "Lifetime Champs",
    id: req.params.id,
    tableData: jsonDataLifetimeChamps.tableData,
    moneyData: jsonDataLifetimeChamps.moneyData,
    top_10_money: jsonDataLifetimeChamps.top_10_money,
    most_drafts: jsonDataLifetimeChamps.most_drafts,
  });
});

app.get("/search", (req, res) => {
  const searchQuery = req.query.query;
  const profiles = [
    "adam",
    "alan",
    "alberto",
    "andrewd",
    "chrisa",
    "clayton",
    "collin",
    "davido",
    "erick",
    "evans",
    "jacob",
    "johnk",
    "juwan",
    "kevin",
    "luca",
    "luke",
    "luis",
    "marco",
    "matty",
    "noah",
    "nickd",
    "simon",
    "sonny",
    "stephen",
    "todd",
    "tony",
    "travis",
    "walski",
    "zane",
  ];

  if (searchQuery) {
    if (profiles.includes(searchQuery.toLowerCase())) {
      res.redirect("/player/" + searchQuery);
    } else {
      res.redirect("/player/invalidplayer");
    }
  } else {
    res.send("No search query provided");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
