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