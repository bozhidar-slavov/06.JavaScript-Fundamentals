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

// Problem 2
// Implement a javascript function that accepts an array of floating-point numbers as strings and returns
// the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).

function minMaxSumAverage(args) {
    var min = +args[0],
        max = +args[0],
        sum = 0,
        average = 0,
        length = args.length,
        i;

    for (i = 0; i < length; i += 1) {
        if (min > +args[i]) {
            min = +args[i];
        }

        if (max < +args[i]) {
            max = +args[i];
        }

        sum += +args[i];
    }

    average = sum / length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + average.toFixed(2));
}

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

// Problem 5 
// Using loops implement a javascript function that converts a hex number number to its decimal representation.

function hexToDecimal(args) {
    var hexNumber = args[0],
        decNumber = 0,
        tempNumber,
        power = 1,
        i;

    for (i = hexNumber.length - 1; i >= 0; i -= 1) {
        switch (hexNumber[i]) {
            case 'A': tempNumber = '10'; break;
            case 'B': tempNumber = '11'; break;
            case 'C': tempNumber = '12'; break;
            case 'D': tempNumber = '13'; break;
            case 'E': tempNumber = '14'; break;
            case 'F': tempNumber = '15'; break;
            default: tempNumber = +hexNumber[i]; break;
        }

        decNumber += tempNumber * power;
        power *= 16;
    }

    console.log(decNumber);
}