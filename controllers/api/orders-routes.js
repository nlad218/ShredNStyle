const router = require("express").Router();
const { User, Order, OrderProduct } = require("../../models");

// Create a POST route for adding a product/pass to the user's cart
router.post("/add-to-cart/:productId", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res
        .status(401)
        .json({
          message: "You must be logged in to add products to your cart.",
        });
    }

    const userId = req.session.userId;

    const productId = req.params.productId;

    const user = await User.findByPk(userId);

    const product = await Product.findByPk(productId);

    if (!user || !product) {
      return res.status(404).json({ message: "User or product not found." });
    }

    const orderProduct = await OrderProduct.create({
      userId: user.id,
      productId: product.id,
    });

    const cartItems = await OrderProduct.findAll({
      where: {
        userId: user.id,
      },
      include: Product,
    });

    let total = 0;
    for (const item of cartItems) {
      total += item.Product.price;
    }

    await Order.update(
      {
        purchaseAmt: total,
      },
      {
        where: {
          userId: user.id,
        },
      }
    );

    return res
      .status(201)
      .json({ message: "Product added to cart successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
