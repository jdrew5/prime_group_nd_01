/**
 * Created by johndrew on 10/28/15.
 */
var categoryArray = ["FE", "CS", "SS"];

function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var createCategory = function(){
    var num = randomNum(0, (categoryArray.length -1));
    for (var i = 0; i < categoryArray.length; i++){
        if (num == i) {
            return categoryArray[i];
        }
    }
};

module.exports = createCategory;