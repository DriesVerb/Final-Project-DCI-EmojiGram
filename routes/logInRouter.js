const express = require(`express`);
const router = express.Router();
const logInController = require("../controllers/signUpController");

router.get("/", logInController.logIn);
router.post("/", logInController.logInPost);

module.exports = router;
