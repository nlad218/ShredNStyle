const router = require("express").Router();
const { ResortInfo } = require("../../models");

router.get("/resortInfo", async (req, res) => {
  try {
    const resortData = await ResortInfo.findAll();
    res.status(200).json(resortData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
