// Hoisting
// Initially when js executes the code, a global execution context is created, it has two phases, 
// memory allocation phase and code execution phase, intially js allocates memory for variables but 
// assigns undefined initially, and in case of functions, it will save the complete function,
// then it starts executing the code, by this time variables are assigned by undefined, 
// so we can use variables and functions before they are declared,
// Variable declarations are hoisted, but only the declaration itself, not the assignment, Function declarations are hoisted entirely,
// 

hoistable()
console.log(x);
console.log(hoistable);

// console.log(get);
// console.log(get1);

// hoisted
function hoistable () {
    console.log('hoisted func');
}

// not hoisted
const get = function () {
    console.log('get function not hoisted');
}

// not hoisted
const get1 = () => {
    console.log('not hoisted get1');
}

var x = 2;
var y = 3;