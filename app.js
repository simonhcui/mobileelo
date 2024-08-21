const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));

// Read JSON file
const rawData1 = fs.readFileSync(path.join(__dirname, "data/season1data.json"));
const jsonData1 = JSON.parse(rawData1);

const rawData2 = fs.readFileSync(path.join(__dirname, "data/season2data.json"));
const jsonData2 = JSON.parse(rawData2);

const rawData = fs.readFileSync(path.join(__dirname, "data/data.json"));
const jsonData = JSON.parse(rawData);

// Set view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    tableData: jsonData.tableData, // Pass the data to the template
  });
});

app.get("/season/1", (req, res) => {
  res.render("seasonone", {
    title: `Page ${req.params.id}`,
    id: req.params.id,
    tableData: jsonData1.tableData, // Pass the data to the template
  });
});

app.get("/season/2", (req, res) => {
  res.render("seasontwo", {
    title: `Page ${req.params.id}`,
    id: req.params.id,
    tableData: jsonData2.tableData, // Pass the data to the template
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
