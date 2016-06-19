// Problem 5 
// Using loops implement a javascript function that converts a hex number number to its decimal representation.

function hexToDecimal(args) {
    var hexNumber = args[0],
        decNumber = 0,
        tempNumber,
        power = 1,
        i;

    for (i = hexNumber.length - 1; i >= 0; i -= 1) {
        switch (hexNumber[i]) {
            case 'A': tempNumber = '10'; break;
            case 'B': tempNumber = '11'; break;
            case 'C': tempNumber = '12'; break;
            case 'D': tempNumber = '13'; break;
            case 'E': tempNumber = '14'; break;
            case 'F': tempNumber = '15'; break;
            default: tempNumber = +hexNumber[i]; break;
        }

        decNumber += tempNumber * power;
        power *= 16;
    }

    console.log(decNumber);
}