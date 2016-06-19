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