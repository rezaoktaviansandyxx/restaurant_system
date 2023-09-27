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

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, price, image } = req.body;

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

      result[0] === 1
        ? res.json({ message: `Menu ${name} updated` })
        : res.json({ message: `Menu ${name} not found` });
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
