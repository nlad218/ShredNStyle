const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class ResortInfo extends Model {}

ResortInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    long: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "resortInfo",
  }
);

module.exports = ResortInfo;
