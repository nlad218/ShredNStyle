const Product = require("./product");
const User = require("./User");
const Category = require("./categories");
const Order = require("./orders");
const OrderProduct = require("./orderproduct");

Product.belongsTo(Category, { foreignKey: "category_id" });

Category.hasMany(Product);

Order.belongsToMany(Product, {
  foreignKey: "order_id",
  through: OrderProduct,
});

Product.belongsToMany(Order, {
  foreignKey: "product_id",
  through: OrderProduct,
});

User.hasMany(Order, { foreignKey: "user_id" });

Order.belongsTo(User);

module.exports = {
  Product,
  Category,
  User,
};
