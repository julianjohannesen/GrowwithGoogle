// Destructuring arrays and objects

// ES6 gives us ashorthand to create variables corresponding to the elements or values of any array or object.

const myArray = ["thing1", "thing2", "thing3"]

const [var1, var2, var3] = myArray

console.log(var1 + var2 + var3);

const myObject = {
    name1: "thing1",
    name2: "thing2",
    name3: "thing3"
}

const {name1, name2, name3} = myObject;

console.log(name1 + name2 + name3);