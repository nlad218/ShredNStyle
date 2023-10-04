const router = require("express").Router();
const { Product } = require("../../models");

//get all products
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get product by id
router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);

    if (!productData) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
});






















module.exports = router;
