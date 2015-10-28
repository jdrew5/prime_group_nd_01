/**
 * Created by johndrew on 10/28/15.
 */
var nameArray = ["Dana", "Jake", "Jason", "John", "Paige", "Andy", "Dave", "Laryssa", "Pui", "Colin", "Heather", "Natalie", "Mike", "Zeeshan", "Dave", "Tom", "Karl", "Kelly", "Sam", "Danny", "Aron", "Paul"];

function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var createName = function(){
    var num = randomNum(0, (nameArray.length -1));
    for (var i = 0; i < nameArray.length; i++){
        if (num == i) {
            return nameArray[i];
        }
    }
};

module.exports = createName;