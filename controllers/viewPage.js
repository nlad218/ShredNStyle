const router = require("express").Router();
const { Category, Product, ResortInfo } = require("../models");

const checkLoggedIn = (req, res, next) => {
	// Set the loggedIn status based on your session logic
	res.locals.loggedIn = req.session.loggedIn || false;
	next(); // Move on to the next middleware or route handler
};

router.use(checkLoggedIn);

router.get("/", async (req, res) => {
	try {
		const categoriesData = await Category.findAll();
		const categories = categoriesData.map((obj) => obj.get({ plain: true }));
		const productsData = await Product.findAll();
		const products = productsData
			.map((obj) => obj.get({ plain: true }))
			.slice(0, 6);
		const loggedIn = req.session.loggedIn || false;

		// Combine data and templateData into a single object
		const templateData = {
			loggedIn,
			categories, // Pass categories data
			products, // Pass products data
		};

		res.render("home", templateData);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/allProducts", async (req, res) => {
	try {
		// Retrieve all products
		const productsData = await Product.findAll();
		const products = productsData.map((obj) => obj.get({ plain: true }));
		// Organize products by category_id
		res.render("allProducts", { products });
		console.log(products);
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

router.get("/products/:category_id", async (req, res) => {
	try {
		const productsData = await Product.findAll({
			where: {
				category_id: req.params.category_id,
			},
		});

		const products = productsData.map((obj) => obj.get({ plain: true }));

		// Render the "products" template and pass the "products" array to it
		res.render("products", { products });
		console.log(products);
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

router.get("/resort", async (req, res) => {
	try {
		//need to grab states from database (resort Info table)
		//setup a const to bring in the model
		//logged date
		//serielize data
		const resortData = await ResortInfo.findAll();
		// console.log(resortData);
		const resorts = resortData.map((resort) => resort.get({ plain: true }));
		//plain: true is serilizing every data passed through it
		//now the data has been parced through

		// res.render("resortInfo");
		// console.log(resorts);
		// resortInfo is reffering to the resortInfo Handlebars in the VIEWS directory not the partials
		//resorts is the new array of the serialized objects
		res.render("resortInfo", { resorts });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/resort/:state", async (req, res) => {
	const stateValue = req.params.state;
	console.log(`THIS IS LINE 70: ${stateValue}`);
	//now grab and send all the data that has the statevalue ive given in the query parameter
	const resortInfo = await ResortInfo.findAll({
		where: {
			state: stateValue,
		},
	});
	// console.log(resortInfo);
	const stateResorts = resortInfo.map((resort) => resort.get({ plain: true }));
	console.log(stateResorts);
	res.render("stateResorts", { stateResorts });
});

router.get("/productPage/:id", async (req, res) => {
	try {
		const productsData = await Product.findOne({
			where: {
				id: req.params.id,
			},
		});

		const product = productsData.get({ plain: true });
		console.log(product);
		res.render("productPage", { product });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/about", async (req, res) => {
	try {
		res.render("about");
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("*", async (req, res) => {
	try {
		res.render("404");
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;
