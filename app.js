const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));

// Set view engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/page/:id", (req, res) => {
  res.render("page", { title: `Page ${req.params.id}`, id: req.params.id });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
