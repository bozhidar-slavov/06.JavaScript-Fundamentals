// Problem 3. Rectangle area
// Write an expression that calculates rectangle’s area by given width and height.

function rectangleArea(args) {
    var width = +(args[0]),
        height = +(args[1]);

    var perimeter = 2 * (width + height);
    var area = width * height;

    console.log(parseFloat(area).toFixed(2) + " " + parseFloat(perimeter).toFixed(2));

}