const { ResortInfo } = require("../models");

const resortInfo = [
	{
		state: "CO",
		resortName: "Loveland",
		lat: "40.397761",
		long: "-105.07498",
		number: 8007363754,
		address: "I-70, Dillon, CO 80435",
		description:
			"Loveland Ski Area is a ski area in the western United States, located near the town of Georgetown, Colorado. Located at the eastern portal of the Eisenhower Tunnel, Loveland is within the Arapahoe National Forest.",
	},
	{
		state: "CO",
		resortName: "Breckenridge",
		lat: "39.482231",
		long: "-106.046181",
		number: 9704535000,
		address: "Breckenridge, CO 80424",
		description:
			"Breckenridge Ski Resort is an alpine ski resort in the western United States, in Breckenridge, Colorado. Recognized for acres of skiable terrain across five mountain peaks, it welcomes thousands of skiers and snowboarders each season.",
	},
	{
		state: "CO",
		resortName: "Steamboat Springs",
		lat: "40.490429",
		long: "-106.842384",
		number: 8009222722,
		address: "Steamboat Springs, CO 80487",
		description:
			"Steamboat Resort is a major ski area in the western United States, located in northwestern Colorado at Steamboat Springs. Operated by the Steamboat Ski & Resort Corporation, it is located on Mount Werner, a mountain in the Park Range in the Routt National Forest",
	},
	{
		state: "CO",
		resortName: "Winter Park",
		lat: "39.886848",
		long: "-105.762548",
		number: 9707265514,
		address: "85 Parsenn Rd, Winter Park, CO 80482",
		description: `Winter Park is the closest major mountain destination to Denver at just 67 miles away. Dont be fooled by our convenient location, though… you’ll feel remotely tucked away in our high country corner of the Rockies. With easy access to 765,000 acres of public land, Winter Park is home to endless adventures and an unparalleled and unfiltered Colorado experience`,
	},
	{
		state: "CO",
		resortName: "Silverton",
		lat: "37.811268",
		long: "-107.668343",
		number: 9703875706,
		address: "6226 State Hwy 110, Silverton, CO 81433",
		description: `Silverton Mountain is a ski area near Silverton, Colorado, United States that opened on January 19, 2002. Popular with skiers and snowboarders, Silverton Mountain has one chairlift that carries visitors into its terrain, which is for advanced and expert skiers or riders.`,
	},
	{
		state: "CO",
		resortName: "Beaver Creek",
		lat: "39.604328",
		long: "-106.512329",
		number: 9707544636,
		address: "Beaver Creek, CO 81620",
		description: "The best resort ever. In the history of man.",
	},
	{
		state: "CO",
		resortName: "Eldora Mountain Resor",
		lat: "39.9372",
		long: "105.5827",
		number: 3034408700,
		address: "Nederland, CO 80466",
		description:
			"Eldora Mountain Resort is a ski area in the western United States, located in the southwest corner of Boulder County, Colorado, near the unincorporated community of Eldora and three miles west of Nederland.",
	},
	{
		state: "CO",
		resortName: "Aspen Snowmass",
		lat: "39.1895",
		long: "106.9497",
		number: 9709231227,
		address: "Snowmass Village, CO",
		description:
			"Snowmass is a ski resort located in the Town of Snowmass Village near Aspen, Colorado. The ski area is owned and operated by the Aspen Skiing Company as part of the Aspen/Snowmass complex.",
	},
	{
		state: "CO",
		resortName: "Arapahoe Basin",
		lat: "39.6341",
		long: "105.8715",
		number: 9704680718,
		address: "Dillon, CO 80435",
		description:
			"Arapahoe Basin is an alpine ski area in the Rocky Mountains of the United States, in the Arapaho National Forest of Colorado.",
	},
	{
		state: "CO",
		resortName: "Vail",
		lat: "39.6061",
		long: "106.3550",
		number: 9707548245,
		address: "Vail, CO 81657",
		description:
			"At 5,289 acres, it is the third-largest single-mountain ski resort in the U.S., behind Big Sky and Park City, featuring seven bowls and intermediate gladed terrain in Blue Sky Basin.",
	},
	{
		state: "CO",
		resortName: "Keystone",
		lat: "39.58",
		long: "-105.94",
		number: 9704964386,
		address: "Keystone, CO 80435",
		description:
			"Keystone Resort consists of three mountains: Dercum Mountain, North Peak, the Outback, and five Bowls offering skiing at all levels.",
	},
	{
		state: "CO",
		resortName: "Crested Butte",
		lat: "38.88",
		long: "107.00",
		number: 9702517021,
		address: "Snowmass Rd, Crested Butte, CO 81225",
		description:
			"Crested Butte's base area is on the western edge of the mountain. Out of the base, two learning lifts, Peachtree and Westwall, provide access to beginner and low-intermediate terrain.",
	},
	{
		state: "UT",
		resortName: "Park City",
		lat: "40.646061",
		long: "-111.497971",
		number: 4356498111,
		address: " Park City, UT",
		description:
			"Park City Mountain Resort is a ski resort in the western United States in Park City, Utah, located 32 miles east of Salt Lake City. Park City, as the ski resort and area is known, contains several training courses for the U.S. Ski Team, including slalom and giant slalom runs",
	},
	{
		state: "UT",
		resortName: "Snowbird",
		lat: "40.5829",
		long: "111.6556",
		number: 8019332222,
		address: "9385 Snowbird Center Trail, Snowbird, UT 84092",
		description: `Averaging more than 500 inches of annual snowfall per year, Snowbird is North America’s most accessible alpine resort destination, located just 29 miles from Salt Lake City International Airport. Featuring the new state-of-the-art Aerial Tram with access to 2,500 acres of legendary terrain, Snowbird provides year-round big mountain experiences at the top of Utah.`,
	},
	{
		state: "UT",
		resortName: "Solitude Mountain Resort",
		lat: "40.6109",
		long: "111.5969",
		number: 8015365786,
		address: "Solitude, UT 84121",
		description:
			"Solitude Mountain Resort is a ski resort located in the Big Cottonwood Canyon of the Wasatch Mountains, thirty miles southeast of Salt Lake City, Utah. With 66 trails, 1,200 acres and 2,047 feet vertical, Solitude is one of the smaller ski resorts near Salt Lake City, along with its neighbor Brighton.",
	},
	{
		state: "UT",
		resortName: "Brighton",
		lat: "40.5980",
		long: "111.5832",
		number: 8015324731,
		address: "8302 S Brighton Loop Rd, Brighton, UT 84121",
		description:
			"Brighton is Utah's only resort that can boast that 100% of its terrain is accessible by high speed quads, allowing guests to experience all of its incredible Utah skiing.",
	},
	{
		state: "UT",
		resortName: "Deer Valley Resort",
		lat: "40.6226",
		long: "111.4851",
		number: 43564910001,
		address: "2250 Deer Valley Dr S, Park City, UT 84060",
		description:
			"Spread over six mountains and featuring up to 3,000 vertical feet of elevation change, Deer Valley Resort offers nearly 70 miles of mountain bike trails, including four flow trails designed by Gravity Logic.",
	},
	{
		state: "UT",
		resortName: "Alta Ski Area",
		lat: "40.5777",
		long: "111.6240",
		number: 8013591078,
		address: "Alta, UT 84092",
		description:
			"Alta is a ski area in the western United States, located in the town of Alta in the Wasatch Mountains of Utah, in Salt Lake County.",
	},
	{
		state: "UT",
		resortName: "Snowbasin",
		lat: "41.2006",
		long: "111.8614",
		number: 8016201000,
		address: "925 East Snowbasin Road Huntsville, UT 84317",
		description:
			"Snowbasin Resort is a ski resort in the western United States, located in Weber County, Utah, 33 miles northeast of Salt Lake City, on the back side of the Wasatch Range.",
	},
	{
		state: "WY",
		resortName: "Jackson Hole",
		lat: "43.582767",
		long: "-110.821999",
		number: 3077332292,
		address: "Teton Village, WY 83025",
		description:
			"Jackson Hole Mountain Resort is a ski resort in the western United States, at Teton Village, Wyoming. In the Teton Range of the Rocky Mountains, it is located in Teton County, twelve miles northwest of Jackson and due south of Grand Teton National Park.",
	},
	{
		state: "WY",
		resortName: "Snow King",
		lat: "43.472",
		long: " 110.761",
		number: 3072015465,
		address: " 402 E Snow King Ave, Jackson, WY 83001",
		description:
			"Snow King Mountain is a summer and winter resort in the western United States, in Jackson, Wyoming. The mountain is Jackson's original 1936 ski hill, located on the southeast edge of the city, and was the first ski area in Wyoming.",
	},
	{
		state: "AK",
		resortName: "Mt Eyak Ski Area",
		lat: "60.5500",
		long: "145.7500",
		number: 9074247766,
		address: "Ski Hill Rd, Cordova, AK 99574",
		description:
			"Mount Eyak is a ski area located in Cordova, Alaska. It is operated by the Sheridan Ski Club.",
	},
	{
		state: "AK",
		resortName: "Eaglecrest Ski Area",
		lat: "58.2745312",
		long: "-134.5128165",
		number: 9077902000,
		address: "3000 Fish Creek Rd, Juneau, AK 99801",
		description:
			"Eaglecrest Ski Area is a public ski area on Douglas Island in the U.S. state of Alaska, across Gastineau Channel from Juneau. The area is owned and operated by Juneau's municipal government.",
	},
	{
		state: "AK",
		resortName: "Alyeska Resort",
		lat: "60.976086",
		long: "-149.123871",
		number: 18008803880,
		address: "1000 Arlberg Ave, Girdwood, AK 99587",
		description: `Alyeska Resort is Alaskas premier year-round destination featuring over 300-rooms, many fine dining experiences, a saltwater pool, ski mountain and bike park along with the new Nordic Spa. Whether summer or winter, Alyeska is the perfect base camp for endless adventure and relaxation.`,
	},
	{
		state: "CA",
		resortName: "Palisades Tahoe",
		lat: "39.19",
		long: "120.25",
		number: 5304524331,
		address: "1960 Squaw Valley Road, Olympic Valley, CA 96146",
		description:
			"Palisades Tahoe is a ski resort in the western United States, located in Olympic Valley, California, northwest of Tahoe City in the Sierra Nevada range. From its founding in 1949, the resort was known as Squaw Valley, but it changed its name in 2021 due to the derogatory connotations of the word squaw.",
	},
	{
		state: "CA",
		resortName: "Mammoth Mountain",
		lat: "37.630626492",
		long: "119.032625631",
		number: 8006266684,
		address: "Mammoth Lakes, CA 93546",
		description:
			"Mammoth Mountain is a lava dome complex partially located within the town of Mammoth Lakes, California, in the Inyo National Forest of Madera and Mono Counties. It is home to a large ski area primarily on the Mono County side.",
	},
	{
		state: "CA",
		resortName: "June Mountain",
		lat: "37.739932",
		long: "-119.0701438",
		number: 8885863686,
		address: "June Lake, CA 93529",
		description:
			"June Mountain ski area is a winter resort in the eastern Sierra Nevada of California, located near June Lake, southeast of Yosemite National Park.",
	},
	{
		state: "CA",
		resortName: "Big Bear Mountain Resort",
		lat: "34.24",
		long: "-116.89",
		number: 8444622327,
		address: "880 Summit Blvd Suite A, Big Bear Lake, CA 92315",
		description:
			"Bear Mountain, formerly Goldmine Mountain, is a ski area established in 1969, in the San Bernardino National Forest in Southern California United States. It is located by Big Bear Lake, two miles apart from its sister mountain, Snow Summit.",
	},
	{
		state: "CA",
		resortName: "Snow Valley",
		lat: "34.2249",
		long: "117.0361",
		number: 8444622327,
		address: "Running Springs, CA 92382",
		description:
			"Snow Valley Mountain Resort is a ski resort located in Running Springs, California, United States. It is the oldest continually operating ski resort in Southern California and is also one of four ski resorts in the San Bernardino National Forest.",
	},
	{
		state: "CA",
		resortName: "Heavenly",
		lat: "38.9349",
		long: "119.9403",
		number: 7755867000,
		address: "3860 Saddle Rd, South Lake Tahoe, CA 96150",
		description:
			"Heavenly Mountain Resort is a ski resort located on the California–Nevada border in South Lake Tahoe in the Sierra Nevada Mountain Range.",
	},
	{
		state: "CA",
		resortName: "Northstar",
		lat: "39.2647",
		long: "120.1332",
		number: 8004666784,
		address: "5001 Northstar Dr, Truckee, CA 96161",
		description:
			"Providing scenic mountain views and surrounded by lush evergreens, this laid-back ski resort hotel is 7 miles from Historic Downtown Truckee and 9 miles from Mount Pluto.",
	},
	{
		state: "VT",
		resortName: "Killington Resort",
		lat: "43.6094",
		long: "72.7968",
		number: 8006216867,
		address: "Killington, VT",
		description:
			"Killington Mountain Resort & Ski Area is a ski resort in Rutland County, Vermont, United States, near the town of Killington. It is the largest ski area in the eastern U.S., and has the largest vertical drop in New England at 3,050 feet.",
	},
	{
		state: "VT",
		resortName: "Okemo Mountain Resort",
		lat: "43.4104",
		long: "72.7290",
		number: 8022281600,
		address: "Ludlow, VT 05149",
		description:
			"Okemo is the Northeasts premier family mountain resort. Nestled in the rolling Green Mountains of Southern Vermont, Okemo is the most convenient and comfortable destination to experience Vermonts great outdoors year round.",
	},
	{
		state: "VT",
		resortName: "Sugarbush Resort",
		lat: "44.1362",
		long: "72.9079",
		number: 8025836300,
		address: "Warren, VT 05674",
		description:
			"Sugarbush Resort is a ski resort located in the Mad River valley in Warren, Vermont, owned by Alterra Mountain Company. It is one of the largest ski resorts in New England. The resort encompasses more than 4000 acres total, 484 trail acres skiable, 53 miles of trails, and 16 ski lifts.",
	},
	{
		state: "VT",
		resortName: "Stratton",
		lat: "43.0429",
		long: "72.9109",
		number: 8022974000,
		address: "Stratton Mountain, VT 05155",
		description:
			"Stratton Mountain Resort is a ski area in the northeastern United States, located on Stratton Mountain in Stratton, Vermont, east of Manchester.",
	},
	{
		state: "VT",
		resortName: "Stowe",
		lat: "44.5288",
		long: "72.7742",
		number: 8022533000,
		address: "5781 Mountain Rd, Stowe, VT 05672",
		description:
			"The lift-served vertical drop of Mount Mansfield is 2,360 feet, the fifth largest in New England and the fourth largest in Vermont.",
	},
	{
		state: "VT",
		resortName: "Mount Snow",
		lat: "42.959",
		long: "72.922",
		number: 8002457669,
		address: "39 Mount Snow Road, West Dover, VT 05356",
		description:
			"Mount Snow is a year round Vermont mountain resort offering Northeast skiers and snowboarders access to top terrain for beginners to experts.",
	},
	{
		state: "ID",
		resortName: "Schweitzer",
		lat: "48.37",
		long: "-116.62",
		number: 2082639555,
		address: "Sandpoint, ID 83864",
		description:
			"Schweitzer is a ski resort in the northwest United States in northern Idaho, 11 miles (18 km) northwest of Sandpoint. Located in Bonner County in the Selkirk Mountains, it overlooks Lake Pend Oreille to the southeast with views of the Bitterroot and Cabinet mountain ranges.",
	},
	{
		state: "ID",
		resortName: "Sun Valley",
		lat: "43.69",
		long: "-114.36",
		number: 2082973825,
		address: "Sun Valley, ID 83353",
		description:
			"Sun Valley is a resort town in Idaho. It's known for Sun Valley resort's ski areas at Bald Mountain and nearby Dollar Mountain, the latter with gentler slopes.",
	},
	{
		state: "WV",
		resortName: "Snowshoe",
		lat: "38.4132",
		long: "79.9975",
		number: 8774414386,
		address: "Snowshoe, WV 26209",
		description:
			"Snowshoe Mountain is a ski resort in the eastern United States, located in Snowshoe, West Virginia. The resort has skiable terrain across 244 acres and covers a total area of 11,000 acres in the Allegheny Mountains, which are a part of the vast Appalachian Mountain Range.",
	},
	{
		state: "WA",
		resortName: "Crystal Mountain",
		lat: "46.9282",
		long: "121.5045",
		number: 8332797895,
		address: "33914 Crystal Mountain Blvd Crystal Mountain, WA 98022",
		description:
			"Crystal Mountain is a mountain and alpine ski area in eastern Pierce County, Washington, United States, located in the Cascade Range southeast of Seattle. It is the largest ski resort in the state of Washington and lies within the Mount Baker Snoqualmie National Forest.",
	},
	{
		state: "WA",
		resortName: "White Pass Ski Area",
		lat: "46.638",
		long: "121.391",
		number: 5096723101,
		address: "48935 US-12, Naches, WA 98937",
		description:
			"The White Pass Ski Area is a ski area in the Pacific Northwest of the United States, in the Cascade Range at White Pass in the state of Washington. It is located 53 miles west of Yakima on U.S. Route 12, and 53 miles east of Morton.",
	},
	{
		state: "WA",
		resortName: "The Summit at Snoqualmie",
		lat: "47.4246",
		long: "121.4164",
		number: 4254347669,
		address: "1001 WA-906, Snoqualmie Pass, WA 98068",
		description:
			"The Summit at Snoqualmie is a recreation area in the northwest United States, located on Snoqualmie Pass, Washington. It provides alpine skiing and snowboarding, Nordic skiing, mountain biking, winter tubing, and scenic lift rides.",
	},
	{
		state: "WA",
		resortName: "SkiBig3",
		lat: "51.1784",
		long: "115.5708",
		number: 8447542443,
		address: "215 Banff Ave #207, Banff, AB T1L 1H9, Canada",
		description:
			"Discover the best of 3 unique ski resorts in Banff National Park: Banff Sunshine, Lake Louise Ski Resort and Mt Norquay.",
	},
	{
		state: "WA",
		resortName: "Stevens Pass",
		lat: "47.7447",
		long: "121.0894",
		number: 2068124510,
		address: "U.S. Rte 2, Skykomish, WA 98288",
		description:
			"Stevens Pass is located at the crest of Stevens Pass at a base elevation of 4,061 feet above sea level and peak elevation at 5,845 feet. The Mill Valley backside of the resort drops to a minimum elevation of 3,821 feet.",
	},
	{
		state: "OR",
		resortName: "Timberline Lodge and Ski",
		lat: "45.3311",
		long: "121.7110",
		number: 5032723311,
		address: "27500 E Timberline Road, Government Camp, OR 97028",
		description:
			"Dating from the 1930s, this mountainside ski resort in the Mt. Hood National Forest served as a location in Stanley Kubrick's The Shining. It's 6 miles from Mt. Hood Cultural Center and Museum, and 7 miles from Malibu Raceway.",
	},
	{
		state: "OR",
		resortName: "Warner Canyon Ski Area",
		lat: "42.2374",
		long: "120.2946",
		number: 5419475001,
		address: "1301 S G St, Lakeview, OR 97630",
		description:
			"Warner Canyon is a small ski area in the U.S. state of Oregon. It is located in the Warner Mountains of south-central Oregon. Operating since 1938, the ski area was once within the Fremont National Forest, but the land is now owned by Lake County; a land swap was completed between the USFS and Lake County in 1998.",
	},
	{
		state: "OR",
		resortName: "MT. Bachelor",
		lat: "43.98",
		long: "121.69",
		number: 5413821709,
		address: "13000 SW Century Drive, Bend, OR 97702",
		description:
			"Mount Bachelor ski resort is a ski resort located in Central Oregon, approximately 22 miles west of Bend, along Century Drive Highway. The ski area is on the northern side of Mount Bachelor, a stratovolcano rising atop a volcanic shield in the Cascade Range.",
	},
	{
		state: "MT",
		resortName: "Big Sky Resort",
		lat: "45.2778",
		long: "111.4103",
		number: 8005484486,
		address: "50 Big Sky Resort Rd, Big Sky, MT 59716",
		description:
			"Big Sky is a community in the Rocky Mountains of southern Montana. Its known for the ski and downhill mountain-bike trails of Big Sky Resort. Southeast of town is Yellowstone National Park, with its wildlife, hot springs and gushing geysers.",
	},
	{
		state: "MT",
		resortName: "Bridger Bowl Ski Area",
		lat: "46.8552",
		long: "45.2376",
		number: 4065872111,
		address: "15795 Bridger Canyon Rd, Bozeman, MT 59715",
		description:
			"Bridger Bowl is an alpine ski area in the western United States, near Bozeman, Montana. It serves the local population of Gallatin County, including Montana State University. The summit elevation is 8,700 feet above sea level, with a vertical drop of 2,600 feet on east-facing slopes.",
	},
	{
		state: "NY",
		resortName: "Windham Mountain",
		lat: "42.2937",
		long: "74.2567",
		number: 5187344300,
		address: "Windham, NY 12496",
		description:
			"Windham Mountain Club is an exclusive outdoor community located in the Catskill Mountains of New York. A wonderland for the discerning set, find world-class skiing, dining, outdoor pursuits, and memory-making for generations to come.",
	},
	{
		state: "ME",
		resortName: "Sugarloaf",
		lat: "45.0541",
		long: "70.3085",
		number: 2072372000,
		address: "5092 Access Road Carrabassett Valley, ME 04947",
		description:
			"Sugarloaf is a year-round resort in Carrabassett Valley, Maine with 1240 skiable acres of skiing in the winter and golfing, biking & more in the summer.",
	},
	{
		state: "ME",
		resortName: "Sunday River",
		lat: "44.4734",
		long: "70.8569",
		number: 8005432754,
		address: "15 S Ridge Rd, Newry, ME 04261",
		description:
			"Sunday River Resort is one of Maine's largest and most visited ski resorts. Its vertical drop of 2,340 feet is the second largest in Maine and the sixth largest in New England.",
	},
	{
		state: "NM",
		resortName: "Taos Ski Valley",
		lat: "36.5960",
		long: "105.4545",
		number: 8882628398,
		address: "116 Sutton Pl, Taos Ski Valley, NM 87525",
		description:
			"Taos Ski Valley is a village and alpine ski resort in the southwestern United States, located in Taos County, New Mexico.",
	},
	{
		state: "PA",
		resortName: "Camelback Resort",
		lat: "41.0492",
		long: "75.3512",
		number: 5706291661,
		address: "Tannersville, PA 18372",
		description:
			"Camelback Resort is a 4 seasons resort located in Tannersville, Pennsylvania in the Pocono Mountains.",
	},
	{
		state: "PA",
		resortName: "Blue Mountain Resort",
		lat: "40.8107",
		long: "75.5209",
		number: 6108267700,
		address: "1660 Blue Mountain Dr, Palmerton, PA 18071",
		description:
			"The resort has a total of 40 slopes. Blue Mountain has glade trails, beginner through expert, various terrain park installations, and training slopes. Blue Mountain uses RFID ticket scanners at every lift. The mountain offers 46 snow tubing trails, each over 1,000 feet (300 m) long.",
	},
	{
		state: "MI",
		resortName: "The Highlands",
		lat: "42.6380",
		long: "83.6176",
		number: 8556887022,
		address: "600 Highland Pike Rd, Harbor Springs, MI 49740",
		description:
			"Surrounded by a forest, this upscale sports-oriented mountain resort is 4 miles from Little Traverse Bay on Lake Michigan, and 12 miles from Odawa Casino Resort.",
	},
	{
		state: "MI",
		resortName: "Mt Brighton",
		lat: "42.5408",
		long: "83.8115",
		number: 8102299581,
		address: "4141 Bauer Rd, Brighton, MI 48116",
		description:
			"Mt. Brighton is a ski and snowboard area in Brighton, Michigan, that opened in 1961. Mt. Brighton's slopes are man-made and reach a maximum height of 230 vertical feet.",
	},
	{
		state: "NH",
		resortName: "Loon Mountain",
		lat: "44.0563",
		long: "71.6336",
		number: 8002295666,
		address: "60 Loon Mountain Rd, Lincoln, NH 03251",
		description:
			"Loon Mountain is a mountain in Lincoln and Livermore, New Hampshire, in Grafton County. It is in the White Mountain National Forest.",
	},
	{
		state: "NH",
		resortName: "Mount Sunapee",
		lat: "43.3314",
		long: "72.0805",
		number: 6037633500,
		address: "1398 New Hampshire Rte 103, Newbury, NH 03255",
		description:
			"Mount Sunapee Resort has three lodges, the Spruce Lodge, the Base Lodge and the Summit Lodge, 66 trails[8] spread over 230 acres (93 ha) of skiable terrain.",
	},
	{
		state: "NH",
		resortName: "Attitash Mountain Resort",
		lat: "44.0828",
		long: "71.2294",
		number: 6033742600,
		address: "775 US-302, Bartlett, NH 03812",
		description:
			"Located in the heart of the White Mountains, Attitash is home to two mountains, Attitash and Bear Peak. Attitash/Bear Peak has a total of 68 ski runs. It is a resort that appeals to all skill levels.",
	},
	{
		state: "NH",
		resortName: "Wildcat Mountain",
		lat: "44.2641",
		long: "71.2393",
		number: 6034663326,
		address: "542 NH-16, Gorham, NH 03581",
		description:
			"Wildcat is one of the best-known alpine skiing resorts in New England, with lifts from the base on NH Rt. 16 in Pinkham Notch 2,112 feet (644 m) up to the summit ridge. The area has 49 trails on 225 acres (91 ha), including the 2.75-mile (4.43 km) Polecat Trail — the longest ski trail in New Hampshire.",
	},
	{
		state: "NH",
		resortName: "Crotched Mountain",
		lat: "43.0120",
		long: "71.8789",
		number: 6035883668,
		address: "615 Francestown Rd, Bennington, NH 03442",
		description:
			"Crotched Mountain Ski & Ride is a medium-sized ski area located on Crotched Mountain in Bennington and Francestown, New Hampshire.",
	},
	{
		state: "NY",
		resortName: "Hunter Mountain",
		lat: "42.2029",
		long: "74.2246",
		number: 5182634223,
		address: "64 Klein Ave, Hunter, NY 12442",
		description:
			"Hunter Mountain is a ski resort located in Greene County, New York about three hours northwest of New York City in the town of Hunter, New York. It features a 1,600-foot vertical drop.",
	},
	{
		state: "PA",
		resortName: "Liberty Mountain Resort",
		lat: "39.7637",
		long: "77.3755",
		number: 7176428282,
		address: "78 Country Club Trail, Fairfield, PA 17320",
		description:
			"On 275 acres with mountain views, this relaxed resort is 6 miles from the Strawberry Hill Nature Preserve and 10 miles from historic town of Gettysburg.",
	},
	{
		state: "PA",
		resortName: "Roundtop Mountain Resort",
		lat: "40.1067599",
		long: "-76.9263634",
		number: 7174329631,
		address: "925 Roundtop Rd, Lewisberry, PA 17339",
		description:
			"Year-round outdoor activities to include skiing & snowboarding, snow tubing, paintball, climbing, team-building, kids summer camps, and zip line tours.",
	},
	{
		state: "PA",
		resortName: "Whitetail Resort",
		lat: "39.74167",
		long: "77.93278",
		number: 7173289400,
		address: "13805 Blairs Valley Rd, Mercersburg, PA 17236",
		description:
			"Whitetail Mountain Resort is a four-season resort located on Two Top Mountain, a mountain in the Bear Pond Mountains of Pennsylvania.",
	},
	{
		state: "PA",
		resortName: "Jack Frost/Big Boulder",
		lat: "41.1078627",
		long: "-75.6532455",
		number: 5704438425,
		address: "434 Jack Frost Mountain Rd, White Haven, PA 18661",
		description:
			"Jack Frost–Big Boulder are two separate ski areas operated as one resort. It is located in Kidder Township, Carbon County, near White Haven, Pennsylvania, part of the Pocono Mountains region.",
	},
	{
		state: "PA",
		resortName: "Seven Springs",
		lat: "40.02313",
		long: "-79.29726",
		number: 8143527777,
		address: "777 Water Wheel Dr, Seven Springs, PA 15622",
		description:
			"Seven Springs Mountain Resort is an all-season resort located in the borough of Seven Springs, Pennsylvania. It has a relatively high elevation for a Pennsylvania ski area, at 3,001 feet above sea level.",
	},
	{
		state: "PA",
		resortName: "Laurel Mountain",
		lat: "40.1639",
		long: "79.1654",
		number: 7242382792,
		address: "374 Summit Ski Rd, Boswell, PA 15531",
		description:
			"This resort is the primary attraction of Laurel Mountain State Park. Once known as the Ski Capital of Pennsylvania, Laurel Mountain has several distinctive features, along with a storied history.",
	},
	{
		state: "PA",
		resortName: "Hidden Valley",
		lat: "40.1068",
		long: "75.3780",
		number: 8144438000,
		address: "King of Prussia, PA 19406",
		description:
			"Hidden Valley Resort, located in Hidden Valley, PA, is the ideal winter destination for families. With 26 slopes and trails and two terrain parks on 110 skiable acres and a first-class snowsports school, Hidden Valley offers a comfortable environment to learn to ski or snowboard.",
	},
	{
		state: "MN",
		resortName: "Afton Alps",
		lat: "44.8577",
		long: "92.7878",
		number: 6514365245,
		address: "6600 Peller Ave S, Hastings, MN 55033",
		description:
			"Afton Alps is a ski area, which hosts a collection of ski and snowboard trails, located along the St. Croix River in the northeast corner of Denmark Township, Washington County, south of Afton, Minnesota.",
	},
	{
		state: "WI",
		resortName: "Wilmot",
		lat: "42.4990",
		long: "88.1877",
		number: 2628622301,
		address: "11931 Fox River Rd, Wilmot, WI 53192",
		description:
			"Located right in America's heartland, Wilmot Mountain is the Midwest's center of all things winter.",
	},
	{
		state: "OH",
		resortName: "Alpine Valley",
		lat: "42.7377",
		long: "-88.4337",
		number: 4402852211,
		address: "10620 Mayfield Rd, Chesterland, OH 44026",
		description:
			"Alpine Valley offers a variety of 9 trails for skiers and snowboarders. The resort has over 70 instructors for its ski school which is registered with the Professional Ski Instructors of America (PSIA). Trail levels range from a beginner's bunny hill, to the expert terrain park which boasts Ohio's largest half pipe. It also offers one of the highest vertical drops of the ski resorts in Ohio.",
	},
	{
		state: "OH",
		resortName: "Boston Mills",
		lat: "41.2648239",
		long: "-81.564270",
		number: 8008754241,
		address: "7100 Riverview Rd, Peninsula, OH 44264",
		description:
			"Between both resorts (only a few miles apart, with each visible from the other's peak), there are 18 trails of various skill levels.",
	},
	{
		state: "OH",
		resortName: "Mad River Mountain",
		lat: "40.3181",
		long: "83.6778",
		number: 9375991015,
		address: "1000 Snow Valley Rd, Zanesfield, OH 43360",
		description:
			"The elevation of Mad River Mountain is 1,460 feet with a vertical drop of 300 ft, and it has a ski season that runs from approximately mid-December through mid-March.",
	},
	{
		state: "MO",
		resortName: "Snow Creek",
		lat: "39.4673",
		long: "94.9707",
		number: 8166402200,
		address: "1 Snow Creek Dr, Weston, MO 64098",
		description:
			"Snow Creek is a ski resort on the bluffs above the Missouri River in Marshall Township, Platte County, northwest of Kansas City, Missouri, near the village of Iatan.",
	},
	{
		state: "MO",
		resortName: "Hidden Valley Wildwood",
		lat: "38.5353",
		long: "90.6507",
		number: 6369385373,
		address: "17409 Hidden Valley Dr, Eureka, MO 63025",
		description:
			"The ski area consists of 17 trails on 65 acres of two different peaks to form a 320 ft vertical drop. All of these trails feature Snowmaking, with a capacity of 6600 gallons of water per minute. The trails are served by 9 lifts, 5 of which are chairlifts, the remaining 4 being surface lifts.",
	},
	{
		state: "IN",
		resortName: "Paoli Peaks",
		lat: "38.5556",
		long: "86.5122",
		number: 8127234696,
		address: "2798 W County Rd 25 S, Paoli, IN 47454",
		description:
			"Paoli Peaks is an alpine ski resort located in Paoli Township, Orange County, near Paoli, Indiana. Paoli Peaks is for skiers, snowboarders, snowbladers, and tubers. Paoli Peaks is built on a natural hill at a 900 ft. elevation with a vertical drop of 300 ft.",
	},
];

const seedResortInfo = () => ResortInfo.bulkCreate(resortInfo);

module.exports = seedResortInfo;
