const router = require("express").Router();

const userRoutes = require("./user-routes");
const userProducts = require("./products");
// const userPasses = require(".//passes");

router.use("/users", userRoutes);
router.use("/products", userProducts);
// router.use("/passes", userPasses);

module.exports = router;
