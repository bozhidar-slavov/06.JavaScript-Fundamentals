// Problem 1
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.

function exchangeIfGreater(args) {
    var a = +args[0],
        b = +args[1];

    if (a > b) {
        console.log(b + ' ' + a);
    } else {
        console.log(a + ' ' + b);
    }
}

// Problem 2
// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of if operators.

function multiplicationSign(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        counter = 0;

    if (a < 0) {
        counter += 1;
    }

    if (b < 0) {
        counter += 1;
    }

    if (c < 0) {
        counter += 1;
    }

    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    } else {
        if (counter % 2) {
            console.log('-');
        } else {
            console.log('+');
        }
    }
}

// Problem 3
// Write a script that finds the biggest of three numbers.

function biggestOfThree(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

// Problem 4
// Sort 3 real values in descending order.

function sortThreeValues(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    if (a > b && a > c) {
        if (b > c) {
            console.log(a + ' ' + b + ' ' + c);
        } else {
            console.log(a + ' ' + c + ' ' + b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b + ' ' + a + ' ' + c);
        } else {
            console.log(b + ' ' + c + ' ' + a);
        }
    } else {
        if (a > b) {
            console.log(c + ' ' + a + ' ' + b)
        } else {
            console.log(c + ' ' + b + ' ' + a);
        }
    }
}

// Problem 5
// Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
// Print not a digit in case of invalid input. Use a switch statement.

function digitAsWord(args) {
    var digit = +args[0];

    switch (digit) {
        case 0: console.log('zero'); break;
        case 1: console.log('one'); break;
        case 2: console.log('two'); break;
        case 3: console.log('three'); break;
        case 4: console.log('four'); break;
        case 5: console.log('five'); break;
        case 6: console.log('six'); break;
        case 7: console.log('seven'); break;
        case 8: console.log('eight'); break;
        case 9: console.log('nine'); break;
        default: console.log('not a digit'); break;
    }
}

// Problem 6
// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.

function quadraticEquation(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        discriminant = (b * b) - (4 * a * c),
        xOne = (-b - Math.sqrt(discriminant)) / (2 * a),
        xTwo = (-b + Math.sqrt(discriminant)) / (2 * a),
        xOneXTwo = (-b / (2 * a));


    if (discriminant > 0) {
        console.log('x1=' + xOne.toFixed(2) + '; ' + 'x2=' + xTwo.toFixed(2));
    } else if (discriminant < 0) {
        console.log('no real roots');
    } else {
        console.log('x1=x2=' + xOneXTwo.toFixed(2))
    }
}

// Problem 7
// Write a script that finds the biggest of given 5 variables.

function biggestOfFive(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4];

    var array = [a, b, c, d, e];
    var biggest = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < array.length; i++) {
        if (biggest < array[i]) {
            biggest = array[i];
        }
    }

    console.log(biggest);
}

// Problem 8
// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function numberToWords(args) {
    var number = +args[0],
        result = '',
        thirdDigit = Math.floor(number / 100) % 10,
        secondDigit = Math.floor(number / 10) % 10,
        firstDigit = number % 10,
        temp = number.toString();

    switch (thirdDigit) {
        case 1: result = "One hundred "; break;
        case 2: result = "Two hundred "; break;
        case 3: result = "Three hundred "; break;
        case 4: result = "Four hundred "; break;
        case 5: result = "Five hundred "; break;
        case 6: result = "Six hundred "; break;
        case 7: number = "Seven hundred "; break;
        case 8: result = "Eight hundred "; break;
        case 9: result = "Nine hundred "; break;
        default: break;
    }

    if ((thirdDigit !== 0) && ((secondDigit !== 0) || (firstDigit !== 0))) {
        result += "and ";
    }

    switch (secondDigit) {
        case 2: result += "Twenty "; break;
        case 3: result += "Thirty "; break;
        case 4: result += "Fourty "; break;
        case 5: result += "Fifty "; break;
        case 6: result += "Sixty "; break;
        case 7: result += "Seventy "; break;
        case 8: result += "Eighty "; break;
        case 9: result += "Ninety "; break;
        default: break;
    }

    if (secondDigit !== 1) {
        switch (firstDigit) {
            case 1: result += "One"; break;
            case 2: result += "Two"; break;
            case 3: result += "Three"; break;
            case 4: result += "Four"; break;
            case 5: result += "Five"; break;
            case 6: result += "Six"; break;
            case 7: result += "Seven"; break;
            case 8: result += "Eight"; break;
            case 9: result += "Nine"; break;
            default: break;
        }
    } else {
        switch (firstDigit) {
            case 0: result += "Ten"; break;
            case 1: result += "Eleven"; break;
            case 2: result += "Twelve"; break;
            case 3: result += "Thirteen"; break;
            case 4: result += "Fourteen"; break;
            case 5: result += "Fifteen"; break;
            case 6: result += "Sixteen"; break;
            case 7: result += "Seventeen"; break;
            case 8: result += "Eighteen"; break;
            case 9: result += "Nineteen"; break;
            default: break;
        }
    }

    if (number === 0) {
        result = "Zero";
    }

    if (temp.length > 1) {
        var sentence = result.split(' ');
        result = '';
        result = sentence[0];
        for (var i = 1; i < sentence.length; i++) {
            result += sentence[i].toLowerCase();
            result += ' ';
        }

        console.log(result);
    } else {
        console.log(result);
    }    
}