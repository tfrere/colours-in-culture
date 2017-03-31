var data = require("./data.json");
var Utils = require("./utils");


var cultures = data.map(function(color) {
    return Object.keys(color.cultures);
}).reduce(function(acc, curr) {
    return acc.concat(curr);
}, []);


function cultureEquals(c1, c2) {
    return c1.replace(/\s/g, '').toLowerCase() === c2.replace(/\s/g, '').toLowerCase();
}


/**
 * Returns the closest color given hex color
 */
function getClosestColor(hexColor) {

    var rgbColor = Utils.hex2rgb(hexColor);
    var differences = [];

    data.forEach(function(c) {
        differences.push(Utils.rgbDifference(Utils.hex2rgb(c.hex), rgbColor));
    });

    var lowest = Math.min.apply(Math, differences);

    return data[differences.indexOf(lowest)];
}


/**
 * Returns the closest color and a list of feelings associated with the given color and culture
 */
function getCultureColorFeelings(hexColor, culture) {

    var closestColor = getClosestColor(hexColor);

    if(!closestColor) { return {}; }

    var cultureFeelings = [];
    var matchingCulturesNames = Object.keys(closestColor.cultures);

    matchingCulturesNames.forEach(function(c) {
        if(cultureEquals(culture, c)) {
            cultureFeelings = closestColor.cultures[c];
        }
    });

    // TODO : shorter object keys ?
    return {
        closestColor    : closestColor,
        cultureFeelings : cultureFeelings
    };
}

var coloursInCulture = {

    cultures    : cultures,
    colors      : data,

    getClosestColor         : getClosestColor,
    getCultureColorFeelings : getCultureColorFeelings
};

module.exports = coloursInCulture;
