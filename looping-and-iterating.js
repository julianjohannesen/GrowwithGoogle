///////////
// WHILE
///////////

//An example of a while loop
function iRan () {
    while (Math.random() >= 0.5) {
    console.log('And I ran... I ran so far away!');
    }
}

//Another example, using a counter
function tailsNeverFails(){
    let count = 0;
    let current = true;
    while(current){
        if(Math.random() >= .5){
            count++;
        } else {
            current = false;
        } 
    };
    console.log(`You got ${count} tails in a row!`);
    return count; 
}

//Alternatively
function tailsNeverFails2(){
    let count = 0;
    while(Math.random() >= .5){
        count++;
    }
    console.log(`You got ${count} tails in a row!`);
    return count;
}

//////////////
//DO ... WHILE
//////////////

//In a do...while loop, the loop executes at least once
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

/////////////
//CONTINUE
/////////////

//Using a continue statement
function continueStatement() {
    let i = 0;
    let n = 0;
    while (i < 5) {
        i++;
        if (i == 3) {
            continue;
        }
        n += i;
        console.log(`i is ${i} and n is ${n}`);
    }
}

/////////////
// FOR ... OF
/////////////

//The for...of iteration construct allows us to iterate over any iterable object, e.g. arrays and strings. Ordinary objects are not iterable.

//In for...of loops, abrupt iteration termination can be caused by break, continue[4], throw or return[5]. In these cases, the iterator is closed.

const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const myString = "Hello, World!"
const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: 10004
};

function iterateOverValues(iterableThing){
    for (const element of iterableThing) {
    console.log(element);
    }
}

iterateOverKeys(address);

//Another example, using an array and demostrating that you can exit out of a for of loop using "continue"
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function iterateOverValues2(anArray) {
    for (const value of anArray) {
        if (value % 2 === 0) {
            continue;
        }
        console.log(value); // => Will log the odd numbers
    }
}

iterateOverValues(myArray);
iterateOverValues(myString);
//iterateOverValues(address); // => Uncaught TypeError
iterateOverValues2(digits);

//Return an array with the first letter of each day capitalized.
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (const day of days){
    // Turn each day into an array
    let dayUppercase =  day.split("");
    // Grab the first letter of each day and make it uppercase
    const firstLetter = dayUppercase.shift().toUpperCase();
    // Insert the first letter into the array at index 0
    dayUppercase.unshift(firstLetter);
    // Join the elements of the day array back into a string
    dayUppercase = dayUppercase.join('');
    console.log(dayUppercase);
}


//////////////
// FOR ... IN
//////////////

//The for...in iteration construct allows us to iterate over the keys of an object. It will iterate over all "enumerable properties." That means that if you add a method to an object's prototype, it will iterate over that method as well.
   
function iterateOverKeys(object){
  for (const key in object) {
      console.log(`The key is '${key}' and the value is '${object[key]}.'`);
  }
}



