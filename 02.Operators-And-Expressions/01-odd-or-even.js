// Problem 1. Odd or Even
// Write an expression that checks if given integer is odd or even.

function oddOrEven(args) {
    var n = +args[0];

    if (n % 2) {
        console.log("odd " + n);
    } else {
        console.log("even " + n);
    }
}