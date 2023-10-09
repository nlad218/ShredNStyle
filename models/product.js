const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Category = require("./categories");

class Product extends Model {}

Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			isUrl: true,
		},
		short_desc: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		long_desc: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
			references: { model: "category", key: "id" },
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "product",
	}
);

module.exports = Product;
