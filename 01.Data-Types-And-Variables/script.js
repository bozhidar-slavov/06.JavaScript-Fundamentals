﻿// Problem 1. JavaScript literals
// Assign all the possible JavaScript literals to different variables.

var integerLiteral = 10,
    floatLiteral = 3.14,
    booleanLiteral = false,
    stringLiteral = 'Pesho',
    functionLiteral = function () {
        alert('this is function');
    },
    objectLiteral = { brand: 'Mercedes-Benz', model: 'S-Class', color: 'black', owner: 'Pesho', horsePower: 577 },
    arrayLiteral = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Problem 2. Quoted text
// Create a string variable with quoted text in it.
// For example: `'How you doin'?', Joey said'.

var quotedText = '"How you doin\'?", Joey said';
console.log(quotedText);

// Problem 3. Typeof variables
// Try typeof on all variables you created.

var arrayOfVariables = [integerLiteral, floatLiteral, booleanLiteral, stringLiteral, functionLiteral, objectLiteral, arrayLiteral];

for (var i = 0; i < arrayOfVariables.length; i++) {
    console.log('Type of: ' + arrayOfVariables[i] + ' is: ' + typeof (arrayOfVariables[i]));
}

// Problem 4. Typeof null
// Create null, undefined variables and try typeof on them.

var nullVariable = null,
    undefinedVariable;

console.log('Type of: ' + nullVariable + ' is: ' + typeof (nullVariable));
console.log('Type of: ' + undefinedVariable + ' is: ' + typeof (undefinedVariable));
