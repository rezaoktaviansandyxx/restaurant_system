const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

route.get("/about", (req, res) => {
  res.render("abouts/about.ejs");
});

route.get("/delivery", (req, res) => {
  res.render("abouts/delivery.ejs");
});

const menuRoutes = require("./menu");
const ingredientRoutes = require("./ingredient");
const menuIngredientRoutes = require("./menu_ingredient");

route.use("/menus", menuRoutes);
route.use("/ingredients", ingredientRoutes);
route.use("/menuIngredients", menuIngredientRoutes);

module.exports = route;
