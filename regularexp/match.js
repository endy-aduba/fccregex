// Regular Expressions: Extract Matches

//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:

// "Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]