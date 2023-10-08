const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
require("dotenv").config();

console.log(process.env.DB_USER, process.env.DB_PASSWORD)


// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Define the model for the "resortinfo" table
const ResortInfo = sequelize.define("resortinfo", {
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Connect to the database and sync the models
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database.");

    // Execute the SELECT query
    ResortInfo.findOne({
      where: { city: "cityName" },
    })
      .then((result) => {
        if (result) {
          // Access the longitude and latitude values
          const longitude = result.longitude;
          const latitude = result.latitude;

          // Log the values to the console
          console.log("Longitude:", longitude);
          console.log("Latitude:", latitude);
        } else {
          console.log("No resort found for the specified city.");
        }
      })
      .catch((error) => {
        console.error("Error executing query:", error);
      });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
