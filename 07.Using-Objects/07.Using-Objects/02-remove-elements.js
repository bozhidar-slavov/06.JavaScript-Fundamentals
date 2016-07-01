// Problem 2
// Write a function that removes all elements with a given value. Attach it to the array type. Read about prototype and how to attach methods.

function removElements(args) {
    var i,
        newArray = [],
        key = args[0],
        count = 0;

    Array.prototype.remove = function (value) {
        for (i = 1; i < args.length; i += 1) {
            if (args[i] !== key) {
                newArray[count] = args[i];
                count += 1;
            }
        }

        return newArray;
    }

    return args.remove(key).join('\n');
}

// test
console.log(removElements(['1', '2', '3', '2', '1', '2', '3', '2', '1']));