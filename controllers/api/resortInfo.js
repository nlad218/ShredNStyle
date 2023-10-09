const router = require("express").Router();
const { ResortInfo } = require("../../models");

router.get("/", async (req, res) => {
	const resort = req.query.resort;

	if (!resort) {
		return res.status(400).json({ error: "resort parameter is missing" });
	}

	try {
		const resortData = await ResortInfo.findOne({
			where: { resortName: resort },
		});

		if (!resortData) {
			return res.status(404).json({ error: "Resort not found" });
		}

		res.status(200).json(resortData); // Send resortData as JSON in the response
	} catch (error) {
		console.error("Error querying the database:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
});

router.get("/:resort", async (req, res) => {
	try {
		const resortData = await ResortInfo.findByPk(req.params.resort);
		res.status(200).json(resortData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
