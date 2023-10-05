const { OrderProduct } = require("../models");
const orderProductData = [
  {
    order_id: 1,
    product_id: 1,
  },
  {
    order_id: 2,
    product_id: 2,
  },
];
const seedOrderProduct = () => OrderProduct.bulkCreate(orderProductData);
module.exports = seedOrderProduct;