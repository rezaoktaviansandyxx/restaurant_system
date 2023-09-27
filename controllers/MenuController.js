const { menu } = require("../models");
class MenuController {
  static async getMenus(req, res) {
    try {
      const menus = await menu.findAll();
      res.json(menus);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, price } = req.body;

      const result = await menu.create({
        name,
        price,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {}

  static async delete(req, res) {}
}

module.exports = MenuController;
