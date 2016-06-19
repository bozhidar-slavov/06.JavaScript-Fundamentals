// Problem 2. Divisible by 7 and 5
// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function divisibleBy7AndFive(args) {
    var n = +args[0];

    if (n % 7 === 0 && n % 5 === 0) {
        console.log('true ' + n);
    } else {
        console.log('false ' + n);
    }
}