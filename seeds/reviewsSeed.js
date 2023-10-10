const { Reviews } = require("../models");

const reviewData = [
	{
		review: "Great looking board built with quality!",
		name: "Wes",
		stars: 5,
		product_id: 1,
	},
	{
		review:
			"Amazing board! Easy to ride where ever you want to take it. Good control and carves like a Japanese knife. The glow underneath is a head turner…lots of compliments. Only concern is durability of top layer. Scratches very easily and I wish they put in another coat of something more durable. A shame for such a beautiful board.",
		name: "Divejoe",
		stars: 4,
		product_id: 1,
	},
	{
		review:
			"Had to send the board back. Finish was terrible with lots of air bubbles.",
		name: "Matt J",
		stars: 1,
		product_id: 1,
	},
	{
		review:
			"I demo'd a Custom and was ready to buy one. Then I compared the specs with the Freethinker and decided to take my chances with that. I'm glad I did. I've only ridden this a few times in VT and it rips through some very hard-packed conditions. Looking forward to taking it out in some pow next year.",
		name: "Kash",
		stars: 5,
		product_id: 2,
	},
	{
		review: "Great board just a little too stiff",
		name: "Robin",
		stars: 4,
		product_id: 2,
	},
	{
		review:
			"Would give a 5 star but the tail cracked on me on the first day so just the durability a little lacking but other than that absolutely love the board",
		name: "Jacob",
		stars: 4,
		product_id: 2,
	},
	{
		review:
			"Amazing board, had lots of boards in my life, by far my favorite. tears up pow, and has a great edge for high speed groomers",
		name: "Bryce",
		stars: 5,
		product_id: 3,
	},
	{
		review:
			"My biggest problem with this board is I want other boards for my quiver and need none. Nothing else compares.",
		name: "Steve",
		stars: 5,
		product_id: 3,
	},
	{
		review: "I just smile all the way through",
		name: "Christopher B.",
		stars: 5,
		product_id: 3,
	},
	{
		review:
			"There is a slight discomfort under the arms from the pit vents. They seem stiff.",
		name: "Shawn",
		stars: 3,
		product_id: 4,
	},
	{
		review:
			"Seemed well made, I didn't use it. I've been wearing size small for other brands but Burton's small seemed almost two sizes larger. I had to pay for return shipping as well",
		name: "Mohamad G.",
		stars: 3,
		product_id: 4,
	},
	{
		review:
			"This is my second AK jacket, the first one has lasted over 10 years. One thing to improve would be to add wrist gators",
		name: "Peter",
		stars: 4,
		product_id: 4,
	},
	{
		review:
			"This is a nice coat as far as water proof and wind proof goes but for the money i was expecting something with a little warmer than it is. I live in a cold area of the country and need to incorporate in inner liner each time i wear this coat. ",
		name: "Robert N.",
		stars: 2,
		product_id: 5,
	},
	{
		review: "Great jacket! Keeps you warm and dry.",
		name: "Salim",
		stars: 4,
		product_id: 5,
	},
	{
		review:
			"Came as advertised. The only thing I would want redesigned is the hood. It falls over my eyes when there isn’t gear on my head. I would have preferred it was adjustable.",
		name: "Stephen",
		stars: 4,
		product_id: 5,
	},
	{
		review: "No complaints.",
		name: "Elliott",
		stars: 5,
		product_id: 6,
	},
	{
		review: "Fit tight around hip. Good quality",
		name: "Charles",
		stars: 4,
		product_id: 6,
	},
	{
		review:
			"Light as a feather but its worth its weight in gold! The quality of Gore-Tex PRO combined with the right amount of pockets and the tech behind this jacket are superb. Might fit a bit smaller so make sure you size up on your order or ask the Burton team on the chat for more info.",
		name: "Benjamin",
		stars: 5,
		product_id: 6,
	},
	{
		review:
			"After 35-40 days of snowboarding hands get cold below zero (without inner gloves). Seams are opened on one hand in two places.",
		name: "Kirill M.",
		stars: 2,
		product_id: 7,
	},
	{
		review: "Kept me warm on a cold day.",
		name: "Matt",
		stars: 4,
		product_id: 7,
	},
	{
		review: "Good gloves for the price",
		name: "A.J.",
		stars: 4,
		product_id: 7,
	},
	{
		review:
			"Absolutely love them. They stay dry no matter what and my hands have never been cold for long in them!",
		name: "Victor",
		stars: 4,
		product_id: 8,
	},
	{
		review:
			"The glove is thin but with inner gloves is perfect . However the inner gloves give me more trouble.",
		name: "Johnson",
		stars: 3,
		product_id: 8,
	},
	{
		review:
			"Love this mit, but the sizing is bizarrely small. If you compare Burton size chart with another brand, the large dimensions are the same as a small in another brand. I would size up by 2 sizes. Sadly, none of the mitts seems to come in XXL which would fit a standard large hand.",
		name: "Blyr",
		stars: 4,
		product_id: 8,
	},
	{
		review:
			"I bought these gloves for my husband for the chilly winters here in Wisconsin. We have below zero temps and bitter wind chills and he put those on to start the car and he said his hands were sweating; needless to say he was completely shocked on how warm these were! Definitely recommend these!",
		name: "Suzi M.",
		stars: 5,
		product_id: 9,
	},
	{
		review: "True to size, gore tex feels great. Keeps my hands warm.",
		name: "Rudy",
		stars: 5,
		product_id: 9,
	},
	{
		review:
			"Perhaps not quite as warm as I was hoping and PU palm not nearly as supple as my outgoing pair of gloves that had leather palm. But seem well made and lots of good features for the money.",
		name: "James T.",
		stars: 3,
		product_id: 9,
	},
	{
		review: "Too bulky",
		name: "Joanne",
		stars: 3,
		product_id: 10,
	},
	{
		review:
			"I haven’t worn it yet but it looks great, feels great on and of course the Burton quality is impeccable!! Bring on the snow!!!",
		name: "Nancy",
		stars: 5,
		product_id: 10,
	},
	{
		review:
			"I am 5’7 about 150lbs. I got a large. I am pretty small on top but needed room for my hips. Tired of having to up zip the bottom for the extra room.",
		name: "Lisa",
		stars: 4,
		product_id: 10,
	},
	{
		review:
			"I love the color and fitting. I ordered a small and it fits great. I’m 5ft 5in, 128lbs. Nicely tapered at the waist but enough room for layers and sleeves are the perfect length.",
		name: "Sofia",
		stars: 5,
		product_id: 11,
	},
	{
		review:
			"Ordered two sizes up for a “baggy” look, the colour looks like lemon yellow but actual product is more of a mustard yellow, still a nice colour hence keeping it.",
		name: "Annie",
		stars: 5,
		product_id: 11,
	},
	{
		review:
			"It’s amazing in Panthera, very nice & very visible too. With an AK Baker down jacket as a mid layer, great warmth and easy movement. True to size, will no doubt last forever and look amazingly good that long as well, 101% satisfied.",
		name: "Kenneth",
		stars: 5,
		product_id: 11,
	},
	{
		review:
			"The jacket itself looks and feels great. I have not yet tested it in the coldest weathers here in Lapland but so far it has kept me warm. Only thing im disappointed at is the zipper which feels kind of cheap considering its a very pricey jacket.",
		name: "Sara",
		stars: 4,
		product_id: 12,
	},
	{
		review: "Super warm, super comfortable! Lot of pockets, fits perfectly!",
		name: "Jan",
		stars: 5,
		product_id: 12,
	},
	{
		review:
			"Good looking jacket. Nice materials. Can’t wait to take it to the snow.",
		name: "Andrea",
		stars: 5,
		product_id: 12,
	},
	{
		review:
			"These are my first pair of low-profile mittens and I am very pleased with how they fit and general maneuverability while wearing them. I was hoping they would keep my hands warmer as they are listed for Arctic conditions and my hands started getting cold in 17 deg F temps.",
		name: "Alexis",
		stars: 4,
		product_id: 13,
	},
	{
		review:
			"They are a Christmas present. Felt comfortable to me but have not giving them to my daughter yet!",
		name: "Katrina H.",
		stars: 4,
		product_id: 13,
	},
	{
		review: "Excellent! They keep you really warm",
		name: "Mariel",
		stars: 5,
		product_id: 13,
	},
	{
		review:
			"These gloves are horrible. Within 15 minutes my fingers were so cold I had to take them off and shove my hands in my pockets to warm up. It was only -8. I can not imagine true Canadian winter.",
		name: "Julia",
		stars: 1,
		product_id: 14,
	},
	{
		review:
			"I'm a huge fan of these gloves and I love the liner inside as well. I have smaller hands and I wear Medium. I do feel sometimes the pinky is a bit tight so folks with bigger hands might want to get the large. They fit me quite snug!",
		name: "Cari",
		stars: 5,
		product_id: 14,
	},
	{
		review:
			"Great quality, color although the fit is a little tight i wear a size small and would like them a little looser but definitely a good buy!",
		name: "Vasileia",
		stars: 4,
		product_id: 14,
	},
	{
		review: "The fit is good. Still not had a chance to wear them",
		name: "Jacques",
		stars: 4,
		product_id: 15,
	},
	{
		review:
			"These gloves are very warm and light weight. Kept me dry and warm in a winter storm. The only issue I have is I wish it didn't have separated fingers inside and was a true mitt. I just prefer the feeling of a true mitt. But maybe this makes it warmer.",
		name: "Gerardo",
		stars: 4,
		product_id: 15,
	},
	{
		review:
			"If you’ve come to the review section for some extra confidence before ordering, use this as an “order me!” button! These mittens are awesome 10/10 I love them",
		name: "Nolan",
		stars: 5,
		product_id: 15,
	},
	{
		review: "Meh... for the price theres better.",
		name: "Mark",
		stars: 3,
		product_id: 16,
	},
	{
		review: "Easy change magnetic interface!",
		name: "Makani",
		stars: 5,
		product_id: 16,
	},
	{
		review:
			"2 lenses the MFI mask, this is a great decision to make, i can recommend this enough, this will change your ski experiences for the better.",
		name: "Juan P.",
		stars: 5,
		product_id: 16,
	},
	{
		review:
			"Love these goggles they are very clear and easy to Switch out the lenses. They came with a Mask but I did not like the black circle over the mouth if your getting picky. It ruined the whole look.",
		name: "Kelly",
		stars: 4,
		product_id: 17,
	},
	{
		review:
			"Love! They fit seamlessly with my women's Rodan helmet from Anon. These goggles don't pinch my nose at all, and the lens change is awesome. I also really loved the magnetic neck gaiter. Nothing negative to say!",
		name: "Autumn",
		stars: 5,
		product_id: 17,
	},
	{
		review:
			"I bought these for my fiancé, and she loves them, apart from one glaring issue. The violet lens appears to be defective because it is fogging up between the inner and out lens, making it impossible to wipe away the fog or see out of the lens",
		name: "Anthony",
		stars: 3,
		product_id: 17,
	},
	{
		review: "Good job with the goggle design!",
		name: "Summit C.",
		stars: 5,
		product_id: 18,
	},
	{
		review: "Perfect fit!",
		name: "Ken",
		stars: 5,
		product_id: 18,
	},
	{
		review: "Love it",
		name: "Zhang",
		stars: 5,
		product_id: 18,
	},
	{
		review:
			"I love the idea of WaveCel and bought this because I love my Bontrager cycling helmet made with WaveCel. But the fit is really poor.",
		name: "Will",
		stars: 2,
		product_id: 19,
	},
	{
		review:
			"I've had MIPS helmets for years, now that wavecel is available in snow i've switched. The fit and comfort is amazing plus the safetymakes me feel very comfortable on the slopes.",
		name: "Steven",
		stars: 5,
		product_id: 19,
	},
	{
		review:
			"I had been meaning to purchase a new helmet since last season and the wavecel material got my attention, the fit is great and performance... I barely new I had it on!",
		name: "Pam",
		stars: 5,
		product_id: 19,
	},
	{
		review:
			"Great fit and stable even when cruising the bumps. Latch system works great!",
		name: "Cali",
		stars: 5,
		product_id: 20,
	},
	{
		review:
			"Way to small, uncomfortable , and the earpiece keeps snapping out.",
		name: "Kris",
		stars: 1,
		product_id: 20,
	},
	{
		review:
			"Just got my order a couple days after I placed my order. The helmet looks amazing and fits great. This is my second helmet ever for snowboarding and I got sized correctly for a medium.",
		name: "Sam",
		stars: 5,
		product_id: 20,
	},
	{
		review: "Awesome fit!",
		name: "Ryan",
		stars: 5,
		product_id: 21,
	},
	{
		review: "Comfortable, lightweight and fits great with goggles.",
		name: "Sarah",
		stars: 5,
		product_id: 21,
	},
	{
		review:
			"Helmet fits great, love the option to tighten or loose and the chin strap is easy to function. Would love if the vents could close but otherwise it's perfect. My anon goggles fits perfect too.",
		name: "Jenny",
		stars: 5,
		product_id: 21,
	},
	{
		review:
			"I bought two pairs of the these lightweight MFI neck warmers. Neither one of them magnetically latch on to my goggles like they're supposed to. I was really looking forward to using these lightweight neck warmers as I mainly snowboard in socal where it is doesn't get very cold. Bummer.",
		name: "Chris",
		stars: 2,
		product_id: 22,
	},
	{
		review: "It didn't magnetize to my goggles like it's supposed to",
		name: "Lonnie",
		stars: 2,
		product_id: 22,
	},
	{
		review: "Magnet could be stronger , but do the job just fine",
		name: "Josh",
		stars: 4,
		product_id: 22,
	},
	{
		review: "The carrier came broken, in three pieces.",
		name: "Pete",
		stars: 2,
		product_id: 23,
	},
	{
		review:
			"The plastic nose wire holding the magnets is plastic. It broke at the nose bridge almost immediately first use. Would recommend other MFI masks with metal nose wire.",
		name: "Smith",
		stars: 1,
		product_id: 23,
	},
	{
		review:
			"Item is advertised as intended for the M4. The magnet should be included.",
		name: "Karen",
		stars: 1,
		product_id: 23,
	},
	{
		review: "Perfect, as described.",
		name: "Matt",
		stars: 5,
		product_id: 24,
	},
	{
		review: "Perfect transaction.",
		name: "Kevin",
		stars: 5,
		product_id: 24,
	},
	{
		review: "Could be better!",
		name: "Lauren",
		stars: 3,
		product_id: 24,
	},
	{
		review:
			"Ikon this year and next year, zero regrets. Gotten 20 days on the pass already, including a trip out west.",
		name: "Adam",
		stars: 5,
		product_id: 25,
	},
	{
		review: "Decent price for good mountains in my opinion.",
		name: "Bill",
		stars: 4,
		product_id: 25,
	},
	{
		review: "Worth every penny!",
		name: "Doug",
		stars: 5,
		product_id: 25,
	},
	{
		review: "Decent price.",
		name: "Grant",
		stars: 4,
		product_id: 26,
	},
	{
		review: "Too expensive for what you get!",
		name: "Keith",
		stars: 2,
		product_id: 26,
	},
	{
		review: "Best way to get out there!",
		name: "Devin",
		stars: 5,
		product_id: 26,
	},
	{
		review: "Easy getaway!",
		name: "Lenny",
		stars: 4,
		product_id: 27,
	},
	{
		review: "Love to take the family out for a long weekend!",
		name: "Sandy",
		stars: 5,
		product_id: 27,
	},
	{
		review: "Best buy for your money!",
		name: "Zach",
		stars: 5,
		product_id: 27,
	},
	{
		review: "Love going to local resorts!",
		name: "Amanda",
		stars: 5,
		product_id: 28,
	},
	{
		review: "I get one every season!",
		name: "Seth",
		stars: 5,
		product_id: 28,
	},
	{
		review: "Great price, but not a fan of most of the resorts!",
		name: "Lauren",
		stars: 3,
		product_id: 28,
	},
	{
		review: "Love spending time with my family!",
		name: "Julia",
		stars: 5,
		product_id: 29,
	},
	{
		review: "Price is a little high.",
		name: "Stephanie",
		stars: 4,
		product_id: 29,
	},
	{
		review: "Regret buying this, I can't get away from life enough to use it.",
		name: "Felix",
		stars: 4,
		product_id: 29,
	},
	{
		review: "Best option if you're just getting into the hobby!",
		name: "Garth",
		stars: 5,
		product_id: 30,
	},
	{
		review: "Love this! Wish it was not so expensive tho!",
		name: "Jess",
		stars: 4,
		product_id: 30,
	},
	{
		review: "I get my family passes each year! We love it!",
		name: "Mark",
		stars: 5,
		product_id: 30,
	},
	{
		review: "I bought this and my soul immediately left my body.",
		name: "Ken",
		stars: 5,
		product_id: 31,
	},
	{
		review: "I don't remember my life before I got a Ken pass.",
		name: "Ken",
		stars: 5,
		product_id: 31,
	},
	{
		review: "I did not know what love was until I purchased the Ken pass.",
		name: "Ken",
		stars: 5,
		product_id: 31,
	},
	{
		review:
			"Mine are mounted with the Look Pivot 99m free, these are seriously awesome skis, arguably one of the best freeride ski released this year, being able to cope with mixed terrain and some hard carving.",
		name: "Benjamin",
		stars: 5,
		product_id: 32,
	},
	{
		review:
			"Tested these at the Verbier FWT round. Great all rounder, really fun and playful in mixed conditions. Surfy and fun in the deeper soft stuff but still stable enough to cut through some crust and chop. Currently top of my list for a one ski quiver.",
		name: "Trent",
		stars: 5,
		product_id: 32,
	},
	{
		review: "Awesome skis!",
		name: "Aaron",
		stars: 4,
		product_id: 32,
	},
	{
		review:
			"The Sender Free 110 is the perfect everyday ski, great for all conditions, deep pow, crud and chop and even rails turns on the groomer. This ski is the quiver killer we’ve all been waiting for!",
		name: "Tatum",
		stars: 5,
		product_id: 33,
	},
	{
		review:
			"Amazing resort ski for ripping around with your friends and feeling great doing it!",
		name: "Randy",
		stars: 5,
		product_id: 33,
	},
	{
		review: "Great first pair!",
		name: "Ron",
		stars: 5,
		product_id: 33,
	},
	{
		review:
			"I have been looking for a modern version of my Atomic B5 and SkiLogic Occam's Razor skis. I purchased and have skied the Essential in 167 cm for the past two weeks in cold powder, slush, and ice and come up with tremendous smiles in all conditions. If you are a B5/Occam's Razor fan, buy this ski.",
		name: "Fred",
		stars: 5,
		product_id: 34,
	},
	{
		review:
			"Rode a friend’s skis, great carvers, could use a 171 of maybe even 175cm length.",
		name: "Bobby",
		stars: 4,
		product_id: 34,
	},
	{
		review: "Love the look and feel of these!",
		name: "Dan",
		stars: 4,
		product_id: 34,
	},
	{
		review:
			"Very stable underfoot with a playful tip and tail. Works out great in all terrains and conditions. One of the best all mountain one quiver options.",
		name: "Chloe",
		stars: 5,
		product_id: 35,
	},
	{
		review:
			"Absolute ripper on groomers with some float for soft days. Using this as a daily driver in Utah.",
		name: "Marshall",
		stars: 5,
		product_id: 35,
	},
	{
		review: "Most responsive ski I've ever owned!",
		name: "Bailey",
		stars: 5,
		product_id: 35,
	},
	{
		review:
			"Fun, intuitive ski that pivots well in tight spaces, bashes well into chopped up snow, but gets tossed around at speed beyond a casual pace. Swing weight of the 194 is very noticeable.",
		name: "Felicia",
		stars: 3,
		product_id: 36,
	},
	{
		review:
			"Super happy with them other than the top sheet is starting to pull apart at the tip of one ski after 3 days of powder. No impacts, no slamming them down, no cliff drops, just skiing in powder.",
		name: "Jay",
		stars: 3,
		product_id: 36,
	},
	{
		review:
			"The Blanks contain the Cork tip to maintain lightness while combating chatter, and I experienced the lightness as they were easy to throw around, but when it came to groomers, it felt harder to control.",
		name: "Jason",
		stars: 4,
		product_id: 36,
	},
	{
		review:
			"Amazing versatile, very light ski. Great on the firm even at speed. Great in powder and corn. My skis were edge high and concave in the tip and tail, but was easily fixed with a light tune.",
		name: "Caleb",
		stars: 5,
		product_id: 37,
	},
	{
		review:
			"Very good on steeper icy sections and even decent at 35mph on firm snow.",
		name: "Greg",
		stars: 5,
		product_id: 37,
	},
	{
		review: "Fast and fun!",
		name: "Nick",
		stars: 4,
		product_id: 37,
	},
];

const seedReview = () => Reviews.bulkCreate(reviewData);

module.exports = seedReview;
