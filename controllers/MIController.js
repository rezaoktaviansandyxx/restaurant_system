const { menu, ingredient, menu_ingredient } = require("../models");
class MIController {
  static async getMIs(req, res) {
    try {
      const mIs = await MI.findAll({
        include: [menu, ingredient],
      });
      res.json(mIs);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { menuId, ingredientId } = req.body;

      const result = await menu_ingredient.create({
        menuId: menuId,
        ingredientId: ingredientId,
      });

      res.json(MI);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MIController;
