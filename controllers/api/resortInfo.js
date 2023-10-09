const router = require("express").Router();
const { ResortInfo } = require("../../models");

router.get("/resorts", async (req, res) => {
	try {
		const resortData = await ResortInfo.findAll();
		res.status(200).json(resortData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/resorts/:id", async (req, res) => {
	try {
		const resortData = await ResortInfo.findByPk(req.params.id);
		res.status(200).json(resortData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
