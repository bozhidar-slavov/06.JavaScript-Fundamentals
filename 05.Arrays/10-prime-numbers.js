// Problem 10
// Write a program that finds all prime numbers in the range [1 ... N]. Use the Sieve of Eratosthenes algorithm.
// The program should print the biggest prime number which is <= N.

function solve(args) {
    var i = +args,
		j,
		isPrime;

    for (i; i >= 2; i -= 1) {
        for (j = 2; j <= Math.floor(Math.sqrt(i)) ; j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }

        if (isPrime) {
            return i;
        }
    }
}