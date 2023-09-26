const { Router } = require("express");
const menuIngredientRouter = Router();
const { MIController } = require("../controllers");

menuIngredientRouter.get("/", MIController.getMIs);
menuIngredientRouter.post("/create", MIController.create);

module.exports = menuIngredientRouter;
