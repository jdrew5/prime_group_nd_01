/**
 * Created by johndrew on 10/28/15.
 */
function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var createPoints = function(){
    var num = randomNum(1, 9);
        return num;
};

module.exports = createPoints;