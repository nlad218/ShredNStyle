const router = require("express").Router();
const { User, Order } = require("../../models");
const { sendVerificationEmail } = require("../../utils/sendemail.js");
// Create a new user
router.post("/", async (req, res) => {
  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create a new user
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    dbOrderData = await Order.create({
      userID: newUser.id,
      purchaseAmt: 0,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.orderId = dbOrderData.id;

      sendVerificationEmail(newUser.email);
      res.redirect("/");
      // res.status(201).json(newUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    console.log(dbUserData);
    let dbOrderData = await Order.findOne({
      where: {
        userID: dbUserData.id,
      },
    });

    if (!dbOrderData) {
      dbOrderData = await Order.create({
        userID: dbUserData.id,
        purchaseAmt: 0,
      });
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.orderId = dbOrderData.id;

      res.redirect("/");
      // res
      // 	.status(200)
      // 	.json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
