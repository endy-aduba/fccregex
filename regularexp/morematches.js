//To search or extract a pattern more than once, you can use the g flag.
let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]