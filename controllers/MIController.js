const { menu, ingredient, menu_ingredient } = require("../models");
class MIController {
  static async getMIs(req, res) {
    try {
      const result = await menu_ingredient.findAll({
        include: [menu, ingredient],
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { menuId, ingredientId, total } = req.body;

      const result = await menu_ingredient.create({
        menuId: +menuId,
        ingredientId: +ingredientId,
        total,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MIController;
