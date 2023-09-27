"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      menu.belongsToMany(models.ingredient, {
        through: models.menu_ingredient,
      });
    }
  }
  menu.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (ingredient, options) => {
          ingredient.image = `https://via.placeholder.com/50`;
        },
      },
      sequelize,
      modelName: "menu",
    }
  );
  return menu;
};
