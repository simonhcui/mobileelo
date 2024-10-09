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

const rawData2X2 = fs.readFileSync(
  path.join(__dirname, "data/2x2/2x2data.json")
);
const jsonData2X2 = JSON.parse(rawData2X2);

const rawData2X2Color = fs.readFileSync(
  path.join(__dirname, "data/2x2/2x2colordata.json")
);
const jsonData2X2Color = JSON.parse(rawData2X2Color);

const rawData2X2Archetype = fs.readFileSync(
  path.join(__dirname, "data/2x2/2x2archetypedata.json")
);
const jsonData2X2Archetype = JSON.parse(rawData2X2Archetype);

const rawDataAdam = fs.readFileSync(
  path.join(__dirname, "data/adamcube/adamdata.json")
);
const jsonDataAdam = JSON.parse(rawDataAdam);

const rawDataAdamColor = fs.readFileSync(
  path.join(__dirname, "data/adamcube/adamcolordata.json")
);
const jsonDataAdamColor = JSON.parse(rawDataAdamColor);

const rawDataAdamArchetype = fs.readFileSync(
  path.join(__dirname, "data/adamcube/adamarchetypedata.json")
);
const jsonDataAdamArchetype = JSON.parse(rawDataAdamArchetype);

const rawDataChaos = fs.readFileSync(
  path.join(__dirname, "data/chaos/chaosdata.json")
);
const jsonDataChaos = JSON.parse(rawDataChaos);

const rawDataDmr = fs.readFileSync(
  path.join(__dirname, "data/dmr/dmrdata.json")
);
const jsonDataDmr = JSON.parse(rawDataDmr);

const rawDataDmrColor = fs.readFileSync(
  path.join(__dirname, "data/dmr/dmrcolordata.json")
);
const jsonDataDmrColor = JSON.parse(rawDataDmrColor);

const rawDataDmrArchetype = fs.readFileSync(
  path.join(__dirname, "data/dmr/dmrarchetypedata.json")
);
const jsonDataDmrArchetype = JSON.parse(rawDataDmrArchetype);

const rawDataMB1 = fs.readFileSync(
  path.join(__dirname, "data/mb1/mb1data.json")
);
const jsonDataMB1 = JSON.parse(rawDataMB1);

const rawDataMH1 = fs.readFileSync(
  path.join(__dirname, "data/mh1/mh1data.json")
);
const jsonDataMH1 = JSON.parse(rawDataMH1);

const rawDataMH1Color = fs.readFileSync(
  path.join(__dirname, "data/mh1/mh1colordata.json")
);
const jsonDataMH1Color = JSON.parse(rawDataMH1Color);

const rawDataMH1Archetype = fs.readFileSync(
  path.join(__dirname, "data/mh1/mh1archetypedata.json")
);
const jsonDataMH1Archetype = JSON.parse(rawDataMH1Archetype);

const rawDataMH2 = fs.readFileSync(
  path.join(__dirname, "data/mh2/mh2data.json")
);
const jsonDataMH2 = JSON.parse(rawDataMH2);

const rawDataMH2Color = fs.readFileSync(
  path.join(__dirname, "data/mh2/mh2colordata.json")
);
const jsonDataMH2Color = JSON.parse(rawDataMH2Color);

const rawDataMH2Archetype = fs.readFileSync(
  path.join(__dirname, "data/mh2/mh2archetypedata.json")
);
const jsonDataMH2Archetype = JSON.parse(rawDataMH2Archetype);

const rawDataMH3 = fs.readFileSync(
  path.join(__dirname, "data/mh3/mh3data.json")
);
const jsonDataMH3 = JSON.parse(rawDataMH3);

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

const rawData8 = fs.readFileSync(
  path.join(__dirname, "data/past_seasons/season8data.json")
);
const jsonData8 = JSON.parse(rawData8);

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
    archetypeData: jsonDataDmrArchetype.tableData,
  });
});

app.get("/2X2", (req, res) => {
  res.render("2x2", {
    title: "2X2",
    id: req.params.id,
    tableData: jsonData2X2.tableData,
    colorData: jsonData2X2Color.tableData,
    archetypeData: jsonData2X2Archetype.tableData,
  });
});

app.get("/mh1", (req, res) => {
  res.render("mh1", {
    title: "MH1",
    id: req.params.id,
    tableData: jsonDataMH1.tableData,
    colorData: jsonDataMH1Color.tableData,
    archetypeData: jsonDataMH1Archetype.tableData,
  });
});

app.get("/mh2", (req, res) => {
  res.render("mh2", {
    title: "MH2",
    id: req.params.id,
    tableData: jsonDataMH2.tableData,
    colorData: jsonDataMH2Color.tableData,
    archetypeData: jsonDataMH2Archetype.tableData,
  });
});

app.get("/mh3", (req, res) => {
  res.render("mh3", {
    title: "MH3",
    id: req.params.id,
    tableData: jsonDataMH3.tableData,
    // colorData: jsonDataMH2Color.tableData,
    // archetypeData: jsonDataMH2Archetype.tableData,
  });
});

app.get("/adamcube", (req, res) => {
  res.render("adamcube", {
    title: "Adam Cube",
    id: req.params.id,
    tableData: jsonDataAdam.tableData,
    colorData: jsonDataAdamColor.tableData,
    archetypeData: jsonDataAdamArchetype.tableData,
  });
});

app.get("/chaos", (req, res) => {
  res.render("chaos", {
    title: "Chaos",
    id: req.params.id,
    tableData: jsonDataChaos.tableData,
  });
});

app.get("/mb1", (req, res) => {
  res.render("mb1", {
    title: "Mystery Booster 1",
    id: req.params.id,
    tableData: jsonDataMB1.tableData,
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

app.get("/season/8", (req, res) => {
  res.render("seasoneight", {
    title: "Season Eight",
    id: req.params.id,
    tableData: jsonData8.tableData,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
