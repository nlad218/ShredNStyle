const router = require("express").Router();
const { Product } = require("../../models");

//get all products
router.post("/", async (req, res) => {
  try {
    const productData = await Product.findAll;
    res.status(200).json(productData);
  } catch (error) {
    console.log("-----------------------");
    console.log(err);
    console.log("-----------------------");
    res.status(500).json(err);
  }
});

//get product by id
module.exports = router;
