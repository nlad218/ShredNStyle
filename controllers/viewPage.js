const router = require("express").Router();
const { ResortInfo } = require("../models");
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


router.get("/productPage", async (req, res) => {
  try {
    res.render("productPage");
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
