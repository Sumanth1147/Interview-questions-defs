
// let and const declarations also undergo hoisting, but with the Temporal Dead Zone (TDZ).

// Temporal Dead Zone (TDZ):
// The TDZ is a period between the start of a block and the declaration of a variable using let or const.
// During this time, the variable is inaccessible. 
// Attempting to access it before its declaration will result in a ReferenceError



let a;

console.log(a);
// console.log(b);

 let b = 5;
a = 10;