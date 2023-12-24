// DEPENDENCIES
const express = require("express");
const app = express()
const morgan = require("morgan");
const Pokemon = require("./models/pokemon");

// MIDDLE WARE
app.use(morgan("dev"));

// ROUTES

// Index
app.get("/", (req, res) => {
 res.send("Who's that pokemon?")
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