const { Product } = require("../models");

const productData = [
  {
    name: "Flying V",
    price: 549.95,
    image:
      "https://www.burton.com/static/product/W24/10712110000_6ML.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Free Thinker",
    price: 639.95,
    image:
      "https://www.burton.com/static/product/W24/13219109000_6ML.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Hometown Hero",
    price: 1799.95,
    image:
      "https://www.burton.com/static/product/W24/23913100000_6ML.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Mens Burton [ak] Cyclic GORE-TEXT 2L jacket",
    price: 495.95,
    image:
      "https://www.burton.com/static/product/W24/10002107250_5.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Mens Burton [ak] Swash GORE-TEXT 2L jacket",
    price: 499.95,
    image:
      "https://www.burton.com/static/product/W24/10001110251_5.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Mens Burton [ak] Hover GORE-TEXT 3L jacket",
    price: 689.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Mens Burton GORE-TEX Gloves",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10353109021_1.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Mens Burton GORE-TEX Mittens",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10384109021_1.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Mens Burton Reverb GORE-TEX Gloves",
    price: 79.95,
    image:
      "https://www.burton.com/static/product/W24/10331109021_1.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Women's Burton [ak] Embark GORE-TEXT 2L jacket",
    price: 499.95,
    image:
      "https://www.burton.com/static/product/W24/10010106001_6.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Women's Burton [ak] Upshift GORE-TEXT 2L jacket",
    price: 459.95,
    image:
      "https://www.burton.com/static/product/W24/21282101001_5.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Women's Burton [ak] Flare GORE-TEXT 2L jacket",
    price: 689.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Women's Burton GORE-TEX Under Mittens",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10395110502_1.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Women's Burton GORE-TEX Under Gloves",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10361109021_1.png?impolicy=bglt&imwidth=486",
  },
  {
    name: "Women's Burton [ak] Oven GORE-TEX Infinium Mittens",
    price: 179.95,
    image:
      "https://www.burton.com/static/product/W24/23346101650_1.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon M4S Goggles (Toric) + Bonus Lens + MFI® Face Mask",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/23578101601_2.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon WM1 Goggles + Bonus Lens + MFI® Face Mask",
    price: 279.95,
    image:
      "https://www.burton.com/static/product/W24/19176105102_2.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon M4S Low Bridge Fit Goggles (Toric) + Bonus Lens + MFI® Face Mask",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/23575101020_2.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon Logan WaveCel® Ski & Snowboard Helmet",
    price: 239.95,
    image:
      "https://www.burton.com/static/product/W24/22734103502_3.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon Merak WaveCel® Ski & Snowboard Helmet",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/22733103100_1.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon Oslo WaveCel® Ski & Snowboard Helmet",
    price: 219.95,
    image:
      "https://www.burton.com/static/product/W24/23570101501_3.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon MFI® Lightweight Neck Warmer",
    price: 39.95,
    image:
      "https://www.burton.com/static/product/W24/23811100501_1.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon MFI® Paneled Neck Warmer",
    price: 69.95,
    image:
      "https://www.burton.com/static/product/W24/23823100001_1.png?impolicy=bglt&imwidth=282",
  },
  {
    name: "Anon MFI® Micro Fur Neck Warmer",
    price: 59.95,
    image:
      "https://www.burton.com/static/product/W24/23813100001_1.png?impolicy=bglt&imwidth=282",
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;
