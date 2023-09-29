"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class menu_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      menu_ingredient.belongsTo(models.menu, {
        foreignKey: "menuId",
      });
      menu_ingredient.belongsTo(models.ingredient, {
        foreignKey: "ingredientId",
      });
    }
  }
  menu_ingredient.init(
    {
      menuId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "menu_ingredient",
    }
  );
  return menu_ingredient;
};
