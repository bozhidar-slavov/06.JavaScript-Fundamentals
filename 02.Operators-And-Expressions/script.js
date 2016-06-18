// Problem 1. Odd or Even
// Write an expression that checks if given integer is odd or even.

function oddOrEven(args) {
    var n = +args[0];

    if (n % 2) {
        console.log("odd " + n);
    } else {
        console.log("even " + n);
    }
}

// Problem 2. Divisible by 7 and 5
// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.

function divisibleBy7AndFive(args) {
    var n = +args[0];

    if (n % 7 === 0 && n % 5 === 0) {
        console.log('true ' + n);
    } else {
        console.log('false ' + n);
    }
}

// Problem 3. Rectangle area
// Write an expression that calculates rectangle’s area by given width and height.

function rectangleArea(args) {
    var width = +(args[0]),
        height = +(args[1]);

    var perimeter = 2 * (width + height);
    var area = width * height;

    console.log(parseFloat(area).toFixed(2) + " " + parseFloat(perimeter).toFixed(2));

}

// Problem 4. Third digit
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function thirdDigit(args) {
    var number = +[args],
        thirdDigit = Math.floor(number / 100) % 10;

    if (thirdDigit === 7) {
        console.log('true');
    } else {
        console.log('false ' + thirdDigit);
    }
}

// Problem 5. Third bit
// Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit #0.
// The result of the expression should be either 1 or 0.

function checkThirdBit(args) {
    var number = +[args],
        position = 3;

    console.log((number >> position) & 1);
}

// Problem 6. Point in Circle
// Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius

function pointInCircle(args) {
    var x = +(args[0]),
        y = +(args[1]),
        radius = 2;

    var distance = Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0)).toFixed(2);

    if (distance <= 2) {
        console.log('yes ' + distance);
    } else {
        console.log('no ' + distance);
    }
}

// Problem 7. Is prime
// Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function isPrime(args) {
    var number = +args[0],
        isPrime = true;

    if (number > 1) {
        for (var i = 2; i <= Math.sqrt(number) ; i += 1) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        console.log(isPrime);
    } else {
        console.log("false");
    }
}

// Problem 8. Trapezoid area
// Write an expression that calculates trapezoid's area by given sides a and b and height h.

function trapezoidArea(args) {
    var a = +(args[0]),
        b = +(args[1]),
        h = +(args[2]);

    var area = (((a + b) / 2) * h).toFixed(7);
    
    console.log(area);
}

// Problem 9. Point in Circle and outside Rectangle
// Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).

function pointInCircleAndOutsideRectangle(args) {
    var x = +args[0],
        y = +args[1],
        output;

    var isInCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= (1.5 * 1.5);
    var isOutRectangle = (x >= -1 && x <= 5) && (y <= 1 && y >= -1);

    if (isInCircle) {
        output = 'inside circle ' + (isOutRectangle ? 'inside rectangle' : 'outside rectangle');
    } else {
        output = 'outside circle ' + (isOutRectangle ? 'inside rectangle' : 'outside rectangle');
    }

    console.log(output);
}