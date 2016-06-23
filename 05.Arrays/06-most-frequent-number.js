// Problem 6
// Write a program that finds the most frequent number in an array of N elements.

function solve(args) {
    var array = args[0].split('\n').map(Number),
    counter = 1,
    mostFrequentCount = 1,
    mostFrequentNumber = 0,
    i;

    array.sort();

    for (i = 1; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            counter++;
            if (counter > mostFrequentCount) {
                mostFrequentCount = counter;
                mostFrequentNumber = array[i];
            }
        } else {
            counter = 1;
        }
    }

    return mostFrequentNumber + " (" + mostFrequentCount + " times)";
}