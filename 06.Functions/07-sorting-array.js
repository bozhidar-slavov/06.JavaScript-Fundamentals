// Problem 7

function sortingArray(args) {
       arrayLength = +args[0],
       array = args[1].split(' ').map(Number);

    var sortedArray = array.sort(function (a, b) {
        return a - b
    });

    return sortedArray.join(' ');
}

// test
console.log(sortingArray(['6', '3 4 1 5 2 6']));