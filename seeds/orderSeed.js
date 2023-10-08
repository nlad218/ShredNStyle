const { DATE } = require("sequelize");
const { Order } = require("../models");

const orderData = [
  {
    purchaseDate: new Date("10/2/2023"),
    purchaseAmt: 549.95,
    userID: 1,
  },
  {
    purchaseDate: new Date("10/5/2023"),
    purchaseAmt: 249.95,
    userID: 2,
  },
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;
