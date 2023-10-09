const router = require("express").Router();

const userRoutes = require("./user-routes");
const userProducts = require("./products");
const userPasses = require("./passes");
const userResorts = require("./resortInfo");
const orderRoutes = require("./orders-routes");

router.use("/users", userRoutes);
router.use("/products", userProducts);
router.use("/passes", userPasses);
router.use("/resortInfo", userResorts);
router.use("/orders", orderRoutes);

module.exports = router;
