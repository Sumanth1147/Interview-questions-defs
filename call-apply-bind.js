// These three methods are essential in JavaScript for manipulating the this keyword within functions.
// They allow you to dynamically set the value of this to a specific object, providing flexibility in function execution.

// call
// Invokes a function immediately, setting the this keyword to the specified thisArg.
function greet(message) {
   console.log(message + ' I am ' + this.name);
}

const car = {
    name: "alto",
}

greet.call(car, 'Hello');  // output: Hello I am alto


// apply
// Similar to call, but accepts an array of arguments instead of individual arguments.
function modelGreet(message, model) {
    console.log(message + " I'm " + this.name + " from " + model);
}

modelGreet.apply(car, ['Hello', 2024])  // Hello I'm alto from 2024

// bind
// Syntax: functionName.bind(thisArg, arg1, arg2, ...)
// Purpose: Creates a new function with a fixed this value and optional predefined arguments.
// we can call the new function whenever required
const carObject = greet.bind(car, "hello");

carObject();



