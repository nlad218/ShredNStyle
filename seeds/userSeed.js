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

const seedUser = async () => {
  for (const user of userData) {
    await User.create(user);
  }
}

module.exports = seedUser;
