// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations in a more readable and manageable way compared to traditional callback-based approaches.

// Why Use Promises?
// Before Promises, asynchronous operations were handled using callbacks, which often led to callback hell (deeply nested and hard-to-read code). Promises provide a cleaner and more structured way to handle asynchronous tasks, making code easier to write, read, and debug.

// Key Concepts of Promises
// States of a Promise:

// Pending: The initial state. The operation is still in progress.

// Fulfilled: The operation completed successfully.

// Rejected: The operation failed.

// Immutability:

// Once a Promise is fulfilled or rejected, its state cannot change.

// Chaining:

// Promises can be chained using .then() and .catch() to handle the results of asynchronous operations sequentially.

// Creating a Promise
// A Promise is created using the Promise constructor, which takes a function (called the executor) with two parameters: resolve and reject.

// javascript
// Copy
// const myPromise = new Promise((resolve, reject) => {
//   // Perform an asynchronous operation
//   const success = true; // Simulate success or failure

//   if (success) {
//     resolve("Operation succeeded!"); // Fulfill the Promise
//   } else {
//     reject("Operation failed!"); // Reject the Promise
//   }
// });
// Consuming a Promise
// Once a Promise is created, you can handle its result using .then() for fulfillment and .catch() for rejection.

// Example:
// javascript
// Copy
// myPromise
//   .then((result) => {
//     console.log(result); // "Operation succeeded!"
//   })
//   .catch((error) => {
//     console.error(error); // "Operation failed!"
//   });
// Chaining Promises
// Promises can be chained to perform multiple asynchronous operations sequentially. Each .then() returns a new Promise, allowing you to chain further operations.

// Example:
// javascript
// Copy
// const fetchData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
//   });
// };

// const processData = (data) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${data} and processed`), 1000);
//   });
// };

// fetchData()
//   .then((data) => {
//     console.log(data); // "Data fetched"
//     return processData(data); // Return a new Promise
//   })
//   .then((processedData) => {
//     console.log(processedData); // "Data fetched and processed"
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// Handling Errors
// Errors in Promises can be handled using .catch() or by passing a second function to .then().



// Example with .catch():
// javascript
// Copy
// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error); // Handles any errors in the chain
//   });
// Example with .then() error handler:
// javascript
// Copy
// myPromise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.error(error); // Handles errors for this specific Promise
//   }
// );
// Static Methods of the Promise Object


// Promise.resolve():

// Returns a Promise that is resolved with a given value.

// javascript
// Copy
// Promise.resolve("Resolved value").then((result) => console.log(result));
// Promise.reject():

// Returns a Promise that is rejected with a given reason.

// javascript
// Copy
// Promise.reject("Rejected reason").catch((error) => console.error(error));


// Promise.all():

// Takes an array of Promises and returns a single Promise that resolves when all Promises in the array have resolved, or rejects if any Promise is rejected.

// javascript
// Copy
// Promise.all([promise1, promise2])
//   .then((results) => console.log(results))
//   .catch((error) => console.error(error));


// Promise.race():

// Returns a Promise that resolves or rejects as soon as one of the Promises in the array resolves or rejects.

// javascript
// Copy
// Promise.race([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


// Promise.allSettled():

// Returns a Promise that resolves after all Promises in the array have either resolved or rejected, providing an array of results.

// javascript
// Copy
// Promise.allSettled([promise1, promise2])
//   .then((results) => console.log(results));


// Promise.any():
// Returns a Promise that resolves as soon as any of the Promises in the array resolves. If all Promises are rejected, it rejects with an aggregate error.

// javascript
// Copy
// Promise.any([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// Async/Await: Syntactic Sugar for Promises
// async and await are modern JavaScript features that make working with Promises even easier. An async function automatically returns a Promise, and await pauses the execution of the function until the Promise is resolved.

// Example:
// javascript
// Copy
// async function fetchData() {
//   try {
//     const data = await myPromise; // Wait for the Promise to resolve
//     console.log(data); // "Operation succeeded!"
//   } catch (error) {
//     console.error(error); // Handle errors
//   }
// }

// fetchData();
// Summary
// A Promise represents the eventual completion (or failure) of an asynchronous operation.

// Promises have three states: pending, fulfilled, and rejected.

// Use .then() to handle fulfillment, .catch() to handle rejection, and .finally() to perform cleanup.

// Promises can be chained to perform sequential asynchronous operations.

// Static methods like Promise.all(), Promise.race(), and Promise.any() provide advanced ways to work with multiple Promises.

// async/await provides a cleaner syntax for working with Promises.