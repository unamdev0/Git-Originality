var express = require("express");
var router = express.Router();
const user = require("../api/user");

router.post("/form", user.rec);

router.get("/form", user.sen);

module.exports = router;
