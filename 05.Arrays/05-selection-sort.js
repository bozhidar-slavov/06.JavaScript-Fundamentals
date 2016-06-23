// Problem 5
// Sorting an array means to arrange its elements in increasing order. Write a program to sort an array.
// Use the Selection sort algorithm: Find the smallest element, move it at the first position,
// find the smallest from the rest, move it at the second position, etc.

function selectionSort(args) {
    var array = args[0].split('\n').map(Number),
        iMin,
        i,
        j;

    for (i = 1; i < array.length; i += 1) {
        iMin = i;
        for (j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[iMin]) {
                iMin = j;
            }
        }

        if (iMin != i) {
            array[i] = array[i] + array[iMin];
            array[iMin] = array[i] - array[iMin];
            array[i] = array[i] - array[iMin];
        }
    }

    // remove 1st element which is the length of array
    array.shift();
    // print
    console.log(array.join('\n'));
}