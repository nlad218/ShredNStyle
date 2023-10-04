const sequelize = require("../config/connection");
const seedLogin = require("./loginSeed");
const seedPasses = require("./passesSeed");
const seedProduct = require("./productSeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLogin();

  await seedPasses();

  await seedProduct();

  process.exit(0);
};

seedAll();
