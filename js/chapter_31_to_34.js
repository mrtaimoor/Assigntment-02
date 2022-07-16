//! Chapter 31 to 34 | Date Methods

//? 1. Write a program that displays current date and time in your browser.
var date = new Date();
document.write(date);

//? 2. Write a program that alerts the current month in words. For example December.
// var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var CurrentMonth = new Date();
// alert(months[CurrentMonth.getMonth()]);

//? 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var currentDay = new Date();
// // currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0, 3);
// alert("Today is " + c);

//? 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
//! Check
// var days = new Date();
// var week = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// if ("Sunday" === week[days.getDay()] || "Saturday" === week[days.getDay()]) {
//   alert("It's Fun day.");
// } else {
//   alert(
//     "It's Not a Fun day. only Saturday and Sunday is a Fun day so please wait for this days"
//   );
// }

//? 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
//! Check
// var date = new Date();
// if(date.getMonth() < 16){
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

//? 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
// converts the milliseconds into minutes
var diffMin = diff / (1000 * 60 * 60);
document.write("Current Date: " + todayDate);
document.write(
  "<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli
);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + diffMin);

//? 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
//! Check
var da = new Date();
var dat = da.toString();
document.write("<br />" + dat);
var beSlic = dat.slice(16, 18);
document.write("<br />" + beSlic);
if (
  beSlic === "00" ||
  beSlic === "01" ||
  beSlic === "02" ||
  beSlic === "03" ||
  beSlic === "04" ||
  beSlic === "05" ||
  beSlic === "06" ||
  beSlic === "07" ||
  beSlic === "08" ||
  beSlic === "09" ||
  beSlic === "10" ||
  beSlic === "11"
) {
  document.write("<br /> Its AM ");
} else {
  document.write("<br /> Its PM ");
}

//? 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31);
document.write("<br /> Later Date: " + laterDate);

//? 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
//! check  
var newDateThisRam = new Date("April 1, 2022"); // present ramdan 2022
var pastDateRam = new Date("June 18, 2015"); // past ramdan 2015
var newDateThisRam = newDateThisRam.toString().slice(10, 15);
var pastDateRam = pastDateRam.toString().slice(10, 15);
var difBtYears = newDateThisRam - pastDateRam; 
var pastDays = difBtYears * 365;

// document.write(`<br /> 1st Ramadan 2022, ${newDateThisRam}`);
// document.write(`<br /> 1st Ramadan 2015, ${pastDateRam}`); 
// document.write(`<br /> 2022 - 2015, ${difBtYears}`); 
// document.write(`<br /> Past Days, ${pastDays}`); 
document.write(`<br />${pastDays} days have passed since 1st Ramadan, ${pastDateRam}`);

//? 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
//! Check // Not Solve
// var date = new Date(2015, 11, 5);
// document.write(`<br />On refrence date ${date}`);
// var now =  date.getSeconds();
// document.write(`<br />${now} Seconds had passed since beginning of ${date.toString().slice(10, 15)}`);

//? 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

//? 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

//? 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

/* 
?14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: 
a. Customer Name 
b. Current Month 
c. Number of units 
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) 
Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
*/
