"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ingredient.belongsToMany(models.menu, {
        through: models.menu_ingredient,
      });
    }
  }
  ingredient.init(
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
      modelName: "ingredient",
    }
  );
  return ingredient;
};
