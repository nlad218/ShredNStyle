const { Product } = require("../models");

const productData = [
	{
		name: "Flying V",
		price: 549.95,
		image:
			"https://www.burton.com/static/product/W24/10712110000_6ML.png?impolicy=bglt&imwidth=486",
		long_desc:
			"Channel the effortless style of Burton rider Mark McMorris with this twin shape that's tuned to pack power when you need it. The men's Burton Process Snowboard, with the coveted panda graphic, is Mark McMorris' pick for its twin freestyle playfulness and all-terrain prowess. This lift-off ready deck has you covered with plenty of pop and the floaty ease of our Flying V bend.",
		short_desc: "ALL MOUNTAIN SNOWBOARD",
		category_id: 4,
	},
	{
		name: "Free Thinker",
		price: 639.95,
		image:
			"https://www.burton.com/static/product/W24/13219109000_6ML.png?impolicy=bglt&imwidth=486",
		long_desc: "ALL MOUNTAIN SNOWBOARD",
		short_desc:
			"Open your minds, sheeple, the mountain is a canvas and the snowboard is your paintbrush. The Burton Free Thinker Snowboard is built with a poppy camber profile and carbon boosted layup to get your creative juices flowing and find the tricks less traveled. It has all the energy you need to flow around the mountain jibbing, playing, and creating your masterpiece.",
		category_id: 4,
	},
	{
		name: "Hometown Hero",
		price: 1799.95,
		image:
			"https://www.burton.com/static/product/W24/23913100000_6ML.png?impolicy=bglt&imwidth=486",
		long_desc: "ALL MOUNTAIN / POWDER SNOWBOARD",
		short_desc:
			"We spend a lot of time poking around Vermont's tight trees and icy lines, so we built the Burton Family Tree Hometown Hero Snowboard to blast through it all. It's a daily driver with a build and materials worthy of the Family Tree name. The directional shape has enough taper to float the nose on deeper days, while the board's directional camber and flex maintain the pop to keep it lively in all conditions and terrain.",
		category_id: 4,
	},
	{
		name: "Mens Burton Cyclic Jacket",
		price: 495.95,
		image:
			"https://www.burton.com/static/product/W24/10002107250_5.png?impolicy=bglt&imwidth=486",
		category_id: 2,
	},
	{
		name: "Mens Burton Swash Jacket",
		price: 499.95,
		image:
			"https://www.burton.com/static/product/W24/10001110251_5.png?impolicy=bglt&imwidth=486",
		category_id: 2,
	},
	{
		name: "Mens Burton Hover Jacket",
		price: 689.95,
		image:
			"https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
		category_id: 2,
	},
	{
		name: "Mens Burton GORE-TEX Gloves",
		price: 84.95,
		image:
			"https://www.burton.com/static/product/W24/10353109021_1.png?impolicy=bglt&imwidth=486",
		category_id: 3,
	},
	{
		name: "Mens Burton GORE-TEX Mittens",
		price: 84.95,
		image:
			"https://www.burton.com/static/product/W24/10384109021_1.png?impolicy=bglt&imwidth=486",
		category_id: 3,
	},
	{
		name: "Mens Burton Reverb GORE-TEX Gloves",
		price: 79.95,
		image:
			"https://www.burton.com/static/product/W24/10331109021_1.png?impolicy=bglt&imwidth=486",
		category_id: 3,
	},
	{
		name: "Women's Burton Embark Jacket",
		price: 499.95,
		image:
			"https://www.burton.com/static/product/W24/10010106001_6.png?impolicy=bglt&imwidth=486",
		category_id: 2,
	},
	{
		name: "Women's Burton Upshift Jacket",
		price: 459.95,
		image:
			"https://www.burton.com/static/product/W24/21282101001_5.png?impolicy=bglt&imwidth=486",
		category_id: 2,
	},
	{
		name: "Women's Burton Flare Jacket",
		price: 689.95,
		image:
			"https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
		category_id: 2,
	},
	{
		name: "Women's Burton GORE-TEX Under Mittens",
		price: 84.95,
		image:
			"https://www.burton.com/static/product/W24/10395110502_1.png?impolicy=bglt&imwidth=486",
		category_id: 3,
	},
	{
		name: "Women's Burton GORE-TEX Under Gloves",
		price: 84.95,
		image:
			"https://www.burton.com/static/product/W24/10361109021_1.png?impolicy=bglt&imwidth=486",
		category_id: 3,
	},
	{
		name: "Women's Burton Oven GORE-TEX Infinium Mittens",
		price: 179.95,
		image:
			"https://www.burton.com/static/product/W24/23346101650_1.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon M4S Goggles + Bonus Lens + MFI® Face Mask",
		price: 319.95,
		image:
			"https://www.burton.com/static/product/W24/23578101601_2.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon WM1 Goggles + Bonus Lens + MFI® Face Mask",
		price: 279.95,
		image:
			"https://www.burton.com/static/product/W24/19176105102_2.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon M4S Low Bridge Fit Goggles",
		price: 319.95,
		image:
			"https://www.burton.com/static/product/W24/23575101020_2.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon Logan WaveCel® Ski & Snowboard Helmet",
		price: 239.95,
		image:
			"https://www.burton.com/static/product/W24/22734103502_3.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon Merak WaveCel® Ski & Snowboard Helmet",
		price: 319.95,
		image:
			"https://www.burton.com/static/product/W24/22733103100_1.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon Oslo WaveCel® Ski & Snowboard Helmet",
		price: 219.95,
		image:
			"https://www.burton.com/static/product/W24/23570101501_3.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon MFI® Lightweight Neck Warmer",
		price: 39.95,
		image:
			"https://www.burton.com/static/product/W24/23811100501_1.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon MFI® Paneled Neck Warmer",
		price: 69.95,
		image:
			"https://www.burton.com/static/product/W24/23823100001_1.png?impolicy=bglt&imwidth=282",
		category_id: 3,
	},
	{
		name: "Anon MFI® Micro Fur Neck Warmer",
		price: 59.95,
		image:
			"https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
		category_id: 3,
	},
	{
		name: "Ikon Pass",
		price: 1259.99,
		image: "https://i.ytimg.com/vi/fjkfDw7S23M/maxresdefault.jpg",
		category_id: 1,
	},
	{
		name: "Ikon Base Pass",
		price: 929.9,
		image:
			"https://snowbrains.com/wp-content/uploads/2018/11/Snowbrains-IKON-map-min.jpg",
		category_id: 1,
	},
	{
		name: "Ikon 4 Day Pass",
		price: 469.99,
		image:
			"https://dancedric.com/wp-content/uploads/2021/08/ikonPass_BlueMountain.jpg",
		category_id: 1,
	},
	{
		name: "Epic Pass",
		price: 949.99,
		image:
			"https://scene7.vailresorts.com/is/image/vailresorts/194551-22-EPAS-Digital_NewPassMediaCards_ALL_EmilyLopez_EpicMilitaryPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
		category_id: 1,
	},
	{
		name: "Epic Local Pass",
		price: 705.99,
		image:
			"https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
		category_id: 1,
	},
	{
		name: "Epic 4 Day Pass",
		price: 391.99,
		image:
			"https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
		category_id: 1,
	},
	{
		name: "The Ken Pass",
		price: 5000,
		image:
			"https://www.felizmodern.com/cdn/shop/files/ken_800x.jpg?v=1683577016",
		category_id: 1,
	},
	{
		name: "Dynastar M-Free 99 Skis",
		price: 699.95,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsthBaT6GAhKWLCq0dnhDw2z1Q1NThHycEhg&usqp=CAU",
		category_id: 5,
	},
	{
		name: "Rossignol Sender 110 Free Skis",
		price: 899.95,
		image:
			"https://cdn.skimag.com/wp-content/uploads/2023/08/rossignol-sender-free-110_h.jpg",
		category_id: 5,
	},
	{
		name: "Rossignol Essential Skis with Bindings",
		price: 1049.95,
		image:
			"https://marvel-b1-cdn.bc0a.com/f00000000298083/www.christysports.com/dw/image/v2/BGBB_PRD/on/demandware.static/-/Sites-master-winter/default/dw965a94d7/1044750_027_1.jpg?sw=1600&sh=1600",
		category_id: 5,
	},
	{
		name: "Blizzard Hustle 10 Skis",
		price: 799.95,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVt3iRC9nuOXKi3HBmH4FcQIeO8lwgPZlJxcAczbTE66Vez7i85JJRd3FghTNluvOhE0Y&usqp=CAU",
		category_id: 5,
	},
	{
		name: "Salomon QST Blank Skis",
		price: 799.95,
		image:
			"https://images.evo.com/imgp/700/238113/1023908/salomon-qst-blank-skis-2024-.jpg",
		category_id: 5,
	},
	{
		name: "Blizzard Zero G 95 Skis",
		price: 799.95,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGsNoRb4Dxg4H118LwAd9oUg2PkAd3tr2KsJP_0kvV_803hsXd9QeQsP1w9oho-rgLwQ&usqp=CAU",
		category_id: 5,
	},
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;
