const router = require("express").Router();
const { User, Order, OrderProduct, UserProduct, Product } = require("../../models");
const { sendVerificationEmail, sendConfirmationEmail } = require("../../utils/sendemail.js");
const { Op } = require("sequelize");

// Create a new user
router.post("/signup", async (req, res) => {
	try {
		// Check if the email already exists in the database
		const existingUser = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (existingUser) {
			return res.status(409).json({ message: "Email already in use" });
		}

		// Validate the password length
		if (req.body.password.length < 8) {
			return res
				.status(406)
				.json({ message: "Password must be at least 8 characters long" });
		}

		// Create a new user
		const newUser = await User.create({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.userId = newUser.id;
			req.session.username = newUser.username;

			sendVerificationEmail(newUser.email);
			res.status(204).end();
		});
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

//login
router.post("/login", async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			where: {
				[Op.or]: [{ email: req.body.email }, { username: req.body.email }],
			},
		});
		if (!dbUserData) {
			// Combine both error conditions into one response
			return res.status(400).end();
		}

		const validPassword = await dbUserData.checkPassword(
			req.body.password,
			dbUserData.password
		);

		if (!validPassword) {
			// Combine both error conditions into one response

			return res.status(400).end();
		}

		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.userId = dbUserData.dataValues.id;
			req.session.username = dbUserData.dataValues.username;

			res.status(204).end();
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// Logout
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end(); // Return a 204 status for success
		});
	} else {
		res.status(404).end(); // Return a 404 status for failure
	}
});

router.delete("/pay", async (req, res) => {
	const userId = req.session.userId;
	const userEmail = await User.findOne({
		attributes: ['email'], 
		where: {
			id: userId,
		},
	});
	
	const userProducts = await UserProduct.findAll({
		where: {
			user_id: userId,
		},
	});
	
	let productIds = [];
	let productCount = {};
	userProducts.forEach((product) => {
		let item = {};
		item["id"] = product.dataValues.product_id;
		productIds.push(item);
		productCount[item["id"]] = product.dataValues.quantity;
	});
	
	const products = await Product.findAll({ 
		where: {
			[Op.or]: productIds,	
		},
	});
	
	
	const deletionPromises = userProducts.map(async (userProduct) => {
		await userProduct.destroy();
	});

	try {
		await Promise.all(deletionPromises);
		sendConfirmationEmail(userEmail.dataValues.email, products, productCount);
		return res.status(204).send();
	} catch (err) {
		return res.status(500).send("Internal Server Error");
	}
});

module.exports = router;
