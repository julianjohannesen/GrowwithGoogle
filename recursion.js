// Recursion

//The function below will log the values in an object to the console. 
//If it encounters an object or array, it will call itself until it has
//reached the deepest level of the object or array 

function deepIterator(target){
    //If the argument is an object
    if(typeof target === 'object'){
        //...then for each key in the object, call deepIterator on it
        //and continue this process until you've logged every simple 
        //data type 
        for(const key in target){
            deepIterator(target[key]);
        } 
    } else {
        //If the item is anything other than an object (including arrays)
        //then log the item (it will be a simple data type, like a string,
        //boolean, or number)
        console.log(target);
    }
}

const thing = {
    name: "Bob",
    age: 26,
    hobbies: [
        "golf",
        "paragliding",
        "snooker"
    ],
    spouse: {
        name: "Carla",
        age: 26
    },
    children: {
        child1: {
            name: "Robert",
            age: 7
        },
        child2: {
            name: "Isabella",
            age: 5
        }
    }
    
}

deepIterator(thing);
