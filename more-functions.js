//jQuery
const hello = 
//document.querySelector("#hello");
//document.getElementById("hello");
$("#hello");

const myParas = 
// document.getElementsByClassName("myPara");
$(".myPara");

let allParas = $("p");
// document.getElementsByTagName("p");


$("#hello").css("color", "red");
$("#hello").css("color", "green").css("font-size", "10px");

function fuzzy (dice) { console.log("Cool fuzzy " + dice) }
fuzzy ("cabbage");
fuzzy (10);
fuzzy ( [] );
fuzzy( [ 1, 3, 4] );

function splat (array) { console.log("This is the array join: " + array) }

// On this one, I forgot to call the function, so I just got the function back as a string
splat( function(){ ["This", "is", "an", "array", "of", "strings"].join(" ") } );
// This one below is broken because of putting the parentheses inside the closing bracket
//splat( (function(){ ["This", "is", "an", "array", "of", "strings"].join(" "))() } );
// Finally put the parentheses on the correct side of the closing bracket, but still didn't work
// returned "undefined"
splat( (function(){ ["This", "is", "an", "array", "of", "strings"].join(" ")} )() );
// Oh! I need to use the return keyword to return the value of the function so that splat()
// can use it
splat( (function(){ return ["This", "is", "an", "array", "of", "strings"].join(" ")} )() );

var caps = "THIS IS ALL CAPS";

console.log( 'THIS IS ALL CAPS.'.toLowerCase() )
console.log( [1,2,3].join() )


