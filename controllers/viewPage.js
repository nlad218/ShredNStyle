const router = require("express").Router();

const { Category } = require("../models");

// CREATE new user
router.get("/", async (req, res) => {
	try {
		const categoriesData = await Category.findAll();
		const categories = categoriesData.map((obj) => obj.get({ plain: true }));

		res.render("home", { categories });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/cart", async (req, res) => {
	try {
		res.render("cart");
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/products", async (req, res) => {
	try {
		res.render("products");
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/passes", async (req, res) => {
	try {
		res.render("passes");
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
