// DEPENDENCIES
const express = require("express");
const app = express();
const morgan = require("morgan");
const Pokemon = require("./models/pokemon");
const methodOverride = require("method-override");

// MIDDLE WARE
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES

// Index
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { data: Pokemon });
});

// New
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

// Create
app.post("/pokemon", (req, res) => {
  const body = req.body;
  Pokemon.push(body);
  res.redirect("/pokemon");
});

// Edit

// Update

// Destroy
app.delete("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  Pokemon.splice(id, 1);
  res.redirect("/pokemon");
});

// Show
app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = Pokemon[id];
  res.render("show.ejs", { pokemon, id });
});

// LISTENER
app.listen(3000, () => {
  console.log("Time to catch them all");
});
