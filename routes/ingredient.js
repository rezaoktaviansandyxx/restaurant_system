const { Router } = require("express");
const ingredientRouter = Router();
const { IngredientController } = require("../controllers");

ingredientRouter.get("/", IngredientController.getIngredients);
ingredientRouter.get("/create", IngredientController.createPage);
ingredientRouter.post("/create", IngredientController.create);
ingredientRouter.get("/update/:id", IngredientController.updatePage);
ingredientRouter.post("/update/:id", IngredientController.update);
ingredientRouter.put("/update/:id", IngredientController.update);
ingredientRouter.delete("/delete/:id", IngredientController.delete);

module.exports = ingredientRouter;
