// Problem 8
// Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].

function replaceTags(args) {
    console.log(args[0].replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)'));
}