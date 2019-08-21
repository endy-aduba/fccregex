// regular expressions are used in programming languages to match parts of strings
// If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

let word = "hello world";
let regexx = /hello/;
let output = regexx.test(word);