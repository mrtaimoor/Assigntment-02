//! Chapter 35 to 38 | Functions
//? 1. Write a function that displays current date & time in your browser.
// function DateAndTime() {
//   var curDate = new Date();
//   document.write("<br />" + curDate);
// }
// DateAndTime();

//? 2. Write a function that takes first & last name and then it greets the user using his full name.
// function greets() {
//   var firstName = prompt("First Name: ");
//   var lastName = prompt("Last Name: ");
//   alert(`Welcome mr ${firstName + " " + lastName}`);
// }
// greets();

//? 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function adds(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }
// var num1 = parseInt(prompt("Enter a first number"));
// var num2 = parseInt(prompt("Enter a second number"));
// var addition = adds(num1, num2);
// document.write("Sum: " + addition);

//? 4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     var sum = num1 + num2;
//     return sum;
//   } else if (operator === "-") {
//     var sub = num1 - num2;
//     return sub;
//   } else if (operator === "/") {
//     var div = num1 / num2;
//     return div;
//   } else if (operator === "x") {
//     var mul = num1 * num2;
//     return mul;
//   } else if (operator === "%") {
//     var remainder = num1 % num2;
//     return remainder;
//   } else {
//     alert("Invalid operator");
//   }
// }
// var num1 = parseInt(prompt("Enter a first number"));
// var num2 = parseInt(prompt("Enter a second number"));
// var operator = prompt("Enter operator like (+, -, x, /, %)");
// var calculate = calculator(num1, num2, operator);
// document.write(
//   `<br />Your Calculation of ${num1} ${operator} ${num2} = ${calculate}`
// );

//? 5. Write a function that squares its argument.
// function squares(a) {
//   var sqrs = a ** 2;
//   document.write(`Seqaure of ${a} is ${sqrs} <br/>`);
// }
// squares(4);
// squares(5);
// squares(2);

//? 6. Write a function that computes factorial of a number.
// function factorial(num) {
//   var fact = 1;
//   for (var i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   document.write(`<br/ > Factorial of ${num} is: ${fact}`);
// }
// var num = parseInt(prompt("Enter a number"));
// factorial(num);

//? 7. Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start, end) {
//   document.write(`<br /> Counting: ${start} to ${end} is:`);
//   for (var i = start; i <= end; i++) {
//     document.write(`<br /> ${i}`);
//   }
// }
// counting(1, 50);

/* 
?8. Write a nested function that computes hypotenuse of a right angle triangle.  
Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. 
Outer function : calculateHypotenuse() 
Inner function: calculateSquare() 
*/
//! Check
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare() {
//     var hypotenuse = base ** 2 + perpendicular ** 2;
//     hypotenuse = Math.sqrt(hypotenuse).toFixed(2);
//     return hypotenuse;
//   }
//   alert(`Your hypotenuse of right angle triangle is ${calculateSquare()}`);
// }
// var base = parseInt(prompt("Enter a base of right angle triangle"));
// var perpendicular = parseInt(
//   prompt("Enter a perpendicular of right angle triangle")
// );
// var cal = calculateHypotenuse(base, perpendicular);

/* 
? 9. Write a function that calculates the area of a rectangle. 
     A = width * height 
    Pass width and height in following manner: 
i.  Arguments as value 
ii. Arguments as variables  
*/
// function area(width, height) {
//   var area = width * height;
//   document.write(`<br />Area of rectangle is ${area}`);
// }

// i.  Arguments as value
// area(2, 4);

// // ii. Arguments as variables
// var num1 = parseInt(prompt("Enter width of rectangle"));
// var num2 = parseInt(prompt("Enter height of rectangle"));
// area(num1, num2);

//? 10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward asforward, e.g. madam.
function checkPalindrome(words) {
  var orignalWord = words.toLowerCase();
  var reverseWord = words.split("").reverse().join("").toLowerCase();
  if (orignalWord === reverseWord) {
    document.write(`<br /> Your entered string \'${words}\' is a Palindrome`);
  } else{
    document.write(`<br /> Your entered string \'${words}\' is not a Palindrome`);
  }
}

checkPalindrome("This");
checkPalindrome("Madam");

//? 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox'.
//! check
// function convert(txt) {
//   var sentence = txt.toLowerCase().split(" ");
//   for (var i = 0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//   }
//   document.write("<br/>" + sentence.join(" "));
// }
// var txt = prompt("Enter any word to convert to title case");
// convert(txt);

//? 12. Write a JavaScript function that accepts a string as a parameter and find the longest word with in the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development'
//! Check (out of for loop)?
// function largestWord(sent) {
//   var arr = sent.split(" ");
//   var result = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (result.length < arr[i].length) {
//       result = arr[i];
//     }
//   }
//   document.write(result);
// }
// var sent = prompt("Enter any sentence");
// largestWord(sent);

//? 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'
//! check
// function occurrences(str, letter) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       document.write(`<br />${str[i]} is repeated`);
//       // document.write(`<br />your letter reapeated in your string is ${str[i]}`);
//     }
//   }
// }
// occurrences("my name is syed taimoor", "m");
/* 
?14. The Geometrizer 
Create 2 functions that calculate properties of a circle, using 
the definitions here. 
  Create a function called calcCircumference: 
    • Pass the radius to the function. 
    • Calculate the circumference based on the radius, and output "The circumference is NN". 
  Create a function called calcArea: 
    • Pass the radius to the function. 
    • Calculate the area based on the radius, and output "The area is NN". 
      Circumference of circle    =     2πr 
      Area of circle       =     πr2  
*/

// function calcCircumference(radius) {
//   var pi = Math.PI.toFixed(3);
//   var CircumferenceOfCircle = 2 * pi * radius;
//   document.write(`<br />Circumference of circle is ${CircumferenceOfCircle}`);
// }
// var radius = parseInt(prompt("Enter radius"));
// calcCircumference(radius);

// function calcArea(radius) {
//   var pi = Math.PI.toFixed(3);
//   var areaOfCircle = 2 * pi * radius;
//   document.write(`<br />Area of circle is ${areaOfCircle}`);
// }
// var radius = parseInt(prompt("Enter radius"));
// calcArea(radius);
