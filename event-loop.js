
// \Documents\ReactJs\sigmawebdev\event-loop\Screenshot 2024-11-23 191007.png

// JavaScript is a single-threaded language, meaning it can only execute one task at a time.
// However, it can handle asynchronous operations like network requests, timeouts 
// and I/O operations using a mechanism called the event loop.


// ***************************** refer links  --- event loop, micro task, macro task
//  https://www.linkedin.com/pulse/mastering-javascript-asynchrony-simplifying-event-loop-shubham-khan-0k2sc/
// https://chat.deepseek.com/a/chat/s/51fe8453-c139-4d8d-84b1-6a12c45383d9
// https://javascript.info/event-loop
// https://dev.to/rajatoberoi/understanding-the-event-loop-callback-queue-and-call-stack-in-javascript-1k7c

// How the Event Loop Works:
// JavaScript is a fascinating single-threaded, non-blocking, asynchronous, and concurrent language.

// Call Stack:
// Imagine the call stack as a list where JavaScript keeps track of function calls. When you call a function, it gets added to the top of this list. Once the function finishes, it’s removed. If a function calls another function, the new one gets added to the top, creating a stacking effect.

// Event Loop: 
// The event loop is like a diligent coordinator, making sure everything runs smoothly. It watches over the call stack and task queues. If the call stack is empty, it checks the task queues and moves tasks to the call stack for execution. This helps keep your applications responsive and free from freezing.

// Microtask Queue:
// Microtasks are usually promises and mutation observers. When a promise resolves, its .then() callback goes to the microtask queue. Microtasks are the top priority. After finishing a task in the call stack, the event loop first handles all tasks in the microtask queue before moving to the macrotask queue, ensuring crucial operations are done quickly.

// Macrotask Queue:
// Macrotasks include timers (setTimeout, setInterval), I/O operations, and other events. These tasks go into the macrotask queue. The event loop processes them one by one in a first-in, first-out (FIFO) order, but only after the call stack and microtask queue are empty.

// How They Work Together:
// Call Stack Execution: Functions run one at a time.
// Microtask Processing: After the call stack is empty, the event loop handles all microtasks.
// Macrotask Processing: Once the microtask queue is empty, the event loop processes the next macrotask.

// Visualizing the Flow:
// Call Stack: Functions are added and removed like a stack of dishes.
// Microtask Queue: Promises and other high-priority tasks are queued and executed first.
// Macrotask Queue: Timers and other lower-priority tasks are queued and executed after microtasks.
// Execution Context: When JavaScript code is executed, it creates an execution context, which includes the code being executed and its variables.
// Call Stack: The execution context is pushed onto the call stack, a data structure that keeps track of the current function calls.
// Asynchronous Operations: When an asynchronous operation is encountered (e.g., a setTimeout or a network request), it is offloaded to the browser or Node.js environment's underlying API.
// Callback Queue: Once the asynchronous operation completes, a callback function is added to the callback queue.
// Event Loop: The event loop continuously checks the call stack and the callback queue.
// If the call stack is empty, it takes the first 1 callback from the queue and pushes it onto the call stack


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// output : Start
//         End
//         Timeout