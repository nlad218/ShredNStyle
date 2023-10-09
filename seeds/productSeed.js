const { Product } = require("../models");

const productData = [

  {
		name: "Flying V",
		price: 549.95,
		image:
			"https://www.burton.com/static/product/W24/10712110000_6ML.png?impolicy=bglt&imwidth=486",
		short_desc: "ALL MOUNTAIN SNOWBOARD",
		long_desc:
			"Channel the effortless style of Burton rider Mark McMorris with this twin shape that's tuned to pack power when you need it. The men's Burton Process Snowboard, with the coveted panda graphic, is Mark McMorris' pick for its twin freestyle playfulness and all-terrain prowess. This lift-off ready deck has you covered with plenty of pop and the floaty ease of our Flying V bend.",
		category_id: 4,
	},
	{
		name: "Free Thinker",
		price: 639.95,
		image:
			"https://www.burton.com/static/product/W24/13219109000_6ML.png?impolicy=bglt&imwidth=486",
		short_desc: "The Right Gear for the Perfect Ride",
		long_desc:
			"Open your minds, sheeple, the mountain is a canvas and the snowboard is your paintbrush. The Burton Free Thinker Snowboard is built with a poppy camber profile and carbon boosted layup to get your creative juices flowing and find the tricks less traveled. It has all the energy you need to flow around the mountain jibbing, playing, and creating your masterpiece.",
		category_id: 4,
	},
	{
		name: "Hometown Hero",
		price: 1799.95,
		image:
			"https://www.burton.com/static/product/W24/23913100000_6ML.png?impolicy=bglt&imwidth=486",
		short_desc: "ALL MOUNTAIN / POWDER SNOWBOARD",
		long_desc:
			"We spend a lot of time poking around Vermont's tight trees and icy lines, so we built the Burton Family Tree Hometown Hero Snowboard to blast through it all. It's a daily driver with a build and materials worthy of the Family Tree name. The directional shape has enough taper to float the nose on deeper days, while the board's directional camber and flex maintain the pop to keep it lively in all conditions and terrain.",
		category_id: 4,
	},
  {
    name: "Mens Burton Cyclic Jacket",
    price: 495.95,
    image:
      "https://www.burton.com/static/product/W24/10002107250_5.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 2,
  },
  {
    name: "Mens Burton Swash Jacket",
    price: 499.95,
    image:
      "https://www.burton.com/static/product/W24/10001110251_5.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 2,
  },
  {
    name: "Mens Burton Hover Jacket",
    price: 689.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 2,
  },
  {
    name: "Mens Burton GORE-TEX Gloves",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10353109021_1.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Mens Burton GORE-TEX Mittens",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10384109021_1.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Mens Burton Reverb GORE-TEX Gloves",
    price: 79.95,
    image:
      "https://www.burton.com/static/product/W24/10331109021_1.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Women's Burton Embark Jacket",
    price: 499.95,
    image:
      "https://www.burton.com/static/product/W24/10010106001_6.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 2,
  },
  {
    name: "Women's Burton Upshift Jacket",
    price: 459.95,
    image:
      "https://www.burton.com/static/product/W24/21282101001_5.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 2,
  },
  {
    name: "Women's Burton Flare Jacket",
    price: 689.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 2,
  },
  {
    name: "Women's Burton GORE-TEX Under Mittens",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10395110502_1.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Women's Burton GORE-TEX Under Gloves",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10361109021_1.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Women's Burton Oven GORE-TEX Infinium Mittens",
    price: 179.95,
    image:
      "https://www.burton.com/static/product/W24/23346101650_1.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon M4S Goggles + Bonus Lens + MFI® Face Mask",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/23578101601_2.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon WM1 Goggles + Bonus Lens + MFI® Face Mask",
    price: 279.95,
    image:
      "https://www.burton.com/static/product/W24/19176105102_2.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon M4S Low Bridge Fit Goggles",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/23575101020_2.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon Logan WaveCel® Ski & Snowboard Helmet",
    price: 239.95,
    image:
      "https://www.burton.com/static/product/W24/22734103502_3.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon Merak WaveCel® Ski & Snowboard Helmet",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/22733103100_1.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon Oslo WaveCel® Ski & Snowboard Helmet",
    price: 219.95,
    image:
      "https://www.burton.com/static/product/W24/23570101501_3.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon MFI® Lightweight Neck Warmer",
    price: 39.95,
    image:
      "https://www.burton.com/static/product/W24/23811100501_1.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon MFI® Paneled Neck Warmer",
    price: 69.95,
    image:
      "https://www.burton.com/static/product/W24/23823100001_1.png?impolicy=bglt&imwidth=282",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Anon MFI® Micro Fur Neck Warmer",
    price: 59.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
    short_desc: "",
    long_desc: "",
    category_id: 3,
  },
  {
    name: "Ikon Pass",
    price: 1259.99,
    image: "https://i.ytimg.com/vi/fjkfDw7S23M/maxresdefault.jpg",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "Ikon Base Pass",
    price: 929.9,
    image:
      "https://snowbrains.com/wp-content/uploads/2018/11/Snowbrains-IKON-map-min.jpg",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "Ikon 4 Day Pass",
    price: 469.99,
    image:
      "https://dancedric.com/wp-content/uploads/2021/08/ikonPass_BlueMountain.jpg",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "Epic Pass",
    price: 949.99,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/194551-22-EPAS-Digital_NewPassMediaCards_ALL_EmilyLopez_EpicMilitaryPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "Epic Local Pass",
    price: 705.99,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "Epic 4 Day Pass",
    price: 391.99,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "The Ken Pass",
    price: 5000,
    image:
      "https://www.felizmodern.com/cdn/shop/files/ken_800x.jpg?v=1683577016",
    short_desc: "",
    long_desc: "",
    category_id: 1,
  },
  {
    name: "Dynastar M-Free 99 Skis",
    price: 699.95,
    image:
      "https://www.rei.com/media/90cee30d-8a65-4cee-abde-93c3279d5971.jpg?size=2000",
    short_desc:
      "High and long rise tip and tail rocker facilitates maneuverability, both on the ground and in the air.",
    long_desc:
      "Fiberglass torsion box technology surrounds the wood part of the Hybrid Core with fiberglass, which adds vertical reinforcement to enhance comfort and on-snow feeling.",
    category_id: 5,
  },
  {
    name: "Rossignol Sender 110 Free Skis",
    price: 899.95,
    image:
      "https://www.rei.com/media/f20ad5a8-e393-456b-afa7-f7d988bedb82.jpg?size=2000",
    short_desc:
      "Double Rocker profile sets the bar for fun, responsive skiing.",
    long_desc:
      "Carbon alloy matrix reduces weight, delivering responsive pop and lightweight agility. Damp Tech absorbs vibration for increased snow contact and smooth, confident and predictable control in variable conditions.",
    category_id: 5,
  },
  {
    name: "Rossignol Essential Skis with Bindings",
    price: 1049.95,
    image:
      "https://www.rei.com/media/8e17d8bb-92d1-4898-82f2-63c3e4503ea5.jpg?size=2000",
    short_desc:
      "Oversize sidecut delivers a responsive feel with quick edge engagement and powerful, consistent carving.",
    long_desc:
      "Rectangular sidewall construction combined with the wood/Titanal sidewalls maximizes edge control and delivers race-proven grip, precision and power. The process and materials allow for 77% of the skis to be recycled, 10 times the rate of conventional skis.",
    category_id: 5,
  },
  {
    name: "Blizzard Hustle 10 Skis",
    price: 799.95,
    image:
      "https://www.rei.com/media/aa610c61-6566-4c36-bbd0-461bc171955d.jpg?size=2000",
    short_desc:
      "Carbon fiber and fiberglass combine for a stout, stable platform underfoot, while the tips and tails remain playful and nimble.",
    long_desc:
      "Designed for charging up as hard as they charge down, all Hustle models come with a pre-cut skin notch in the tail for ease of application and guaranteed retention. Freeride-inspired platform maintains a familiar sidecut and rocker profile in a lightweight packageperfect for backcountry skiers looking for that extra boost of confidence. ",
    category_id: 5,
  },
  {
    name: "Salomon QST Blank Skis",
    price: 799.95,
    image:
      "https://www.rei.com/media/8f4ee02f-0bd7-4749-8a27-ccae26cc1948.jpg?size=2000",
    short_desc:
      "Camber underfoot and early rise in the tips and tails adapt to whatever the mountain throws at you.",
    long_desc:
      "Progression meets an innovative freeride shape with lower widest points and a lengthened rocker to bring playfulness and reliability to all types of turns. Double sidewalls and a cork damplifier create confidence-boosting stability when dropping in.",
    category_id: 5,
  },
  {
    name: "Blizzard Zero G 95 Skis",
    price: 799.95,
    image:
      "https://www.rei.com/media/dcb918fd-4767-4734-8bc5-bc069faecaeb.jpg?size=2000",
    short_desc:
      "These skis deliver excellent downhill performance for the weight and function as if they were designed specifically for a high level of downhill performance.",
    long_desc:
      "Ski mountaineers Hilaree Nelson and Jim Morrison used the Zero G 95 skis when they descended the 27,940 ft. peak. Long contact surface improves stability on all types of terrain. Longer radius sidecut is more forgiving and less catchy, especially in variable snow.",
    category_id: 5,
  },

];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;
