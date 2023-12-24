// DEPENDENCIES
const express = require("express");
const app = express();
const morgan = require("morgan");
const Pokemon = require("./models/pokemon");

// MIDDLE WARE
app.use(morgan("dev"));
app.use(express.static("public"));

// ROUTES

// Index
app.get("/", (req, res) => {
  res.render("index.ejs", { data: Pokemon });
});

// New

// Edit

// Create

// Update

// Destroy

// Show
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = Pokemon[id];
  res.render("show.ejs", { pokemon, id });
});

// LISTENER
app.listen(3000, () => {
  console.log("Time to catch them all");
});
