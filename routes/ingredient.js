const { Router } = require("express");
const ingredientRouter = Router();
const { IngredientController } = require("../controllers");

ingredientRouter.get("/", IngredientController.getIngredients);
ingredientRouter.post("/create", IngredientController.create);
ingredientRouter.put("/update/:id", IngredientController.update);
ingredientRouter.delete("/delete/:id", IngredientController.delete);

module.exports = ingredientRouter;
