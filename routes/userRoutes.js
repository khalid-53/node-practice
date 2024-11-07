const express = require("express");
// const userController = require('../controllers/newUserControllers');
// const userController = require('./../controllers/userController');
// const authController = require('./../controllers/authController');
const userController = require("../controllers/newUserControllers");
const router = express.Router();
router.post("/addUser", userController.addNewUser);

module.exports = router;
