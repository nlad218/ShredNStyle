const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
	async checkPassword(inputPassword, hashedPassword) {
		try {
			// Use bcrypt to compare the input password with the stored hashed password
			const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

			return isMatch;
		} catch (error) {
			// Handle any errors that occur during the password comparison
			throw error;
		}
	}
}

User.init(
	{
		ID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},
	},
	{
		hooks: {
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			},
		},
		sequelize,
		freezeTableName: true,
		timestamps: false,
		underscored: true,
		modelName: "user",
	}
);

module.exports = User;
