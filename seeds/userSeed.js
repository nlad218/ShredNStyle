const { User } = require("../models");

const userData = [
  {
    email: "joeshmo@aol.com",
    username: "JoeShmo12",
    password: "JoeShmo96",
  },
  {
    email: "Ken@msn.com",
    username: "KenShredder",
    password: "IDoMountains",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
