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
		quantity: {
			type: DataTypes.INTEGER,
			unique: false,
		},
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
