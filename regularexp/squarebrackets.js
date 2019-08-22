//Regular Expressions: Match Single Character with Multiple Possibilities//

//You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

//For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".



let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


//take for instance we wanted to write all the letters of the alphabet ... it would be a pain in the ass to physically write them down one after the other ... that's why regex came up with a convinient way to include a range of letters without the stress of putting them down one after the other. its the hyphen -.

let wordify = "this is an awesome string";
let philosophy = /[a-z]/ig;
let something = wordify.match(philosophy);


