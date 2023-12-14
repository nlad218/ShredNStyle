const router = require("express").Router();
const { Op } = require("sequelize");
const {
  Category,
  Product,
  ResortInfo,
  UserProduct,
  Reviews,
} = require("../models");
const withAuth = require("../utils/auth.js");

const checkLoggedIn = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn || false;
  res.locals.username = req.session.username || "";
  next();
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
    const username = req.session.username || "";

    // Combine data and templateData into a single object
    const templateData = {
      loggedIn,
      username,
      categories,
      products,
    };

    res.render("home", templateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/allProducts", async (req, res) => {
  try {
    console.log("---------HELLO---");
    // Retrieve all products
    const passData = await Product.findAll({
      where: {
        category_id: 1,
      },
    });
    const outerData = await Product.findAll({
      where: {
        category_id: 2,
      },
    });
    const accessoriesData = await Product.findAll({
      where: {
        category_id: 3,
      },
    });
    const boardsData = await Product.findAll({
      where: {
        category_id: 4,
      },
    });
    const skiData = await Product.findAll({
      where: {
        category_id: 5,
      },
    });

    const pass = passData.map((product) => product.get({ plain: true }));
    const outerwear = outerData.map((product) => product.get({ plain: true }));
    const accessories = accessoriesData.map((product) =>
      product.get({ plain: true })
    );
    const boards = boardsData.map((product) => product.get({ plain: true }));
    const skis = skiData.map((product) => product.get({ plain: true }));

    // Render the "allpass" template and pass the filtered pass
    res.render("allproducts", { pass, outerwear, accessories, boards, skis });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/cart", async (req, res) => {
  try {
    if (!req.session.userId) {
      res.redirect("back");
    } else {
      const cartItemData = await UserProduct.findAll({
        where: { user_id: req.session.userId },
      });

      const cartItems = cartItemData.map((item) => item.get({ plain: true }));
      const productIds = cartItems.map((item) => item.product_id);
      const productData = await Product.findAll({
        where: {
          id: { [Op.in]: productIds },
        },
      });
      const productsInCart = productData.map((item) =>
        item.get({ plain: true })
      );
      cartItems.forEach((item, i) => {
        productsInCart[i].quantity = item.quantity;
        productsInCart[i].totalPrice = item.quantity * productsInCart[i].price;
      });

      // Calculate the total cart price
      const totalCartPrice = productsInCart.reduce((total, product) => {
        return total + product.totalPrice;
      }, 0);
      res.render("cart", { productsInCart, totalCartPrice });
    }
  } catch (err) {
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
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/passes", async (req, res) => {
  try {
    res.render("passes");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/resort", async (req, res) => {
  try {
    const resortData = await ResortInfo.findAll();

    const resorts = resortData.map((resort) => resort.get({ plain: true }));
    res.render("resortInfo", { resorts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/resort/:state", async (req, res) => {
  const stateValue = req.params.state;

  //now grab and send all the data that has the statevalue ive given in the query parameter
  const resortInfo = await ResortInfo.findAll({
    where: {
      state: stateValue,
    },
  });

  const stateResorts = resortInfo.map((resort) => resort.get({ plain: true }));

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

    const revData = await Reviews.findAll({
      where: {
        product_id: product.id,
      },

      attributes: ["review", "name", "stars"],
    });

    const simData = await Product.findAll({
      where: {
        category_id: product.category_id,
      },
    });

    const renderRating = () => {
      const star = "⭐️";
      const newObj = star.repeat(product.rating);
      return newObj;
    };

    rating = renderRating();

    const review = revData.map((obj) => {
      const newObj = obj.get({ plain: true });
      const star = "🏂";
      newObj.stars = star.repeat(newObj.stars);
      return newObj;
    });

    const similar = simData.map((obj) => obj.get({ plain: true })).slice(0, 3);
    res.render("productPage", { product, similar, review, rating });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/about", async (req, res) => {
  try {
    res.render("about");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("*", async (req, res) => {
  try {
    res.render("404");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
