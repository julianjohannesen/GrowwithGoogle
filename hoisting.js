// HOISTING

function hoist(){
    a = 20;
    let b = 100;
}

hoist()

// This will work
console.log(a);
// ... but this won't. 
console.log(b); // => "ReferenceError: b is not definted"
// The reason why is that, because 'a' was not declared, but was given a value,
// it will be declared as a global variable, available to any function.
// (Unless you're using 'Use Strict', in which case you get an error.)
// 'b', on the other hand, is local to the scope of hoist().

// Not declaring 'a' is a big problem, b/c if you had already declared
// a global variable called 'a' earlier in your program, you would be
// changing it's value from whatever it was to '20' when you ran hoist().

// Also, remember that variable declarations are hoisted to the top of 
// the script, but the assignment is not.

// Variables declared with let or const do get hoisted, but they remain 
// unassigned, unlike variables declared with var, which when hosited,
// are initialized with a value of 'undefined'. That's a difference b/w
// getting "ReferenceError" and "undefined"

// Function declarations are also hoisted, however, the whole declaration
// and the definition are both hoisted and initialized. 

// That's not true of function expressions. Those are not completely 
// hoisted.

// ORDER OF PRECENDENCE:
// Function DECLARATION takes precedence over variable declaration, but
// variable ASSIGNMENT takes precedence over function assignment

var double = 22; 

function double(n){
    return 2*n;
}

console.log(typeof(double)); // => number

// versus

var double; 

function double(n){
    return 2*n;
}

console.log(typeof(double)); // => function

