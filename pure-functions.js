// Pure Functions --> Have no side effects: They don't modify any external state or variables outside their scope.   
//     --> Deterministic: Given the same input, they always return the same output.

function add(a, b) {
    return a + b;
  }


  // impure functions
//   Have side effects: They modify external state or variables.   
// Non-deterministic: They may return different outputs for the same input, depending on factors like time or external state.   
// Example:

let counter = 0;

function increment() {
  counter++;
  return counter;
}


// all higher order functions are pure functions
// A higher-order function is a function that takes one or more functions as arguments or returns a function.
// map, filter, reduce
const array = [1, 2, 3, 4, 5]

const odd = array.filter((i) => i % 2 !== 0)
console.log(odd);
