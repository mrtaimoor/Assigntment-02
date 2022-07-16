//! Chapter 21 to 30 | Changing Case | Strings | Rounding | Random | Converting Strings | Controling Length

//* Changing case
//? 1.  Write a program that takes user input. Convert and show the input in capital letters.
var letters = prompt("Enter any word to convert to capital letters");
letters = letters.toUpperCase();
document.write("Your Letter: " + letters);

//? 2. Write a program that takes user input. Convert and show the input in title case.
var txt = prompt("Enter any word to convert to title case");
var sentence = txt.toLowerCase().split(" ");
for (var i = 0; i < sentence.length; i++) {
  sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);

  /* sentence: taimoor nawaz
  txt.toLowerCase().split(" "); // taimoor,nawaz // split into array format
  sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  sentence[0] = sentence[0][0].toUpperCase() + sentence[0].slice(1); //
  sentence[0] = t.uppercase() + sentence[0].slice(1); // T+aimoor // Taimoor
  sentence[1] = sentence[1][0].toUpperCase() + sentence[1].slice(1); // N+awaz // Nawaz 
*/
}
document.write("<br/>" + sentence.join(" "));

//* Strings: measuring length and extracting parts
//? 1.  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
var userModel = prompt("Enter your mobile model");
document.write("<br />Your Mobile Model length is " + userModel.length);

//? 2. Write a program to display the last character of a user input.
var lastCharacter = prompt("Enter a word to display the last character");
document.write(
  "<br />Last character of " + lastCharacter + " is " + lastCharacter.slice(-1)
);

//* Strings: finding segments
//? 1.  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
var word = "Pakistani";
document.write(
  "<br />Your word Pakistani is  Index of letter 'n' is " + word.indexOf("n")
);

//? 2. Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . , !), prompt the user to enter a valid username.
//! Check my teacher
var username = prompt("Enter your Name: ");
var specialSymbols = [
  "!",
  "@ ",
  "?",
  "#",
  "$",
  "%",
  "^",
  "&",
  ",",
  "(",
  ")",
  "*",
  '"',
  ":",
  "}",
  "{",
  "[",
  "]",
  ";",
  "<",
  ">",
];
for (var i = 0; i < specialSymbols.length; i++) {
  if (username === specialSymbols[i]) {
    prompt("Please enter a valid username");
  }
}

//? 3. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
//! Check
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase().split(" ");
document.write(str);
document.write("<br />");
for (var i = 0; i < str.length; i++) {
  if (str[i].indexOf("the") === 0) {
    document.write(" <br> " + str[i].indexOf("the"));
  }
}
document.write("<br />");

//* Strings: finding a character at a location
//? 1.  Write a program to find the character at 3rd index in the word“Pakistani” and display the result in your browser.
var words = "Pakistani";
document.write("Your word Pakistani of the 3rd index is: " + words.charAt(3));

//* Strings: replacing characters
//? 1.  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var wrd = "Hyderabad";
document.write("<br />Replacing Word is: " + wrd.replace("Hyder", "Islam"));

//? 2. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
document.write("<br />");
var message =
  "Ali and Sami are best friends. They play cricket and football together.";
message = message.split(" ");
for (var i = 0; i < message.length; i++) {
  document.write(" " + message[i].replace("and", "&"));
}

//* Rounding numbers
/* 
?1.  Write a program that takes a positive integer from user & display 
the following in your browser. 
a. number (example number: 3.45214) 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number   
*/

// a)
var positiveInt = +prompt("Enter a positive integer: ");
document.write("<br /> Number: " + positiveInt);
// b)
document.write("<br />Round off Number: " + Math.round(positiveInt));
// c)
document.write("<br />floor off Number: " + Math.floor(positiveInt));
// d)
document.write("<br />Celi off Number: " + Math.ceil(positiveInt));

/* 
?2. Write a program that takes a negative floating point number from user & display the following in your browser. 
a. Number (example number: -2.678 ) 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number  
*/
var neg = +prompt("Enter a negative integer: ");
document.write("<br /> Number: " + neg);
// b)
document.write("<br />Round off Number: " + Math.round(neg));
// c)
document.write("<br />floor off Number: " + Math.floor(neg));
// d)
document.write("<br />Celi off Number: " + Math.ceil(neg));

//* Generating random numbers
//? 1.  Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
var num = Math.floor(Math.random() * 6 + 1);
document.write("Value of dice: " + num);

//? 2.  Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser. 2 = Heads and 1 = Tails
document.write("<br />");
var coin = Math.floor(Math.random() * 2 + 1);
// document.write(coin);
if (coin === 2) {
  document.write(`${coin} =  Heads`);
} else if (coin === 1) {
  document.write(`${coin} =  Tails`);
}

//? 3. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
document.write("<br />");
var n = Math.floor(Math.random() * 10 + 1);
var userNum = parseInt(prompt("Enter number between 1 and 10."));
// document.write("Value of dice: " + n);
if (n === userNum) {
  alert("Congratulations!! you win find");
}

//* Converting strings to integers and decimals
/* 
?1.  Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms 
*/
var weight = prompt("Enter your weight");
// a)
document.write(`<br />Weight: ${parseInt(weight)}`);
// b)
document.write(`<br />Weight: ${parseInt(weight)}Kgs`);
// c)
document.write(`<br />Weight: ${parseFloat(weight)}Kgs`);
// d)
document.write(`<br />Weight: ${parseFloat(weight)}kilograms`);

//* Converting strings to numbers, numbers to strings
//? 1.  Write a program that converts a string “472” to a number 472. Display the values & types in your browser. Hint: (use typeof())
var str = "472";
var strToint = parseInt(str);
document.write(`<br /> Number: ${strToint} and type: ${typeof strToint}`);

//? 2. Write a program that converts the variable num to string. var num = 3536 ; Remove the dot to display “3536” display in your browser.
var num = 3536;
var intTostr = String(num);
document.write(`<br /> Number: ${intTostr} and type: ${typeof intTostr}`);

//* Controlling the length of decimals
//? 1.  Write a program to control the length of decimals to 2.
var percentage = (30 / 45) * 100;
document.write("<br/> Percentage: " + percentage.toFixed(2) + "%");
