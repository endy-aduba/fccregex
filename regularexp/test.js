// regular expressions are used in programming languages to match parts of strings
// If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

let words = "hello world";
let regexx = /hello/;
let output = words.test(regexx);

//you should take note that this particular string literal takes the exact elements of the strings. any other similarity will be ignored ... e.g. PET & pet are the same word but different cases types.
//when output is ran ... it returns either true or false ... however in this case ... it returns true.



//matching a string with multiple possibilities makes us of the character "|" to separate all the possible possibilities
//e.g

let word = "the bird flew over to where the dog and cat is";
let regex = /bird|dog|cat/;
let finality = regex.test(word);


//we can decide to completely ignore the sentence case by using the i flag ... a use case example -->

let akpuruka = "freecodeCamp";
let reger = /freecodecamp/i;
let finalility = reger.test(akpuruka);