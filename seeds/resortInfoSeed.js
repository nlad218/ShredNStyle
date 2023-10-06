const { ResortInfo } = require("../models");

const resortInfo = [
  {
    state: "CO",
    resortName: "Loveland",
    long: "-105.07498",
    lat: "40.397761",
    number: 8007363754,
    address: "I-70, Dillon, CO 80435",
    description:
      "Loveland Ski Area is a ski area in the western United States, located near the town of Georgetown, Colorado. Located at the eastern portal of the Eisenhower Tunnel, Loveland is within the Arapahoe National Forest.",
  },
  {
    state: "CO",
    resortName: "Breckenridge",
    long: "-106.046181",
    lat: "39.482231",
    number: 9704535000,
    address: "Breckenridge, CO 80424",
    description:
      "Breckenridge Ski Resort is an alpine ski resort in the western United States, in Breckenridge, Colorado. Recognized for acres of skiable terrain across five mountain peaks, it welcomes thousands of skiers and snowboarders each season.",
  },
  {
    state: "CO",
    resortName: "Steamboat Springs",
    long: "-106.842384",
    lat: "40.490429",
    number: 8009222722,
    address: "Steamboat Springs, CO 80487",
    description:
      "Steamboat Resort is a major ski area in the western United States, located in northwestern Colorado at Steamboat Springs. Operated by the Steamboat Ski & Resort Corporation, it is located on Mount Werner, a mountain in the Park Range in the Routt National Forest",
  },
  {
    state: "CO",
    resortName: "Winter Park",
    long: "-105.762548",
    lat: "39.886848",
    number: 9707265514,
    address: "85 Parsenn Rd, Winter Park, CO 80482",
    description: `Winter Park is the closest major mountain destination to Denver at just 67 miles away. Dont be fooled by our convenient location, though… you’ll feel remotely tucked away in our high country corner of the Rockies. With easy access to 765,000 acres of public land, Winter Park is home to endless adventures and an unparalleled and unfiltered Colorado experience`,
  },
  {
    state: "CO",
    resortName: "Silverton",
    long: "-107.668343",
    lat: "37.811268",
    number: 9703875706,
    address: "6226 State Hwy 110, Silverton, CO 81433",
    description: `Silverton Mountain is a ski area near Silverton, Colorado, United States that opened on January 19, 2002. Popular with skiers and snowboarders, Silverton Mountain has one chairlift that carries visitors into its terrain, which is for advanced and expert skiers or riders.`,
  },
  {
    state: "CO",
    resortName: "Beaver Creek",
    long: "-106.512329",
    lat: "39.604328",
    number: 9707544636,
    address: "Beaver Creek, CO 81620",
    description: "The best resort ever. In the history of man.",
  },
  {
    state: "UT",
    resortName: "Park City",
    long: "-111.497971",
    lat: "40.646061",
    number: 4356498111,
    address: " Park City, UT",
    description:
      "Park City Mountain Resort is a ski resort in the western United States in Park City, Utah, located 32 miles east of Salt Lake City. Park City, as the ski resort and area is known, contains several training courses for the U.S. Ski Team, including slalom and giant slalom runs",
  },
  {
    state: "UT",
    resortName: "Snowbird",
    long: "111.6556",
    lat: "40.5829",
    number: 8019332222,
    address: "9385 Snowbird Center Trail, Snowbird, UT 84092",
    description: `Averaging more than 500 inches of annual snowfall per year, Snowbird is North America’s most accessible alpine resort destination, located just 29 miles from Salt Lake City International Airport. Featuring the new state-of-the-art Aerial Tram with access to 2,500 acres of legendary terrain, Snowbird provides year-round big mountain experiences at the top of Utah.`,
  },
  {
    state: "WY",
    resortName: "Jackson Hole",
    long: "-110.821999",
    lat: "43.582767",
    number: 3077332292,
    address: "Teton Village, WY 83025",
    description:
      "Jackson Hole Mountain Resort is a ski resort in the western United States, at Teton Village, Wyoming. In the Teton Range of the Rocky Mountains, it is located in Teton County, twelve miles northwest of Jackson and due south of Grand Teton National Park.",
  },
  {
    state: "WY",
    resortName: "Snow King",
    long: " 110.761",
    lat: "43.472",
    number: 3072015465,
    address: " 402 E Snow King Ave, Jackson, WY 83001",
    description:
      "Snow King Mountain is a summer and winter resort in the western United States, in Jackson, Wyoming. The mountain is Jackson's original 1936 ski hill, located on the southeast edge of the city, and was the first ski area in Wyoming.",
  },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
  //   {
  //     state: "",
  //     resortName: "",
  //     long: "",
  //     lat: "",
  //   },
];

const seedResortInfo = () => ResortInfo.bulkCreate(resortInfo);

module.exports = seedResortInfo;
