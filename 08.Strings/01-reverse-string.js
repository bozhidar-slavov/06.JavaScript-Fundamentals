// Problem 1
// Write a JavaScript function that reverses a string.

function reverseString(args) {
    var input = args[0],
        reversed = '',
        i,
        len = input.length;

    for (i = len - 1; i >= 0; i -= 1) {
        reversed += input[i];
    }

    console.log(reversed);
}   

// test
console.log(reverseString(['sample']));