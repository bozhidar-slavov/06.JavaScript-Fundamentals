// Problem 4
// Write a program that finds the length of the maximal increasing sequence in an array of N integers.

function maxIncreasingSequence(args) {
    var array = args[0].split('\n').map(Number),
        currentSequence = 1,
        bestSequence = 1,
        length = array.length,
        i;

    for (i = 1; i < length; i++) {
        if (array[i] > array[i - 1]) {
            currentSequence += 1;
        } else {
            if (currentSequence > bestSequence) {
                bestSequence = currentSequence;
            }

            currentSequence = 1;
        }
    }

    console.log(bestSequence);
}