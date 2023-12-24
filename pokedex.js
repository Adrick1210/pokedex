// DEPENDENCIES
const express = require("express");
const app = express()
const morgan = require("morgan");
const Pokemon = require("./models/pokemon");

// MIDDLE WARE
app.use(morgan("dev"));
app.use(express.static("public"))

// ROUTES

// Index
app.get("/", (req, res) => {
 res.render("index.ejs")
})
// New

// Edit

// Create

// Update

// Destroy

// Show

// LISTENER
app.listen(3000, () => {
    console.log("Time to catch them all")
})