const router = require("express").Router();
const {
  User,
  Order,
  OrderProduct,
  Product,
  UserProduct,
} = require("../../models");

// Create a POST route for adding a product/pass to the user's cart
router.post("/cart/:productId", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res.status(401).json({
        message: "You must be logged in to add products to your cart.",
      });
    }

    const userId = req.session.userId;

    const product_id = req.params.productId;
    const user = await User.findByPk(userId);

    const product = await Product.findByPk(product_id);

    console.log(user.id, product_id);
    if (!user || !product) {
      return res.status(404).json({ message: "User or product not found." });
    }
    
    let userProduct = await UserProduct.findOne({
      user_id: user.id,
      product_id: product.id,
    });
    if (!userProduct) {
      userProduct = await UserProduct.create({
        user_id: user.id,
        product_id: product.id,
        quantity: req.body.quantity,
      });
    } else {
      await userProduct.update({
        quantity: userProduct.quantity + req.body.quantity,
      });
    }

    
    // const cartItems = await UserProduct.findAll({
    //   where: {
    //     user_id: user.id,
    //   },
    //   include: Product,
    // });

    let total = 0;
    total = req.body.quantity * product.price;

    // await Order.upsert(
    //   {
    //     purchaseAmt: total,
    //   },
    //   {
    //     where: {
    //       userId: user.id,
    //     },
    //   }
    // );

    return res
      .status(201)
      .json({ message: "Product added to cart successfully." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
});

// Create a GET route to fetch the user's order and product data
router.get("/my-orders", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res
        .status(401)
        .json({ message: "You must be logged in to view your orders." });
    }

    const userId = req.session.userId;

    const userOrder = await Order.findOne({
      where: {
        userId: userId,
      },
    });

    if (!userOrder) {
      return res
        .status(404)
        .json({ message: "Order not found for this user." });
    }

    const orderProducts = await OrderProduct.findAll({
      where: {
        userId: userId,
      },
      include: Product,
    });

    return res
      .status(200)
      .json({ order: userOrder, orderProducts: orderProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
