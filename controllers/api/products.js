const router = require("express").Router();
const { Product } = require("../../models");

//get all products
router.get("/", async (req, res) => {
  try {
    await Product.create({
      name: "snowboard",
      price: 30.99,
      image:
        "https://absolute-snow-content.cdn.rlab.net/original/1f737a0d-67c3-4360-9a9c-0a13789e4c5f2017-2018-Lib-Tech-Hot-Knife-Snowboard.jpg",
    });
    const productData = await Product.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get product by id












module.exports = router;

