// Problem 2
// Write a JavaScript function to check if in a given expression the brackets are put correctly.

function correctBrackets(args) {
    var input = args[0],
    leftBracket = 0,
    rightBracket = 0,
    isCorrect = false,
    i;

    for (i = 0, len = input.length; i < len; i += 1) {
        switch (input[i]) {
            case '(': leftBracket += 1; break;
            case ')': rightBracket += 1; break;
        }
    }

    if (leftBracket === rightBracket) {
        isCorrect = true;
    }

    console.log(isCorrect ? 'Correct' : 'Incorrect');
}

// test
console.log(correctBrackets(['((a+b)/5-d)']));