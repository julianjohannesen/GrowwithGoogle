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

//The for...of iteration construct allows us to iterate over the members of an array
const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 
function iterateOverValues(array){
    for (const element of array) {
    console.log(element);
    }
}

const myString = 'Hello, world!';

function iterateOverValues2(myString){
    for (const char of myString) {
        console.log(char);
    }
}

//////////////
// FOR ... IN
//////////////

//The for...in iteration construct allows us to iterate over the keys of an object
  const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: 10004
  };
   
function iterateOverKeys(object){
  for (const key in object) {
      console.log(key);
  }
}

function iterateOverKeys2(object){
    for(const key in object){
        console.log(object[key]);
    }
}



