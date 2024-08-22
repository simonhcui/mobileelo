const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));

// Read JSON file
const rawDataLifetime = fs.readFileSync(
  path.join(__dirname, "data/lifetimedata.json")
);
const jsonDataLifetime = JSON.parse(rawDataLifetime);

const rawDataDmr = fs.readFileSync(
  path.join(__dirname, "data/dmr/dmrdata.json")
);
const jsonDataDmr = JSON.parse(rawDataDmr);

const rawDataDmrColor = fs.readFileSync(
  path.join(__dirname, "data/dmr/dmrcolordata.json")
);
const jsonDataDmrColor = JSON.parse(rawDataDmrColor);

const rawData1 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season1data.json")
);
const jsonData1 = JSON.parse(rawData1);

const rawData2 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season2data.json")
);
const jsonData2 = JSON.parse(rawData2);

const rawData3 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season3data.json")
);
const jsonData3 = JSON.parse(rawData3);

const rawData4 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season4data.json")
);
const jsonData4 = JSON.parse(rawData4);

const rawData5 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season5data.json")
);
const jsonData5 = JSON.parse(rawData5);

const rawData6 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season6data.json")
);
const jsonData6 = JSON.parse(rawData6);

const rawData7 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season7data.json")
);
const jsonData7 = JSON.parse(rawData7);

const rawData = fs.readFileSync(path.join(__dirname, "data/data.json"));
const jsonData = JSON.parse(rawData);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    tableData: jsonData.tableData,
  });
});

app.get("/lifetime", (req, res) => {
  res.render("lifetime", {
    title: "Lifetime",
    id: req.params.id,
    tableData: jsonDataLifetime.tableData,
  });
});

app.get("/dmr", (req, res) => {
  res.render("dmr", {
    title: "DMR",
    id: req.params.id,
    tableData: jsonDataDmr.tableData,
    colorData: jsonDataDmrColor.tableData,
  });
});

app.get("/season/1", (req, res) => {
  res.render("seasonone", {
    title: "Season One",
    id: req.params.id,
    tableData: jsonData1.tableData,
  });
});

app.get("/season/2", (req, res) => {
  res.render("seasontwo", {
    title: "Season Two",
    id: req.params.id,
    tableData: jsonData2.tableData,
  });
});

app.get("/season/3", (req, res) => {
  res.render("seasonthree", {
    title: "Season Three",
    id: req.params.id,
    tableData: jsonData3.tableData,
  });
});

app.get("/season/4", (req, res) => {
  res.render("seasonfour", {
    title: "Season Four",
    id: req.params.id,
    tableData: jsonData4.tableData,
  });
});

app.get("/season/5", (req, res) => {
  res.render("seasonfive", {
    title: "Season Five",
    id: req.params.id,
    tableData: jsonData5.tableData,
  });
});

app.get("/season/6", (req, res) => {
  res.render("seasonsix", {
    title: "Season Six",
    id: req.params.id,
    tableData: jsonData6.tableData,
  });
});

app.get("/season/7", (req, res) => {
  res.render("seasonseven", {
    title: "Season Seven",
    id: req.params.id,
    tableData: jsonData7.tableData,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
