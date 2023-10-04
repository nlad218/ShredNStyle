const { Product } = require("../models");

const snowBoard1 = await Product.create({
  id: 1,
  name: "Flying V",
  price: 549.95,
  image:
    "https://www.burton.com/static/product/W24/10712110000_6ML.png?impolicy=bglt&imwidth=486",
});

const snowBoard2 = await Product.create({
  id: 2,
  name: "Free Thinker",
  price: 639.95,
  image:
    "https://www.burton.com/static/product/W24/13219109000_6ML.png?impolicy=bglt&imwidth=486",
});

const snowBoard3 = await Product.create({
  id: 3,
  name: "Hometown Hero",
  price: 1799.95,
  image:
    "https://www.burton.com/static/product/W24/23913100000_6ML.png?impolicy=bglt&imwidth=486",
});

const mensJacket1 = await Product.create({
  id: 4,
  name: "Mens Burton [ak] Cyclic GORE-TEXT 2L jacket",
  price: 495.95,
  image:
    "https://www.burton.com/static/product/W24/10002107250_5.png?impolicy=bglt&imwidth=486",
});

const mensJacket2 = await Product.create({
  id: 5,
  name: "Mens Burton [ak] Swash GORE-TEXT 2L jacket",
  price: 499.95,
  image:
    "https://www.burton.com/static/product/W24/10001110251_5.png?impolicy=bglt&imwidth=486",
});

const mensJacket3 = await Product.create({
  id: 6,
  name: "Mens Burton [ak] Hover GORE-TEXT 3L jacket",
  price: 689.95,
  image:
    "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
});

const mensGloves1 = await Product.create({
  id: 7,
  name: "Mens Burton GORE-TEX Gloves",
  price: 84.95,
  image:
    "https://www.burton.com/static/product/W24/10353109021_1.png?impolicy=bglt&imwidth=486",
});

const mensGloves2 = await Product.create({
  id: 8,
  name: "Mens Burton GORE-TEX Mittens",
  price: 84.95,
  image:
    "https://www.burton.com/static/product/W24/10384109021_1.png?impolicy=bglt&imwidth=486",
});

const mensGloves3 = await Product.create({
  id: 9,
  name: "Mens Burton Reverb GORE-TEX Gloves",
  price: 79.95,
  image:
    "https://www.burton.com/static/product/W24/10331109021_1.png?impolicy=bglt&imwidth=486",
});

const womensJacket1 = await Product.create({
  id: 10,
  name: "Women's Burton [ak] Embark GORE-TEXT 2L jacket",
  price: 499.95,
  image:
    "https://www.burton.com/static/product/W24/10010106001_6.png?impolicy=bglt&imwidth=486",
});

const womensJacket2 = await Product.create({
  id: 11,
  name: "Women's Burton [ak] Upshift GORE-TEXT 2L jacket",
  price: 459.95,
  image:
    "https://www.burton.com/static/product/W24/21282101001_5.png?impolicy=bglt&imwidth=486",
});

const womensJacket3 = await Product.create({
  id: 12,
  name: "Women's Burton [ak] Flare GORE-TEXT 2L jacket",
  price: 689.95,
  image:
    "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
});

module.export = {
  snowBoard1,
  snowBoard2,
  snowBoard3,
  mensJacket1,
  mensJacket2,
  mensJacket3,
  mensGloves1,
  mensGloves2,
  mensGloves3,
  womensJacket1,
  womensJacket2,
  womensJacket3,
};
