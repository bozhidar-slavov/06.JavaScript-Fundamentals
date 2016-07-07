// Problem 6
// Write a function that extracts the content of a html page given as text.
// The function should return anything that is in a tag, without the tags.

function extractText(args) {
    var regex = /<.*?>/ig,
        result = '',
        line;

    for (line of args) {
        result += line.replace(regex, '').trim();
    }

    console.log(result)
}

// test
console.log(extractText([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]));