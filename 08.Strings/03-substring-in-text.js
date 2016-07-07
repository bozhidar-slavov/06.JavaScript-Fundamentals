// Problem 3
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

function substringInText(args) {
    var key = args[0].toLowerCase(),
        text = args[1].toLowerCase(),
        counter = 0,
        i;

    for (i = 0, textLen = text.length, keyLen = key.length; i < textLen - keyLen + 1; i += 1) {
        if (text.substr(i, keyLen) === key) {
            counter += 1;
        }
    }

    console.log(counter);
}

// test
console.log(substringInText([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]))