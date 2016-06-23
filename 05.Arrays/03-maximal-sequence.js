// Problem 3
// Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.

function maximalSequenceLength(args) {
    var array = args[0].split('\n').map(Number),
        currentSequence = 1,
        bestSequence = 1,
        bestNumber = 0,
        i;

    for (i = 0; i < array.length - 1; i += 1) {
        if (array[i] == array[i + 1]) {
            currentSequence += 1;
            if (currentSequence > bestSequence) {
                bestSequence = currentSequence;
                bestNumber = array[i];
            }
        } else {
            currentSequence = 1;
        }
    }

    console.log(bestSequence)
}
