var express = require ("express");
var router = express.Router();
var index = require("../html/index.html");
// var burger = require 

router.get("/", function(req, res) {
    console.log("it works!")
    res.render(index)
});

module.exports = router;