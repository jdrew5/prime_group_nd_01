/**
 * Created by johndrew on 10/28/15.
 */
var name = require('./name');
var category = require('./category');
//var points = require('./points');

var createEmployee = function(){
    var x=name();
    var y=category();

    return {
        name : x,
        category : y
        //points : points()
    };

};

module.exports = createEmployee;