const { menu, menu_ingredient, ingredient } = require("../models");

class MenuController {
  static async getMenus(req, res) {
    try {
      const menus = await menu.findAll({
        include: [{ model: ingredient, as: "ingredients" }],
        order: [["id", "ASC"]],
      });

      const acceptHeader = req.get("Accept");
      if (acceptHeader && acceptHeader.includes("text/html")) {
        res.render("menus/index.ejs", { menus });
      } else {
        res.json(menus);
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async createPage(req, res) {
    try {
      const ingredients = await ingredient.findAll();
      res.render("menus/createPage.ejs", { ingredients });
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, price, ingredients } = req.body;

      const menuResult = await menu.create({
        name,
        price,
      });

      const menuId = menuResult.id;

      if (ingredients && ingredients.length > 0) {
        const menuIngredients = ingredients.map((ingredientId) => ({
          menuId,
          ingredientId,
        }));

        await menu_ingredient.bulkCreate(menuIngredients);
      }

      const acceptHeader = req.get("Accept");
      if (acceptHeader && acceptHeader.includes("text/html")) {
        res.redirect("/menus");
      } else {
        res.json(menuResult);
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async updatePage(req, res) {
    try {
      const id = +req.params.id;

      const result = await menu.findByPk(id, {
        include: [{ model: ingredient, as: "ingredients" }],
      });

      const ingredients = await ingredient.findAll();

      res.render("menus/updatePage.ejs", { menu: result, ingredients });
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, price, image, selectedIngredients } = req.body;

      // Update the menu
      const result = await menu.update(
        {
          name,
          price,
          image,
        },
        {
          where: { id },
        }
      );

      // Fetch the updated menu instance with its associations
      const updatedMenu = await menu.findByPk(id, {
        include: [{ model: ingredient, as: "ingredients" }],
      });

      // Clear the existing associations
      await updatedMenu.setIngredients([]);

      // Associate selected ingredients with the menu
      await updatedMenu.addIngredients(selectedIngredients);

      const acceptHeader = req.get("Accept");
      if (acceptHeader && acceptHeader.includes("text/html")) {
        res.redirect("/menus");
      } else {
        res.json(updatedMenu.dataValues);
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      const result = await menu.destroy({ where: { id } });

      result === 1
        ? res.json({ message: `Menu deleted` })
        : res.json({ message: `Menu not found` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MenuController;
