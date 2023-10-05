const router = require("express").Router();
// const { User } = require("../../models");

// CREATE new user
router.get("/", async (req, res) => {
  try {
    res.render("home");
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

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
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
