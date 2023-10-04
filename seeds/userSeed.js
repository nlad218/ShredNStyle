const { User } = require("../models");

const userData = [
  {
    email: "joeshmo@aol.com",
    userName: "JoeShmo12",
    password: "JoeShmo96",
  },
  {
    email: "Ken@msn.com",
    userName: "KenShredder",
    password: "IDoMountains",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
