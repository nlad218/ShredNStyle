const router = require("express").Router();
const { Pass } = require("../../models");

// Get all passes
router.get("/", async (req, res) => {
  try {
    const passData = await Pass.findAll();
    res.status(200).json(passData);
  } catch (error) {
    console.error("-----------------------");
    console.error(error);
    console.error("-----------------------");
    res.status(500).json(error);
  }
});

// Get pass by ID
router.get("/:id", async (req, res) => {
  try {
    const passData = await Pass.findByPk(req.params.id);

    if (!passData) {
      res.status(404).json({ message: "Pass not found" });
      return;
    }

    res.status(200).json(passData);
  } catch (error) {
    console.error("-----------------------");
    console.error(error);
    console.error("-----------------------");
    res.status(500).json(error);
  }
});

module.exports = router;
