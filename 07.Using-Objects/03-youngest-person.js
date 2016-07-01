// Problem 5
// Write a function that finds the youngest person in a given array of people and prints his/hers full name.
// Each person has properties firstname, lastname and age.

function youngestPerson(args) {
    var youngest,
        i,
        j,
        people = [];

    for (i = 0, j = 0; i < args.length; i += 3, j += 1) {
        people[j] = createPerson(args[i], args[i + 1], +args[i + 2]);
    }

    youngest = people[0];
    for (i = 1; i < people.length; i += 1) {
        if (youngest.age > people[i].age) {
            youngest = people[i];
        }
    }

    return youngest.firstName + ' ' + youngest.lastName

    function createPerson(firstName, lastName, age) {
        return {
            'firstName': firstName,
            'lastName': lastName,
            'age': age
        };
    }
}

// test
console.log(youngestPerson(['Gosho', 'Petrov', '32', 'Bay', 'Ivan', '81', 'John', 'Doe', '42']));