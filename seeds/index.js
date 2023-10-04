const sequelize = require("../config/connection");
const seedUser = require("./userSeed");
const seedPasses = require("./passesSeed");
const seedProduct = require("./productSeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedPasses();
  await seedProduct();

  process.exit(0);
};

seedAll();
