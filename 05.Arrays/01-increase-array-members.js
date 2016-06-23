// Problem 1
// Write a program that allocates array of N integers,
// initializes each element by its index multiplied by 5 and the prints the obtained array on the console.

function increaseArrayMembers(args) {
    var n = +args[0],
        arr = [],
        i;


    for (i = 0; i < n; i += 1) {
        arr[i] = i * 5;
        console.log(arr[i]);    
    }
}