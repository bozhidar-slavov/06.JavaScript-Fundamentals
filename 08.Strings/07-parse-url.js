// Problem 7
// Write a script that parses an URL address given in the format:
// [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.

function parseUrl(args) {
    var regex = new RegExp("(.*)://(.*?)(/.*)"),
        url = args[0],
        collection;
    
    collection = url.match(regex);
    collection.shift();

    console.log('protocol: ' + collection[0]);
    console.log('server: ' + collection[1]);
    console.log('resource: ' + collection[2]);
}

// test
console.log(parseUrl(['http://telerikacademy.com/Courses/Courses/Details/239']));