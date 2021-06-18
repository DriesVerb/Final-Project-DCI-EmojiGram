const express = require(`express`);
const router = express.Router();

const User = require("../models/User");

// controller
const userController = require("../controllers/userController");

// own middleware
const auth = require("../middleware/auth");

// routes
router.get("/normal", userController.test);
router.get("/private", auth, userController.testPrivate);
router.post("/create", userController.create);

router.put("/editProfile/:user_id", userController.editProfile)
module.exports = router;
