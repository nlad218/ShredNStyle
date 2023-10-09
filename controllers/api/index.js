const router = require("express").Router();

const userRoutes = require("./user-routes");
const userProducts = require("./products");
const userPasses = require("./passes");
const userResorts = require("./resortInfo");

router.use("/users", userRoutes);
router.use("/products", userProducts);
router.use("/passes", userPasses);
router.use("/resortInfo", userResorts);

module.exports = router;
