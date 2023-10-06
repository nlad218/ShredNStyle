const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class OrderProduct extends Model {}

OrderProduct.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      references: { model: "order", key: "id" },
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
    modelName: "order_product",
  }
);

module.exports = OrderProduct;
