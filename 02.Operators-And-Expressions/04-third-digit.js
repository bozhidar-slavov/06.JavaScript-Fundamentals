// Problem 4. Third digit
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function thirdDigit(args) {
    var number = +[args],
        thirdDigit = Math.floor(number / 100) % 10;

    if (thirdDigit === 7) {
        console.log('true');
    } else {
        console.log('false ' + thirdDigit);
    }
}