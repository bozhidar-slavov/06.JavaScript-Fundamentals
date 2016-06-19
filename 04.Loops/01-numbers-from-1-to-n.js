// Problem 1
// Implement a javascript function that accepts an array with a single element - positive integer N as string
// and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

function numbersFrom1ToN(args) {
    var n = +args[0],
        array = [],
        i;

    for (i = 1; i <= n; i += 1) {
        array += i + ' ';
    }

    console.log(array);
}