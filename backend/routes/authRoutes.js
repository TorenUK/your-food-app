const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/user/create", authController.user_create);
router.post("/user/login", authController.user_login);

module.exports = router;
