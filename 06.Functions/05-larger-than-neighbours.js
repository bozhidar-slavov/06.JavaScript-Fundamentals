// Problem 5
// Write a method that checks if the element at given position in given array of integers is larger than its two neighbours (when such exist).
// Write program that reads an array of numbers and prints how many of them are larger than their neighbours.

function largerThanNeighbours(args) {
    var input = args[0].split('\n'),
        arrayLength = input[0],
        array = input[1].split(' ').map(Number);

    return neighboursChecker(array, arrayLength);

    function neighboursChecker(sequence, arrLength) {
        var counter = 0,
            i;
        for (i = 1; i < arrLength - 1; i++) {
            if (sequence[i - 1] < sequence[i] && sequence[i + 1] < sequence[i]) {
                counter += 1;
            }
        }

        return counter;
    }
}

// test
console.log(largerThanNeighbours(['6\n-26 -25 -28 31 2 27']));