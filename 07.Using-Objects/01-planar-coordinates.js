// Problem 1
// Write functions for working with shapes in standard Planar coordinate system.

function planarCoordinates(args) {
    var x1 = +args[0], y1 = +args[1],
        x2 = +args[2], y2 = +args[3],
        x3 = +args[4], y3 = +args[5],
        x4 = +args[6], y4 = +args[7],
        x5 = +args[8], y5 = +args[9],
        x6 = +args[10], y6 = +args[11],

        p1 = declarePoint(x1, y1),
        p2 = declarePoint(x2, y2),
        p3 = declarePoint(x3, y3),
        p4 = declarePoint(x4, y4),
        p5 = declarePoint(x5, y5),
        p6 = declarePoint(x6, y6),

        a = calculateDistance(p1, p2),
        b = calculateDistance(p3, p4),
        c = calculateDistance(p5, p6);

    console.log(a.toFixed(2));
    console.log(b.toFixed(2));
    console.log(c.toFixed(2));

    if (canBeBuildTriangle(a, b, c)) {
        console.log('Triangle can be built');
    } else {
        console.log('Triangle can not be built');
    }

    function declarePoint(x, y) {
        return {
            x: x,
            y: y
        };
    }

    function calculateDistance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    }

    function canBeBuildTriangle(a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            return true;
        } else {
            return false;
        }
    }
}

// test
console.log(planarCoordinates(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12']));