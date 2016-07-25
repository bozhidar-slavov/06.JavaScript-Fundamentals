// Problem 1
// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype

function solve(args) {
    String.prototype.format = function (options) {
        var prop,
            result = this;

        for (prop in options) {
            result = result.replace(new RegExp('#{' + prop + '}', 'g'), options[prop]);
        }

        return result;
    };

    console.log(args[1].format(JSON.parse(args[0])));
}