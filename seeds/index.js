const sequelize = require("../config/connection");
const seedUser = require("./userSeed");
const seedCategory = require("./categorySeed");
const seedProduct = require("./productSeed");
const seedOrder = require("./orderSeed");
const seedOrderProduct = require("./orderproductSeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedCategory();
  await seedProduct();
  await seedOrder();
  await seedOrderProduct();

  process.exit(0);
};

seedAll();
