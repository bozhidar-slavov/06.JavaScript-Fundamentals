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