const Product = require("./product");
const User = require("./User");
const Category = require("./categories");
const Order = require("./orders");
const OrderProduct = require("./orderproduct");
const ResortInfo = require("./ResortInfo");
const Reviews = require("./reviews");
const UserProduct = require("./userproducts");

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

User.hasMany(
	Order
	// , { foreignKey: "customer_id" }
);

Order.belongsTo(
	User
	// , { foreignKey: "customer_id" }
);

User.belongsToMany(Product, {
	foreignKey: "user_id",
	through: { model: UserProduct, unique: false },
});

Product.belongsToMany(User, {
	foreignKey: "product_id",
	through: { model: UserProduct, unique: false },
});

Reviews.belongsTo(Product, { foreignKey: "product_id" });

Product.hasMany(Reviews);

module.exports = {
	User,
	Category,
	Product,
	Order,
	OrderProduct,
	ResortInfo,
	Reviews,
	UserProduct,
};
