const express = require(`express`);
const router = express.Router();
const logInController = require("../controllers/logInController");

const auth = require ('../middleware/auth')
router.get('/', auth,  logInController.logIn);

router.post('/', logInController.logInPost);

module.exports = router;