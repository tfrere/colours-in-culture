function hex2rgb(hex) {

    var rgb = {};
    var hexValues = hex + '';

    if (hexValues.charAt(0) === '#') {
        hexValues = hexValues.substr(1);
    }

    rgb.r = hexValues.charAt(0) + hexValues.charAt(1);
    rgb.g = hexValues.charAt(2) + hexValues.charAt(3);
    rgb.b = hexValues.charAt(4) + hexValues.charAt(5);

    rgb.r = parseInt(rgb.r, 16);
    rgb.g = parseInt(rgb.g, 16);
    rgb.b = parseInt(rgb.b, 16);

    return rgb;
}

function rgbDifference(color1, color2) {
    return Math.sqrt(
        (color1.r - color2.r) * (color1.r - color2.r) +
        (color1.g - color2.g) * (color1.g - color2.g) +
        (color1.b - color2.b) * (color1.b - color2.b)
    )
}


module.exports = {
    hex2rgb       : hex2rgb,
    rgbDifference : rgbDifference
};