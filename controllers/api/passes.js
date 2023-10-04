const router = require("express").Router();
const { Passes } = require("../../models");

// Get all passes
router.get("/", async (req, res) => {
  try {
    const passData = await Passes.findAll();
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

// Update a pass by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPass = await Passes.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedPass[0] === 0) {
      res.status(404).json({ message: "Pass not found" });
      return;
    }

    // Pass updated successfully.
    res.status(200).json({ message: "Pass updated successfully" });
  } catch (error) {
    console.error("-----------------------");
    console.error(error);
    console.error("-----------------------");
    res.status(500).json(error);
  }
});

// Delete a pass by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPass = await Passes.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPass) {
      res.status(404).json({ message: "Pass not found" });
      return;
    }

    // Pass deleted successfully.
    res.status(200).json({ message: "Pass deleted successfully" });
  } catch (error) {
    console.error("-----------------------");
    console.error(error);
    console.error("-----------------------");
    res.status(500).json(error);
  }
});

module.exports = router;
