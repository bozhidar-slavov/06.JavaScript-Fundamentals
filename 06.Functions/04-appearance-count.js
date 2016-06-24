// Problem 4
// Write a method that counts how many times given number appears in a given array.
// Write a test program to check if the method is working correctly.

function appearanceCount(args) {
    var input = args[0].split('\n'),
        arrayLength = input[0],
        array = input[1].split(' ').map(Number),
        x = input[2];

    return countAppearance(array, arrayLength, x);

    function countAppearance(array, arrLength, x) {
        var counter = 0,
            i;

        for (i = 0; i < arrLength; i += 1) {
            if (array[i] == x) {
                counter += 1;
            }
        }

        return counter;
    }
}

// test
console.log(appearanceCount(['8\n28 6 21 6 -7856 73 73 -56\n73']));