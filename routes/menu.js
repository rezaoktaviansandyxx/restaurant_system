const { Router } = require("express");
const menuRoute = Router();
const { MenuController } = require("../controllers");

menuRoute.get("/", MenuController.getMenus);
menuRoute.get("/create", MenuController.createPage);
menuRoute.post("/create", MenuController.create);
menuRoute.get("/update/:id", MenuController.updatePage);
menuRoute.post("/update/:id", MenuController.update);
menuRoute.put("/update/:id", MenuController.update);
menuRoute.delete("/delete/:id", MenuController.delete);

module.exports = menuRoute;
