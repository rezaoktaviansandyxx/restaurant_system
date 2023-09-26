const { Router } = require("express");
const menuRoute = Router();
const { MenuController } = require("../controllers");

menuRoute.get("/", MenuController.getMenus);
menuRoute.post("/create", MenuController.create);
menuRoute.put("/update/:id", MenuController.update);
menuRoute.delete("/delete/:id", MenuController.delete);

module.exports = menuRoute;
