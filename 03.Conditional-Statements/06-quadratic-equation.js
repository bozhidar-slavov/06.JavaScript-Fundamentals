// Problem 6
// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.

function quadraticEquation(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        discriminant = (b * b) - (4 * a * c),
        xOne = (-b - Math.sqrt(discriminant)) / (2 * a),
        xTwo = (-b + Math.sqrt(discriminant)) / (2 * a),
        xOneXTwo = (-b / (2 * a));


    if (discriminant > 0) {
        console.log('x1=' + xOne.toFixed(2) + '; ' + 'x2=' + xTwo.toFixed(2));
    } else if (discriminant < 0) {
        console.log('no real roots');
    } else {
        console.log('x1=x2=' + xOneXTwo.toFixed(2))
    }
}