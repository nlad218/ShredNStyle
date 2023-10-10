const { Product } = require("../models");

const productData = [
  {
    name: "Flying V",
    price: 549.95,
    image:
      "https://www.burton.com/static/product/W24/10712110000_6ML.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc: "ALL MOUNTAIN SNOWBOARD!",
    long_desc:
      "Channel the effortless style of Burton rider Mark McMorris with this twin shape that's tuned to pack power when you need it. The men's Burton Process Snowboard, with the coveted panda graphic, is Mark McMorris' pick for its twin freestyle playfulness and all-terrain prowess. This lift-off ready deck has you covered with plenty of pop and the floaty ease of our Flying V bend.",
    category_id: 4,
  },
  {
    name: "Free Thinker",
    price: 639.95,
    image:
      "https://www.burton.com/static/product/W24/13219109000_6ML.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc: "The Right Gear for the Perfect Ride!",
    long_desc:
      "Open your minds, sheeple, the mountain is a canvas and the snowboard is your paintbrush. The Burton Free Thinker Snowboard is built with a poppy camber profile and carbon boosted layup to get your creative juices flowing and find the tricks less traveled. It has all the energy you need to flow around the mountain jibbing, playing, and creating your masterpiece.",
    category_id: 4,
  },
  {
    name: "Hometown Hero",
    price: 1799.95,
    image:
      "https://www.burton.com/static/product/W24/23913100000_6ML.png?impolicy=bglt&imwidth=486",
    rating: 5,
    short_desc: "ALL MOUNTAIN / POWDER SNOWBOARD!",
    long_desc:
      "We spend a lot of time poking around Vermont's tight trees and icy lines, so we built the Burton Family Tree Hometown Hero Snowboard to blast through it all. It's a daily driver with a build and materials worthy of the Family Tree name. The directional shape has enough taper to float the nose on deeper days, while the board's directional camber and flex maintain the pop to keep it lively in all conditions and terrain.",
    category_id: 4,
  },
  {
    name: "Mens Burton Cyclic Jacket",
    price: 495.95,
    image:
      "https://www.burton.com/static/product/W24/10002107250_5.png?impolicy=bglt&imwidth=486",
    rating: 3,
    short_desc: "Warm and Dry No Matter the Weather.",
    long_desc:
      "You've got your season pass. You can count on the men's Burton [ak] Cyclic GORE-TEX Jacket in any weather and any day of the season. Whether you're setting a boot pack or simply braving the wind on the lift, it's a warm, dry world inside the Cyclic.",
    category_id: 2,
  },
  {
    name: "Mens Burton Swash Jacket",
    price: 499.95,
    image:
      "https://www.burton.com/static/product/W24/10001110251_5.png?impolicy=bglt&imwidth=486",
    rating: 3,
    short_desc:
      "Shake of cold lift rides and biting winds without compromising on your mobility in the men's Burton Swash Jacket. ",
    long_desc:
      "Its core-focused insulation cranks up the heat, just like wearing an insulated vest under your shell, and leaves your arms unrestricted and free to move. A finely tuned list of rider-designed features keeps you focused on scoping lines and sticking every landing.",
    category_id: 2,
  },
  {
    name: "Mens Burton Hover Jacket",
    price: 689.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
    rating: 5,
    short_desc:
      "An ultra-lightweight, packable GORE-TEX jacket with splitboard-specific utility for the earn-your-turn crowd.",
    long_desc:
      "As the lightest weight, most packable jacket in the line, the men's Burton Hover Jacket combines ultimate performance with a low-volume design that takes up little space in your backcountry pack.",
    category_id: 2,
  },
  {
    name: "Mens Burton GORE-TEX Gloves",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10353109021_1.png?impolicy=bglt&imwidth=486",
    rating: 3,
    short_desc: "Ride All Day, Any Day",
    long_desc:
      "We ask a lot of our hands during a day on the mountain. If you are someone who rides regardless of the weather, the men's Burton GORE-TEX Gloves are for you. They offer set-it-and-forget-it coverage that you can count on to ride day in and day out without having to worry about whether your hands can weather the weather.",
    category_id: 3,
  },
  {
    name: "Mens Burton GORE-TEX Mittens",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10384109021_1.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc: "Ride All Day, Any Day",
    long_desc:
      " They offer set-it-and-forget-it coverage that you can count on to ride day in and day out without having to worry about whether your hands can weather the weather.",
    category_id: 3,
  },
  {
    name: "Mens Burton Reverb GORE-TEX Gloves",
    price: 79.95,
    image:
      "https://www.burton.com/static/product/W24/10331109021_1.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc: "Buckle, zip, grab. Your hands are essential",
    long_desc:
      "Give them the warm, dry world they deserve with the men's Burton Reverb GORE-TEX Gloves. All the tech in a durable package, so you can just keep riding and not worry about how long your hands are gonna stay comfy.",
    category_id: 3,
  },
  {
    name: "Women's Burton Embark Jacket",
    price: 499.95,
    image:
      "https://www.burton.com/static/product/W24/10010106001_6.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc:
      "Ride in Every Condition, All Season Long. Adventurous riding and backcountry days demand temperature regulation and full mobility.",
    long_desc:
      "The women's Burton Embark Jacket mixes time-tested storm-proofing with a fit and feel that lets you ride, climb, and transition without missing a beat. Combine it with your fave mid layer, and you've got the one shell you can count on for staying dry, warm, and riding all season long.",
    category_id: 2,
  },
  {
    name: "Women's Burton Upshift Jacket",
    price: 459.95,
    image:
      "https://www.burton.com/static/product/W24/21282101001_5.png?impolicy=bglt&imwidth=486",
    rating: 5,
    short_desc:
      "Ride Out Any Storm. Shrug off the weather, shift into high gear, and ride on.",
    long_desc:
      "The women's Burton Upshift Jacket combines trusted storm protection and breathability with a smart lining that responds to body heat to help regulate your temp.",
    category_id: 2,
  },
  {
    name: "Women's Burton Flare Jacket",
    price: 689.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
    rating: 5,
    short_desc:
      "Stoke Your Heater. Down heat meets proven storm protection to make snowboarding's highest performance puffy. Period.",
    long_desc:
      " The women's Burton Flare Jacket is your golden ticket for staying warm, dry and riding longer. GORE-TEX keeps the elements at bay while letting your body breathe. Strategically placed insulation and a shaped fit warm your core and let you move without restriction.",
    category_id: 2,
  },
  {
    name: "Women's Burton GORE-TEX Under Mittens",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10395110502_1.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc: "Technical Two-in-One Warmth.",
    long_desc:
      "We ask a lot of hands during a day on the mountain. If you are someone who rides regardless of the weather, the women's Burton GORE-TEX Under Mittens + Gore Warm technology check all the warm, dry, and dexterous boxes with a low-profile cuff that fits under your jacket.",
    category_id: 3,
  },
  {
    name: "Women's Burton GORE-TEX Under Gloves",
    price: 84.95,
    image:
      "https://www.burton.com/static/product/W24/10361109021_1.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc:
      "Ride All Day, Any Day. We ask a lot of hands during a day on the mountain",
    long_desc:
      "If you are someone who rides regardless of the weather, the women's Burton GORE-TEX Under Gloves are for you. They offer set-it-and-forget-it coverage with cuffs that tuck under your jacket, so you can ride day in and day out without having to worry about whether your hands can weather the weather.",
    category_id: 3,
  },
  {
    name: "Women's Burton Oven GORE-TEX Infinium Mittens",
    price: 179.95,
    image:
      "https://www.burton.com/static/product/W24/23346101650_1.png?impolicy=bglt&imwidth=282",
    rating: 4,
    short_desc: "Our Warmest Mittens.",
    long_desc:
      "When you ride regardless of the weather, you need gear you know will keep you warm and dry. The Burton [ak] Oven GORE-TEX INFINIUM™ Mittens are made for the coldest, stormiest days. You'll feel the difference as soon as you slide your hands into these mitts.",
    category_id: 3,
  },
  {
    name: "Anon M4S Goggles + Bonus Lens + MFI® Face Mask",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/23578101601_2.png?impolicy=bglt&imwidth=282",
    rating: 4,
    short_desc: "These toric-lens goggles offer our best optics.",
    long_desc:
      "The Anon M4S Toric Goggles feature the same high-end performance of the M4 Goggles in a frame scaled for medium-sized faces. They offer a precise helmet-to-goggle fit with the wide field of view and enhanced peripheral vision of a toric lens a frame scaled to fit smaller faces.",
    category_id: 3,
  },
  {
    name: "Anon WM1 Goggles + Bonus Lens + MFI® Face Mask",
    price: 279.95,
    image:
      "https://www.burton.com/static/product/W24/19176105102_2.png?impolicy=bglt&imwidth=282",
    rating: 4,
    short_desc:
      "Quick-change lens tech and a bonus lens mean you are always ready for a wide variety of conditions.",
    long_desc:
      "The Anon WM1 Goggles bring Magna-Tech® quick lens-change technology and the precise optics of a spherical lens to a frame designed for slightly smaller faces. A Perceive lens enhances contrast for the best possible definition and terrain recognition in a wide range of light conditions.",
    category_id: 3,
  },
  {
    name: "Anon M4S Low Bridge Fit Goggles",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/23575101020_2.png?impolicy=bglt&imwidth=282",
    rating: 5,
    short_desc:
      "Get more from your goggles with this cylindrical shape offering our highest level optics.",
    long_desc:
      "The M4S offers the unprecedented versatility to switch between toric and cylindrical style lenses. This edition of the M4S includes two cylindrical lenses featuring Perceive optics for high-contrast, terrain-defining clarity and our best anti-fog treatment for crystal clear vision through a wide range of conditions.",
    category_id: 3,
  },
  {
    name: "Anon Logan WaveCel® Ski & Snowboard Helmet",
    price: 239.95,
    image:
      "https://www.burton.com/static/product/W24/22734103502_3.png?impolicy=bglt&imwidth=282",
    rating: 4,
    short_desc:
      "The Logan WaveCel helmet features advanced protection with premium fit and comfort features in a low-profile, lightweight style.",
    long_desc:
      "Anon's Logan WaveCel helmet pairs 3D cellular protection with an in-mold construction featuring a lightweight shell with an EPS and WaveCel liner designed in a sleek, low-profile style.",
    category_id: 3,
  },
  {
    name: "Anon Merak WaveCel® Ski & Snowboard Helmet",
    price: 319.95,
    image:
      "https://www.burton.com/static/product/W24/22733103100_1.png?impolicy=bglt&imwidth=282",
    rating: 4,
    short_desc:
      "The Merak WaveCel is fully loaded with 19 ventilation channels, WaveCel protection, and premium comfort and fit features in a durable hybrid molded construction.",
    long_desc:
      "Anon's Merak WaveCel helmet pairs revolutionary WaveCel protection with the dual hybrid construction of the ding-resistant durability of an endure-shell on top and a featherweight in-mold construction on the bottom with 19 active ventilation channels.",
    category_id: 3,
  },
  {
    name: "Anon Oslo WaveCel® Ski & Snowboard Helmet",
    price: 219.95,
    image:
      "https://www.burton.com/static/product/W24/23570101501_3.png?impolicy=bglt&imwidth=282",
    rating: 5,
    short_desc:
      "Micro-adjustable fit, fleece-lined warmth, and a lightweight feel with the latest impact-absorbing safety technology.",
    long_desc:
      "The Anon Oslo WaveCel Helmet pairs 3D cellular protection with an in-mold construction featuring a lightweight shell with an EPS and WaveCel liner designed in a sleek, low-profile style. WaveCel technology distributes impact energy to help reduce direct and rotational impact forces to the head.",
    category_id: 3,
  },
  {
    name: "Anon MFI® Lightweight Neck Warmer",
    price: 39.95,
    image:
      "https://www.burton.com/static/product/W24/23811100501_1.png?impolicy=bglt&imwidth=282",
    rating: 3,
    short_desc: "Our do-it-all-weight neck warmer for everyday coverage.",
    long_desc:
      "Made for mild to cool conditions, the Anon MFI® Lightweight Neck Warmer protects your face from wind, sun, and cold. The adjustable design can be worn as neck warmer in mild conditions and pulls up for full face coverage with a seamless connection to MFI-compatible goggles in colder, stormier weather.",
    category_id: 3,
  },
  {
    name: "Anon MFI® Paneled Neck Warmer",
    price: 69.95,
    image:
      "https://www.burton.com/static/product/W24/23823100001_1.png?impolicy=bglt&imwidth=282",
    rating: 1,
    short_desc:
      "The Anon MFI® Paneled Neck Warmer is our pinnacle neck gaiter ",
    long_desc:
      "The versatile design lets you adapt to changing conditions by wearing it around your neck or pulled up for full face coverage with a seamless connection to MFI-compatible goggles and channeled exhaust ports manage your breath.",
    category_id: 3,
  },
  {
    name: "Anon MFI® Micro Fur Neck Warmer",
    price: 59.95,
    image:
      "https://www.burton.com/static/product/W24/10013111402_5.png?impolicy=bglt&imwidth=486",
    rating: 4,
    short_desc:
      "Face the elements with the soft-brushed fleece feel of this neck warmer.",
    long_desc:
      "The Anon MFI® Micro Fur Neck Warmer provides seamless storm-day coverage that's as easy to put on as it is to take off. Our exclusive MFI design makes for set-it-and-forget-it ease with our MFI goggles. A relaxed fit lets it sit naturally for unrestricted mobility and all-day comfort.",
    category_id: 3,
  },
  {
    name: "Ikon Pass",
    price: 1259.99,
    image: "https://i.ytimg.com/vi/fjkfDw7S23M/maxresdefault.jpg",
    rating: 5,
    short_desc: "Access to 58 unique destinations worldwide.",
    long_desc:
      "No blackout dates at any resort, 16 unlimited skiing and riding destinations, and up to 7 days at 41 destinations.",
    category_id: 1,
  },
  {
    name: "Ikon Base Pass",
    price: 929.9,
    image:
      "https://snowbrains.com/wp-content/uploads/2018/11/Snowbrains-IKON-map-min.jpg",
    rating: 4,
    short_desc: "Unlimited Access to 14 destinations.",
    long_desc:
      "Limited blackout dates at selects resorts, up to 5 days each at select resorts, and Some lift reservations required.",
    category_id: 1,
  },
  {
    name: "Ikon 4 Day Pass",
    price: 469.99,
    image:
      "https://dancedric.com/wp-content/uploads/2021/08/ikonPass_BlueMountain.jpg",
    rating: 4,
    short_desc: "Up to 4 days of fun skiing or snowboarding!",
    long_desc:
      "Blackout dates apply to resorts, covers 41 unique destinations, and some lift reservations required.",
    category_id: 1,
  },
  {
    name: "Epic Pass",
    price: 949.99,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/194551-22-EPAS-Digital_NewPassMediaCards_ALL_EmilyLopez_EpicMilitaryPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    rating: 4,
    short_desc: "Unlimited access to 41 resorts!",
    long_desc:
      "Limited access to international resorts, includes Epic Mountain Rewards, and pass protection with Epic coverage.",
    category_id: 1,
  },
  {
    name: "Epic Local Pass",
    price: 705.99,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    rating: 4,
    short_desc: "Limited access to 29 unique resorts!",
    long_desc:
      "No reservations required for any resort, includes Epic Mountain Rewards, and pass protection with Epic coverage.",
    category_id: 1,
  },
  {
    name: "Epic 4 Day Pass",
    price: 391.99,
    image:
      "https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
    rating: 5,
    short_desc: "Up to 4 days at 38 unique resorts!",
    long_desc:
      "No reservations required at any resort, includes Epic Mountain Rewards, and does not include pass protection.",
    category_id: 1,
  },
  {
    name: "The Ken Pass",
    price: 5000,
    image:
      "https://www.felizmodern.com/cdn/shop/files/ken_800x.jpg?v=1683577016",
    rating: 5,
    short_desc: "Ski or snowboard literally anywhere!",
    long_desc:
      "Allows you to legally trespass on private property, enables your third eye and dimensional travel, does not include barbie, it would be kinda weird.",
    category_id: 1,
  },
  {
    name: "Dynastar M-Free 99 Skis",
    price: 699.95,
    image:
      "https://www.rei.com/media/90cee30d-8a65-4cee-abde-93c3279d5971.jpg?size=2000",
    rating: 5,
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
    rating: 5,
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
    rating: 4,
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
    rating: 5,
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
    rating: 3,
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
    rating: 5,
    short_desc:
      "These skis deliver excellent downhill performance for the weight and function as if they were designed specifically for a high level of downhill performance.",
    long_desc:
      "Ski mountaineers Hilaree Nelson and Jim Morrison used the Zero G 95 skis when they descended the 27,940 ft. peak. Long contact surface improves stability on all types of terrain. Longer radius sidecut is more forgiving and less catchy, especially in variable snow.",
    category_id: 5,
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;
