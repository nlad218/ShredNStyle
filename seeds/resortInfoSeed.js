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
    state: "",
    resortName: "White Pass Ski Area",
    lat: "46.638",
    long: "121.391",
    number: 5096723101,
    address: "48935 US-12, Naches, WA 98937",
    description:
      "The White Pass Ski Area is a ski area in the Pacific Northwest of the United States, in the Cascade Range at White Pass in the state of Washington. It is located 53 miles west of Yakima on U.S. Route 12, and 53 miles east of Morton",
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
];

const seedResortInfo = () => ResortInfo.bulkCreate(resortInfo);

module.exports = seedResortInfo;
