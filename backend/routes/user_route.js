const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");

router.get("/", userController.getUsers);
router.post("/", userController.addUser);

module.exports = router;