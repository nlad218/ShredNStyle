const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    purchaseDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    // customer_id: {
    //   type: DataTypes.INTEGER,
    //   references: { model: "user", key: "id" },
    // },
    purchaseAmt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: { isDecimal: true },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: "order",
  }
);

module.exports = Order;
