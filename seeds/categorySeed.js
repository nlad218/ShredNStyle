const { Category } = require("../models");

const categoryData = [
  {
    category_name: "passes",
  },
  {
    category_name: "outerwear",
  },
  {
    category_name: "accessories",
  },
  { category_name: "skii's" },
  { category_name: "boards" },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
