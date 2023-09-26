const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "Welcome to Restaurant",
  });
});

const menuRoutes = require("./menu");
const ingredientRoutes = require("./ingredient");
const menuIngredientRoutes = require("./menu_ingredient");

route.use("/menus", menuRoutes);
route.use("/ingredients", ingredientRoutes);
route.use("/menuIngredients", menuIngredientRoutes);

module.exports = route;
