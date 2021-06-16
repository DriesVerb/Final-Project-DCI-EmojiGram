const express = require(`express`);
const router = express.Router();
const logInController = require("../controllers/logInController");

const auth = require("../middleware/auth");
router.get("/", auth, logInController.logIn);

router.post("/", logInController.logInPost);

router.get("/test", auth, (req, res) => {
  res.json({ msg: "you can read this" });
});

module.exports = router;
