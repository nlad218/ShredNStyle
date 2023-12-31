const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const Product = require("./product.js");

class Reviews extends Model {}

Reviews.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stars: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		product_id: {
			type: DataTypes.INTEGER,
			references: { model: "product", key: "id" },
		},
	},
	{
		sequelize, // Pass the Sequelize instance here
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "reviews",
	}
);

module.exports = Reviews;
