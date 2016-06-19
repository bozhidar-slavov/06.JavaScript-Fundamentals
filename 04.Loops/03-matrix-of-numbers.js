// Problem 3
// Write a javascript function that prints a matrix like in the examples below by a given integer N. Use two nested loops.

function matrixOfNumbers(args) {
    var rowsAndCols = +args[0],
        result = ' ',
        i,
        j;
		
    for (i = 0; i < rowsAndCols; i += 1) {
        for (j = i + 1; j <= rowsAndCols + i; j += 1) {
            result += j + ' ';
        }

        result += '\n';
    }

    console.log(result);
}