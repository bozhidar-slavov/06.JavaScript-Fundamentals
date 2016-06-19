// Problem 7
// Write a script that finds the biggest of given 5 variables.

function biggestOfFive(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4];

    var array = [a, b, c, d, e];
    var biggest = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < array.length; i++) {
        if (biggest < array[i]) {
            biggest = array[i];
        }
    }

    console.log(biggest);
}