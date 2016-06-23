// Problem 2
// Write a program that compares two char arrays lexicographically (letter by letter).

function compareCharArrays(args) {
    var input = args[0].split('\n'),
        firstWord = input[0],
        secondWord = input[1],
        result;

    if (firstWord > secondWord) {
        result = '>';
    } else if (secondWord > firstWord) {
        result = '<';
    } else {
        result = '=';
    }

    console.log(result);
}