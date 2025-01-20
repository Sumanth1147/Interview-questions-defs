// \Documents\ReactJs\sigmawebdev\event-loop\Screenshot 2024-11-23 191007.png

// JavaScript is a single-threaded language, meaning it can only execute one task at a time.
// However, it can handle asynchronous operations like network requests, timeouts, 
// and I/O operations using a mechanism called the event loop.


// How the Event Loop Works:

// Execution Context: When JavaScript code is executed, it creates an execution context, which includes the code being executed and its variables.
// Call Stack: The execution context is pushed onto the call stack, a data structure that keeps track of the current function calls.
// Asynchronous Operations: When an asynchronous operation is encountered (e.g., a setTimeout or a network request), it is offloaded to the browser or Node.js environment's underlying API.
// Callback Queue: Once the asynchronous operation completes, a callback function is added to the callback queue.
// Event Loop: The event loop continuously checks the call stack and the callback queue.
// If the call stack is empty, it takes the first1 callback from the queue and pushes it onto the call stack


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// output : Start
//         End
//         Timeout