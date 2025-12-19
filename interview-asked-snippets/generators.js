// JavaScript generators are special functions that can be paused and resumed, allowing them to yield multiple values over time rather than returning a single value and terminating. They are defined using the function* syntax.

// Here are the key aspects of JavaScript generators:

// Generator Functions: These are declared with an asterisk after the function keyword (e.g., function* myGenerator() {}). When called, they do not execute immediately; instead, they return a Generator Object.

// Generator Objects: These objects are iterators, meaning they have a next() method. Calling next() resumes the execution of the generator function until the next yield statement is encountered or the function finishes.

// yield Keyword: This keyword is used within a generator function to pause its execution and return a value to the caller. The generator's state is preserved, and execution can be resumed from that point with the next call to next().

// next() Method: When next() is called on a generator object, it returns an object with two properties:

// value: The value yielded by the yield statement, or the return value of the generator function if it has completed.

// done: A boolean indicating whether the generator has finished executing (true) or if there are more values to yield (false).

// Uses of Generators:
// Creating Iterators: Generators simplify the creation of custom iterators, making it easy to define sequences of values.

// Handling Asynchronous Operations: They can be used to write asynchronous code in a more synchronous-looking style, especially when combined with Promises or async/await (though async/await is often preferred for direct asynchronous control flow).

// Lazy Evaluation and Infinite Sequences: Generators are efficient for producing values on demand, making them suitable for infinite data streams or large datasets where you only need to process chunks at a time.

// Controlling Execution Flow: They offer a powerful way to manage complex program flow by pausing and resuming functions.

// Example:
// JavaScript

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return "Finished!"; // The return value is the final 'value' in the done: true state
}

const generator = numberGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 'Finished!', done: true }
console.log(generator.next()); // { value: undefined, done: true } (subsequent calls 