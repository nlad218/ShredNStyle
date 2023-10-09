const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reviews extends Model {}

Reviews.init({});

module.exports = Reviews;
