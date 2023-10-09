const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reviews extends Model {}

Reviews.init(
	{
		reviewText: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "reviews",
		timestamps: true,
	}
);

module.exports = Reviews;
