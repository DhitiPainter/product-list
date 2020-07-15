var express = require("express");
var router = express.Router();

require("./products")(router);

module.exports = router;
