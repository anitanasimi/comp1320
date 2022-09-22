var readline = require("readline-sync");

var year = readline.question("Please enter the year: ");
var month = readline.question("Please enter the month: ");
var day = readline.question("Please enter the day: ");
 
const {getDayOfTheWeek} = require("./lab-two").getDayOfTheWeek;
const {makeCalender} = require("./lab-two").makeCalender;

getDayOfTheWeek(year, month, date);
makeCalender(2022);