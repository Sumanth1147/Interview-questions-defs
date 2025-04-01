// Difference between var and let keyword in javascript.


// In JavaScript, both var and let are used to declare variables, but they have some key differences in terms of scope, hoisting, and re-declaration.

// 1. Scope
// var is function-scoped
// Variables declared with var are accessible throughout the entire function in which they are declared.
// If declared outside any function, it becomes a global variable.
// let is block-scoped
// Variables declared with let are only accessible within the block {} in which they are declared.
// 🔹 Example:

// javascript
function example() {
    if (true) {
        var a = 10; // Function-scoped
        let b = 20; // Block-scoped
    }
    console.log(a); // ✅ Works (function-scoped)
    console.log(b); // ❌ Error (b is block-scoped)
}
// example();
// 2. Hoisting
// var is hoisted but initialized as undefined.
// let is hoisted but not initialized (it remains in the "temporal dead zone" until it is declared).
// 🔹 Example:

// javascript
console.log(x); // ✅ undefined (hoisted with default value)
var x = 5;

console.log(y1); // ❌ ReferenceError: Cannot access 'y' before initialization
let y1 = 10;
// 3. Re-declaration
// var allows re-declaration in the same scope.
// let does not allow re-declaration in the same scope.
// 🔹 Example:

// javascript
var a = 10;
var a = 20; // ✅ No error

// let b = 30;
// let b = 40; // ❌ SyntaxError: Identifier 'b' has already been declared
// 4. Global Object Property
// var creates a property on the window object in browsers.
// let does not create a global property.
// 🔹 Example:

// javascript
var x = 100;
console.log(window.x); // ✅ 100 (exists in global scope)

let y = 200;
console.log(window.y); // ❌ undefined (not attached to window)
// Summary Table
// Feature	                            var	             let
// Scope	                      Function-scoped   	Block-scoped
// Hoisting	                  Hoisted with undefined	Hoisted but not initialized
// Re-declaration                       	Allowed  	Not allowed
// Global Object Property	     Yes (window.varName)	No

// ✅ Use let over var for better block scoping, avoiding hoisting issues, and preventing re-declaration errors. 🚀