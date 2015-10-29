var express = require("express");
var app = express();

var index = require("./index");

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

app.use("/", index);

module.exports = app;