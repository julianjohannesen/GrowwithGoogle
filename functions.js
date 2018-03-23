function myFunc () {
    console.log("Hello, world.");

}

myFunc();

function myFunc2 (message){
    console.log(message);
}

myFunc2("Hello, world again.");

var blahBlah = "this is a message";

myFunc2(blahBlah);

function myFunc3 (number){
    return number + number;
}

var thingy = 5;

console.log(myFunc3(thingy));

console.log(myFunc3(5));

var answer = myFunc3(10);

var ans2 = myFunc3;

console.log(answer);

var ans3 = ans2(5);

function whatever (a, b, c) {
    return a * (b + c);
}

var ans4 = whatever(2, 2, 3);

function x(a,b,c){
    return a + b + c;
}

var ans5 = x(1,2,5);

