// Problem 5
// Write a function that replaces non breaking white-spaces in a text with &nbsp.

function replaceWhitespaces(args) {
    var input = args[0],
        regex = /\s/g,
        output = input.replace(regex, '&nbsp;');

    console.log(output);
}

// test
console.log(replaceWhitespaces(['hello world']));