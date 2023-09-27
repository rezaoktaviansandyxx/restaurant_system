const { ingredient } = require("../models");

class IngredientController {
  static async getIngredients(req, res) {
    try {
      const ingredients = await ingredient.findAll();
      res.json(ingredients);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, price } = req.body;

      const ingredients = await ingredient.create({
        name,
        price,
      });

      // console.log(ingredients);
      res.json(ingredients);
    } catch (err) {
      res.json(err);
    }
  }

  static async update(req, res) {}

  static async delete(req, res) {}
}

module.exports = IngredientController;
