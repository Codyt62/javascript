// Numbers
// numbers and cumputed with +, -, *, /, %, ++increment, --decrement
// NaN means Not a number
var pizza = 5;
var soda = 1;
var bread = 3;

var total = pizza + soda;

console.log(total);

/**
 * the consol. log() is a function in Javascript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
 */

//  String

const name = 'Cody Tedeschi';

const welcome = "Welcome to Geekwise Academy"



console.log(name);
console.log(welcome);

// Array
var fruits = ['apples', 'grapes', 'oranges', 'bananas'];
var rockBand = ['Pantera, Matalica', 'Bob Dylan', 'Led Zeplin'];

console.log(fruits);
console.log(rockBand);

// 

var car = {
    type:"Fiat",
    model:"500",
    color:"white"
};

console.log(car);

// Boolean
// everything with real value is true 0, null, undefined is false
// comparison operators always return true or false ==, ===, !=, !==, !===, <, >, <=, >=, && AND, || OR, ! NOT

const present = true;
const absent = false;

Boolean(present);
console.log(present);

// Undefined

var cat = 
console.log(cat);

// Null
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

console.log(person);

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// command question mark is a single line comment

/*
this is a multiline
commit
*/

//document.write(); will display varible on webpage
document.write('Hello World!');

var favoriteMovie = 'My favorite movie is Captain Ron';
document.write(favoriteMovie);

//async remembers varibles and remembers functions ad variables

/**
 * The 'this' keyword refers to the current object. 
Note that this is not a variable. It is a keyword, and its value cannot be changed. 
 */

