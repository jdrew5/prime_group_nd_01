var express = require("express");
var app = express();
var path = require('path');
var employee = require('./employee');

app.set("port", process.env.PORT || 5000);

app.get("/employee", function(req,res,next){
    res.send(employee());
});

app.get("/*", function(req,res,next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;