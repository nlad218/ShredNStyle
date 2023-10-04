const { Passes } = require("../models");

const passData = [
  {
    name: "Ikon Pass",
    price: 1300.59,
    image: "https://i.ytimg.com/vi/fjkfDw7S23M/maxresdefault.jpg",
  },
  {
    name: "Ikon Base Pass",
    price: 1000.0,
    image: "https://snowbrains.com/wp-content/uploads/2018/11/Snowbrains-IKON-map-min.jpg",
  },
  {
    name: "Ikon 4 Day Pass",
    price: 500.0,
    image: "https://dancedric.com/wp-content/uploads/2021/08/ikonPass_BlueMountain.jpg",
  },
  {
    name: "Epic Pass",
    price: 949.99,
    image: "https://scene7.vailresorts.com/is/image/vailresorts/194551-22-EPAS-Digital_NewPassMediaCards_ALL_EmilyLopez_EpicMilitaryPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
  },
  {
    name: "Epic Local Pass",
    price: 705.0,
    image: "https://scene7.vailresorts.com/is/image/vailresorts/Product_EpicLocalPass?fmt=png-alpha&resMode=sharp2&wid=412&fit=constrain,1&dpr=on,2.625",
  },
  {
    name: "Epic 4 Day Pass",
    price: 391.0,
    image: "https://scene7.vailresorts.com/is/image/vailresorts/20230221_EPAS_Digital_EDPMediaCard_Web_TransparentBackground_640x1015?fmt=png-alpha&wid=374&resMode=sharp2&w=374&h=593&fit=constrain,1&dpr=on,2.625",
  },
  {
    name: "The Ken Pass",
    price: 5001.99,
    image: "https://media.istockphoto.com/id/1198840013/vector/ski-pass-icon-simple-design.jpg?s=612x612&w=0&k=20&c=371VKcVIH3RgKKg2X3--yiptVYYsfvBE3Y7jRNqmUaM=",
  },
];

const seedPasses = () => Passes.bulkCreate(passData);

module.exports = seedPasses;
