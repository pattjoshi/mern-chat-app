const { register } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;
