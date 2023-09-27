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

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, price, image } = req.body;

      const result = await ingredient.update(
        {
          name,
          price,
          image,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.json({ message: `Ingredient ${name} updated` })
        : res.json({ message: `Ingredient ${name} not found` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const result = await ingredient.destroy({ where: { id } });

      result === 1
        ? res.json({ message: `Ingredient deleted` })
        : res.json({ message: `Ingredient not found` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = IngredientController;
