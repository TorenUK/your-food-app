const express = require("express");
const router = express.Router();

const starterController = require("../controllers/starterController");
const mainController = require("../controllers/mainController");
const dessertController = require("../controllers/dessertController");
const extraController = require("../controllers/extraController");

router.get("/items/starters", starterController.starters_all);
router.get("/items/mains", mainController.mains_all);
router.get("items/desserts", dessertController.desserts_all);
router.get("items/extras", extraController.extras_all);

module.exports = router;
