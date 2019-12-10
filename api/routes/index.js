var express = require("express");
var router = express.Router();
const user = require("../api/user");

router.post("/form", user.getApi);

module.exports = router;
