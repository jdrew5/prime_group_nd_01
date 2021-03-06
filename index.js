var express = require('express');
var router = express.Router();
var path = require('path');
var employee = require('./employee');


router.get("/employee", function(req,res,next){
    res.send(employee());
});

router.get("/*", function(req,res,next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

module.exports = router;