const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class UserProduct extends Model {}

UserProduct.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id" },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: { model: "product", key: "id" },
    },

    // Color and Size Options
    //  color_op: {
    //   type: DateTypes.STRING(30),
    // },
    // size_op: {
    //   type: DateTypes.STRING(2),
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_product",
  }
);

module.exports = UserProduct;
